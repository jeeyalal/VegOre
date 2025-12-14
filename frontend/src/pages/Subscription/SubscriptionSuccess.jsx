// src/pages/Subscription/SubscriptionSuccess.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { CheckCircle, Package, Calendar, Mail, Download } from "lucide-react";

export default function SubscriptionSuccess() {
  const { subscription } = useSubscription();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1); // Start from tomorrow

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + subscription.duration);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 relative overflow-hidden">
      {/* Animated Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              {['🎉', '🎊', '✨', '🌟', '💚'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-6">
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-600 animate-bounce" />
              <div className="absolute inset-0 bg-green-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Subscription Activated! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to your healthy eating journey with VegOre
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6 pb-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Order Confirmed
              </h2>
              <p className="text-gray-500">Order ID: {subscription.orderId}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-700">
                ₹{subscription.totalPrice}
              </div>
              <div className="text-sm text-gray-500">Paid Successfully</div>
            </div>
          </div>

          {/* Subscription Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Plan</div>
                <div className="font-semibold text-gray-800 text-lg">
                  {subscription.planName}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-semibold text-gray-800">
                  {subscription.duration} Days
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-1">Diet Type</div>
                <div className="font-semibold text-gray-800 capitalize">
                  {subscription.dietType}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Delivery Address</div>
                <div className="text-gray-800">
                  {subscription.userDetails.name}<br />
                  {subscription.userDetails.address}<br />
                  {subscription.userDetails.city}, {subscription.userDetails.pincode}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-1">Meal Times</div>
                <div className="flex gap-2 flex-wrap">
                  {subscription.timeSlots.map((slot) => (
                    <span
                      key={slot}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm capitalize font-medium"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Period */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Starts On</div>
                <div className="font-semibold text-gray-800">
                  {formatDate(startDate)}
                </div>
              </div>
              <div className="text-2xl text-gray-300">→</div>
              <div className="text-center">
                <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Ends On</div>
                <div className="font-semibold text-gray-800">
                  {formatDate(endDate)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Check Your Email</h3>
            <p className="text-sm text-gray-600">
              Order confirmation sent to {subscription.userDetails.email}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">First Delivery</h3>
            <p className="text-sm text-gray-600">
              Your first meal arrives tomorrow at your selected time
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Download Invoice</h3>
            <button className="text-sm text-green-600 hover:text-green-700 font-semibold">
              Get PDF Invoice
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all duration-300"
          >
            Explore Menu
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Need help with your subscription?</p>
          <a href="/contact" className="text-green-600 hover:text-green-700 font-semibold">
            Contact Support
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 3s linear;
        }
      `}</style>
    </div>
  );
}