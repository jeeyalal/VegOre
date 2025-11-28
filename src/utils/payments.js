export const initiatePayment = async (amount) => {
  try {
    // Create order from backend
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

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

      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);

        // TODO: Clear cart and redirect
      },

      prefill: {
        name: "User",
        email: "test@example.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  } catch (error) {
    console.error("Payment Error:", error);
  }
};
