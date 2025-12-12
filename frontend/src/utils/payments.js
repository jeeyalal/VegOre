import { toast } from "react-toastify";

export const initiatePayment = async (amount, item = null) => {
  try {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    const RZ_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
    const token = localStorage.getItem("token");

    if (!RZ_KEY) {
      toast.error("Razorpay key not configured. Falling back to offline mock.");
      return false;
    }
    if (!token) {
      alert("Please login to complete the payment.");
      return;
    }

    const res = await fetch(`${BACKEND_URL}/api/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(token ? { token } : {}) },
      body: JSON.stringify({ amount, items: item ? [item] : undefined }),
    });

    const data = await res.json();
    if (!data.success) {
      alert("Failed to create payment order");
      return;
    }

    const order = data.order;
    // Load Razorpay script
    if (!window.Razorpay) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    const options = {
      key: RZ_KEY,
      amount: order.amount,
      currency: "INR",
      name: "VegOre",
      description: item?.name || "Food Purchase",
      order_id: order.id,
      prefill: {
        name: (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).name) || "",
        email: (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).email) || "",
        contact: (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).phone) || "",
      },
      handler: async function (response) {
        try {
          const verifyRes = await fetch(`${BACKEND_URL}/api/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json", ...(token ? { token } : {}) },
            body: JSON.stringify({ ...response, orderData: { amount, items: item ? [item] : [] } }),
          });

          const verifyData = await verifyRes.json();
          if (!verifyData.success) throw new Error("Verification failed");

          toast.success("Payment successful!");
          window.location.href = "/order-success";
          return true;
        } catch (err) {
          console.error("Payment verify failed", err);
          alert("Payment verification failed.");
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    } catch (error) {
    console.error("Payment Error:", error);
      return false;
  }
  return true;
};
