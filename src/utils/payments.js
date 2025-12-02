import api from "../api/axios";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiatePayment = async (amount, userDetails = {}, onSuccess) => {
  try {
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Please check your internet connection or disable ad blockers.");
      return;
    }

    // Create order from backend
    const { data } = await api.post("/payments/create-order", { amount });

    if (!data.success) {
      alert("Error creating order");
      return;
    }

    const options = {
      key: "rzp_test_Rl8mkbfuIxANIx", // TEST KEY (SAFE)
      amount: data.order.amount,
      currency: "INR",
      name: "VegOre",
      description: "Food Purchase",
      order_id: data.order.id,
      theme: { color: "#16a34a" },

      handler: async function (response) {
        try {
          const verifyRes = await api.post("/payments/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            orderData: {
              amount,
              ...userDetails,
            },
          });

          if (verifyRes.data.success) {
            alert("Payment Successful!");
            if (onSuccess) onSuccess(verifyRes.data);
          } else {
            alert("Payment verification failed");
          }
        } catch (error) {
          console.error("Verification Error:", error);
          alert("Payment verification failed");
        }
      },

      prefill: {
        name: userDetails.name || "User",
        email: userDetails.email || "test@example.com",
        contact: userDetails.phone || "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong while initiating payment. Ensure you are logged in.");
  }
};
