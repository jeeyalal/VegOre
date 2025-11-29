// src/pages/Subscription/MenuPreview.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { dishes } from "../../data/dishes";
import { RefreshCw, ArrowRight, StickyNote } from "lucide-react";

export default function MenuPreview() {
  const navigate = useNavigate();
  const { subscription, setSubscription } = useSubscription();
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [notes, setNotes] = useState(subscription.specialNotes || "");

  // Get random dishes based on plan type and diet type
  const getRandomDishes = () => {
    const { planType, dietType } = subscription;
    
    let category;
    if (planType === "meal") category = "meals";
    else if (planType === "salad") category = "salads";
    else if (planType === "smoothie") category = "smoothies";
    else category = "meals"; // default

    const availableDishes = dishes[dietType]?.[category] || dishes.normal.meals;
    
    // Shuffle and select random dishes
    const shuffled = [...availableDishes].sort(() => 0.5 - Math.random());
    const count = Math.min(5, shuffled.length); // Show max 5 dishes
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (subscription.selectedDishes.length > 0) {
      setSelectedDishes(subscription.selectedDishes);
    } else {
      setSelectedDishes(getRandomDishes());
    }
  }, []);

  const handleRefresh = () => {
    setSelectedDishes(getRandomDishes());
  };

  const handleContinue = () => {
    setSubscription((prev) => ({
      ...prev,
      selectedDishes,
      specialNotes: notes,
    }));
    navigate("/subscription/user-details");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Your Menu Preview
          </h1>
          <p className="text-gray-600 mb-4">
            Here's what you'll be enjoying with your {subscription.planName}
          </p>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Menu
          </button>
        </div>

        {/* Subscription Summary */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm opacity-90 mb-1">Plan</div>
              <div className="text-xl font-bold">{subscription.planName}</div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">Duration</div>
              <div className="text-xl font-bold">{subscription.duration} Days</div>
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">Diet Type</div>
              <div className="text-xl font-bold capitalize">{subscription.dietType}</div>
            </div>
          </div>
          <div className="mt-4 text-center border-t border-white/20 pt-4">
            <div className="text-sm opacity-90 mb-1">Time Slots</div>
            <div className="flex gap-2 justify-center flex-wrap">
              {subscription.timeSlots.map((slot) => (
                <span key={slot} className="px-3 py-1 bg-white/20 rounded-full text-sm capitalize">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {selectedDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                  <span className="text-green-700 font-bold">₹{dish.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {dish.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 text-xs">Calories</div>
                    <div className="font-semibold">{dish.nutrition.calories}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 text-xs">Protein</div>
                    <div className="font-semibold">{dish.nutrition.protein}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 text-xs">Carbs</div>
                    <div className="font-semibold">{dish.nutrition.carbs}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 text-xs">Fat</div>
                    <div className="font-semibold">{dish.nutrition.fat}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <StickyNote className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Special Notes</h2>
            <span className="text-sm text-gray-500">(Optional)</span>
          </div>
          
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any dietary restrictions, allergies, or special requests? Let us know here..."
            className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-green-500 focus:outline-none resize-none"
            rows={4}
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
        >
          Continue to Details
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Info Note */}
        <p className="text-center text-sm text-gray-500 mt-4">
          * Menu items may vary based on seasonal availability
        </p>
      </div>
    </div>
  );
}