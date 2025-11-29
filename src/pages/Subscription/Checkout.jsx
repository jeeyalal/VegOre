// src/pages/Subscription/Checkout.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { ShoppingCart, Package, Calendar, MapPin, Edit2, ArrowRight } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { subscription, setSubscription } = useSubscription();
  const [pricing, setPricing] = useState({
    subtotal: 0,
    delivery: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    calculatePricing();
  }, []);

  const calculatePricing = () => {
    const { selectedDishes, duration, timeSlots } = subscription;
    
    // Calculate base price from selected dishes
    const dishTotal = selectedDishes.reduce((sum, dish) => sum + dish.price, 0);
    
    // Price per day = average dish price × number of time slots
    const pricePerDay = (dishTotal / selectedDishes.length) * timeSlots.length;
    
    // Subtotal = price per day × duration
    const subtotal = Math.round(pricePerDay * duration);
    
    // Delivery charges (free for 30 days)
    const delivery = duration === 30 ? 0 : duration === 14 ? 50 : 100;
    
    // Tax (5% GST)
    const tax = Math.round((subtotal + delivery) * 0.05);
    
    // Total
    const total = subtotal + delivery + tax;

    setPricing({ subtotal, delivery, tax, total });
    
    setSubscription((prev) => ({
      ...prev,
      basePrice: pricePerDay,
      totalPrice: total,
    }));
  };

  const handleProceedToPayment = () => {
    navigate("/subscription/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Order Summary
          </h1>
          <p className="text-gray-600">
            Review your subscription details before payment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Order Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Subscription Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  Subscription Details
                </h2>
                <button
                  onClick={() => navigate("/subscription/customize")}
                  className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Plan Type</span>
                  <span className="font-semibold">{subscription.planName}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{subscription.duration} Days</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Diet Type</span>
                  <span className="font-semibold capitalize">{subscription.dietType}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Meal Times</span>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {subscription.timeSlots.map((slot) => (
                      <span
                        key={slot}
                        className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs capitalize"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Dishes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                  Your Menu ({subscription.selectedDishes.length} items)
                </h2>
                <button
                  onClick={() => navigate("/subscription/menu-preview")}
                  className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {subscription.selectedDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={dish.img}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{dish.name}</h3>
                      <div className="text-xs text-gray-500 mt-1">
                        {dish.nutrition.calories} cal · {dish.nutrition.protein} protein
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-700">₹{dish.price}</div>
                    </div>
                  </div>
                ))}
              </div>

              {subscription.specialNotes && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    Special Notes:
                  </div>
                  <div className="text-sm text-gray-600">
                    {subscription.specialNotes}
                  </div>
                </div>
              )}
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Delivery Address
                </h2>
                <button
                  onClick={() => navigate("/subscription/user-details")}
                  className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-800">
                  {subscription.userDetails.name}
                </div>
                <div className="text-gray-600">
                  {subscription.userDetails.phone} · {subscription.userDetails.email}
                </div>
                <div className="text-gray-600">
                  {subscription.userDetails.address}
                </div>
                <div className="text-gray-600">
                  {subscription.userDetails.city}, {subscription.userDetails.pincode}
                </div>
                {subscription.userDetails.landmark && (
                  <div className="text-sm text-gray-500">
                    Landmark: {subscription.userDetails.landmark}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Price Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({subscription.duration} days)</span>
                  <span>₹{pricing.subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges</span>
                  <span className={pricing.delivery === 0 ? "text-green-600 font-semibold" : ""}>
                    {pricing.delivery === 0 ? "FREE" : `₹${pricing.delivery}`}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>GST (5%)</span>
                  <span>₹{pricing.tax}</span>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-green-700">
                      ₹{pricing.total}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 text-right mt-1">
                    ≈ ₹{Math.round(pricing.total / subscription.duration)}/day
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToPayment}
                className="w-full mt-6 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                Proceed to Payment
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Starts from next available slot</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Package className="w-4 h-4" />
                  <span>Free cancellation anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}