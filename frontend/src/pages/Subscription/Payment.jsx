// src/pages/Subscription/Payment.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { CreditCard, Smartphone, Building2, Check, Loader2 } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const { subscription, setSubscription } = useSubscription();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [processing, setProcessing] = useState(false);

  // VALID PAYMENT METHODS ARRAY
  const paymentMethods = [
    {
      id: "card",
      name: "Credit / Debit Card",
      description: "Pay securely using your card",
      icon: CreditCard,
    },
    {
      id: "upi",
      name: "UPI",
      description: "Pay using any UPI app",
      icon: Smartphone,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      description: "Pay directly from your bank",
      icon: Building2,
    },
  ];

  // ✔ FIXED HANDLE PAYMENT FUNCTION
  const handlePayment = async () => {
    setProcessing(true);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    const RZ_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
    const token = localStorage.getItem("token");

    // ----------------------------
    // CASE 1: NO RAZORPAY KEY → SIMULATE PAYMENT SUCCESS
    // ----------------------------
    if (!RZ_KEY) {
      setTimeout(async () => {
        try {
          const orderId = `VEG${Date.now()}`;

          const payload = {
            ...subscription,
            payment: { provider: selectedMethod, status: "success", orderId },
          };

          const headers = { "Content-Type": "application/json" };
          if (token) headers.token = token;

          await axios.post(`${BACKEND_URL}/api/subscriptions/create`, payload, { headers });

          setSubscription((prev) => ({ ...prev, orderId }));
          navigate("/subscription/success");
        } catch (err) {
          console.error("Subscription create failed", err);
          alert("Something went wrong while creating subscription.");
        }

        setProcessing(false);
      }, 2000);

      return;
    }

    // ----------------------------
    // CASE 2: REAL RAZORPAY PAYMENT
    // ----------------------------
    try {
      const orderRes = await axios.post(
        `${BACKEND_URL}/api/payments/create-order`,
        { amount: subscription.totalPrice },
        { headers: { token } }
      );

      if (!orderRes.data.success) throw new Error("Order creation failed");

      const order = orderRes.data.order;

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
        currency: order.currency,
        name: "VegOre",
        description: subscription.planName,
        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              `${BACKEND_URL}/api/payments/verify`,
              {
                ...response,
                subscriptionData: subscription,
              },
              { headers: { token } }
            );

            if (!verifyRes.data.success) throw new Error("Verification failed");

            const sub = verifyRes.data.subscription;

            setSubscription((prev) => ({
              ...prev,
              orderId: sub._id || sub.orderId,
            }));

            navigate("/subscription/success");
          } catch (err) {
            console.error("Payment verification failed", err);
            alert("Verification failed. Contact support.");
          }
        },

        prefill: {
          name: subscription.userDetails?.name,
          email: subscription.userDetails?.email,
          contact: subscription.userDetails?.phone,
        },

        theme: { color: "#38A169" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay error:", err);
      alert("Payment failed. Try again.");
    }

    setProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Complete Payment
          </h1>
          <p className="text-gray-600">Choose your preferred payment method</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                        selectedMethod === method.id
                          ? "border-green-600 bg-green-50 shadow-md"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            selectedMethod === method.id
                              ? "bg-green-600 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800">
                            {method.name}
                          </h3>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>

                        {selectedMethod === method.id && (
                          <Check className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={processing}
                className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-3 ${
                  processing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>Pay ₹{subscription.totalPrice}</>
                )}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-semibold">{subscription.planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold">{subscription.duration} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Diet Type</span>
                <span className="font-semibold capitalize">{subscription.dietType}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-lg font-bold text-green-700">
                  <span>Total Amount</span>
                  <span>₹{subscription.totalPrice}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔒</div>
                <p className="text-xs text-gray-600">
                  Your payment is encrypted & secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-50 border-2 border-yellow-200 rounded-xl px-6 py-3">
            <p className="text-sm text-yellow-800">
              ⚠️ <strong>Demo Mode:</strong> No actual payment will be deducted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
