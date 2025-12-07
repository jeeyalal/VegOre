// src/pages/Subscription/CustomizeSubscription.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { Calendar, Leaf, Clock, ArrowRight } from "lucide-react";

export default function CustomizeSubscription() {
  const navigate = useNavigate();
  const { subscription, setSubscription } = useSubscription();
  
  const [selected, setSelected] = useState({
    duration: subscription.duration || null,
    dietType: subscription.dietType || null,
    timeSlots: subscription.timeSlots || [],
  });

  const durations = [
    { value: 7, label: "Weekly", days: "7 Days", price: 199 },
    { value: 14, label: "Bi-Weekly", days: "14 Days", price: 349, popular: true },
    { value: 30, label: "Monthly", days: "30 Days", price: 599 },
  ];

  const dietTypes = [
    { 
      value: "normal", 
      label: "Normal", 
      icon: "🍽️",
      description: "Regular vegetarian meals"
    },
    { 
      value: "vegan", 
      label: "Vegan", 
      icon: "🌱",
      description: "100% plant-based"
    },
    { 
      value: "jain", 
      label: "Jain", 
      icon: "🕉️",
      description: "No onion, no garlic"
    },
  ];

  const timeSlots = [
    { value: "breakfast", label: "Breakfast", time: "7AM - 9AM", icon: "☀️" },
    { value: "lunch", label: "Lunch", time: "12PM - 2PM", icon: "🌤️" },
    { value: "dinner", label: "Dinner", time: "7PM - 9PM", icon: "🌙" },
  ];

  const toggleTimeSlot = (slot) => {
    setSelected((prev) => ({
      ...prev,
      timeSlots: prev.timeSlots.includes(slot)
        ? prev.timeSlots.filter((s) => s !== slot)
        : [...prev.timeSlots, slot],
    }));
  };

  const handleContinue = () => {
    if (!selected.duration || !selected.dietType || selected.timeSlots.length === 0) {
      alert("Please select duration, diet type, and at least one time slot");
      return;
    }

    setSubscription((prev) => ({
      ...prev,
      duration: selected.duration,
      dietType: selected.dietType,
      timeSlots: selected.timeSlots,
    }));

    navigate("/subscription/menu-preview");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Customize Your {subscription.planName}
          </h1>
          <p className="text-gray-600">
            Personalize your subscription to match your preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* Duration Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Choose Duration</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  onClick={() => setSelected({ ...selected, duration: duration.value })}
                  className={`
                    relative p-6 rounded-xl border-2 transition-all duration-300
                    ${selected.duration === duration.value
                      ? "border-green-600 bg-green-50 shadow-lg scale-105"
                      : "border-gray-200 hover:border-green-300 hover:shadow-md"
                    }
                  `}
                >
                  {duration.popular && (
                    <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-1">
                      {duration.value}
                    </div>
                    <div className="text-sm text-gray-500 mb-3">{duration.days}</div>
                    <div className="text-xl font-semibold text-gray-800">
                      ₹{duration.price}/day
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Diet Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Select Diet Type</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {dietTypes.map((diet) => (
                <button
                  key={diet.value}
                  onClick={() => setSelected({ ...selected, dietType: diet.value })}
                  className={`
                    p-6 rounded-xl border-2 transition-all duration-300 text-center
                    ${selected.dietType === diet.value
                      ? "border-green-600 bg-green-50 shadow-lg scale-105"
                      : "border-gray-200 hover:border-green-300 hover:shadow-md"
                    }
                  `}
                >
                  <div className="text-4xl mb-3">{diet.icon}</div>
                  <div className="font-bold text-lg text-gray-800 mb-2">
                    {diet.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {diet.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Select Time Slots</h2>
              <span className="text-sm text-gray-500">(Select multiple)</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot.value}
                  onClick={() => toggleTimeSlot(slot.value)}
                  className={`
                    p-6 rounded-xl border-2 transition-all duration-300
                    ${selected.timeSlots.includes(slot.value)
                      ? "border-green-600 bg-green-50 shadow-lg"
                      : "border-gray-200 hover:border-green-300 hover:shadow-md"
                    }
                  `}
                >
                  <div className="text-4xl mb-3">{slot.icon}</div>
                  <div className="font-bold text-lg text-gray-800 mb-1">
                    {slot.label}
                  </div>
                  <div className="text-sm text-gray-500">{slot.time}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selected.duration || !selected.dietType || selected.timeSlots.length === 0}
            className={`
              w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300
              ${!selected.duration || !selected.dietType || selected.timeSlots.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
              }
            `}
          >
            Continue to Menu Preview
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}