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

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Pay securely with your card",
    },
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Pay using UPI apps",
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building2,
      description: "Pay through your bank",
    },
  ];

  const handlePayment = () => {
    setProcessing(true);

    // Simulate payment processing
    setTimeout(async () => {
      const orderId = `VEG${Date.now()}`;

      // Update subscription status in context
      setSubscription((prev) => ({
        ...prev,
        paymentStatus: "success",
        orderId: orderId,
      }));

      // Send subscription data to backend
      try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
        const token = localStorage.getItem("token");
        const payload = {
          planType: subscription.planType,
          planName: subscription.planName,
          duration: subscription.duration,
          dietType: subscription.dietType,
          timeSlots: subscription.timeSlots,
          selectedDishes: subscription.selectedDishes,
          specialNotes: subscription.specialNotes,
          userDetails: subscription.userDetails,
          basePrice: subscription.basePrice,
          totalPrice: subscription.totalPrice,
          payment: { provider: selectedMethod, status: "success", orderId },
        };

        const headers = { "Content-Type": "application/json" };
        if (token) headers.token = token;

          const res = await axios.post(`${BACKEND_URL}/api/subscriptions/create`, payload, { headers });
          if (res.data?.success && res.data.subscription) {
            const sub = res.data.subscription;
            // Update context orderId with backend id if returned
            setSubscription((prev) => ({ ...prev, orderId: sub._id || sub.orderId || prev.orderId }));
          }
      } catch (err) {
        console.error("Failed to create subscription record", err);
      }

      setProcessing(false);
      navigate("/subscription/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Complete Payment
          </h1>
          <p className="text-gray-600">
            Choose your preferred payment method
          </p>
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
                      className={`
                        w-full p-5 rounded-xl border-2 transition-all duration-300 text-left
                        ${selectedMethod === method.id
                          ? "border-green-600 bg-green-50 shadow-md"
                          : "border-gray-200 hover:border-green-300"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`
                          p-3 rounded-lg
                          ${selectedMethod === method.id
                            ? "bg-green-600 text-white"
                            : "bg-gray-100 text-gray-600"
                          }
                        `}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800">
                            {method.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {method.description}
                          </p>
                        </div>
                        {selectedMethod === method.id && (
                          <Check className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Payment Form Based on Selected Method */}
              <div className="mt-8">
                {selectedMethod === "card" && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 mb-4">
                      Enter Card Details
                    </h3>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
                      maxLength={16}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
                        maxLength={5}
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
                        maxLength={3}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
                    />
                  </div>
                )}

                {selectedMethod === "upi" && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 mb-4">
                      Enter UPI ID
                    </h3>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500"
                    />
                    <div className="flex gap-3 flex-wrap">
                      {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                        <button
                          key={app}
                          className="px-4 py-2 bg-gray-100 hover:bg-green-50 border-2 border-gray-200 hover:border-green-300 rounded-lg transition-all"
                        >
                          {app}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedMethod === "netbanking" && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 mb-4">
                      Select Your Bank
                    </h3>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500">
                      <option>Select Bank</option>
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={processing}
                className={`
                  w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300
                  ${processing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                  }
                `}
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    Pay ₹{subscription.totalPrice}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
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
                  <div className="text-xs text-gray-600">
                    Your payment information is encrypted and secure. We never store your card details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Mode Notice */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-50 border-2 border-yellow-200 rounded-xl px-6 py-3">
            <p className="text-sm text-yellow-800">
              ⚠️ <strong>Demo Mode:</strong> This is a dummy payment gateway. No actual charges will be made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}