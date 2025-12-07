// src/pages/Subscription/ChoosePlan.jsx
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { Utensils, Salad, Wine, Scale, Sparkles } from "lucide-react";

export default function ChoosePlan() {
  const navigate = useNavigate();
  const { setSubscription } = useSubscription();

  const plans = [
    {
      id: "meal",
      name: "Meal Subscription",
      icon: Utensils,
      description: "Healthy, balanced meals delivered fresh",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      available: true,
    },
    {
      id: "salad",
      name: "Salad Subscription",
      icon: Salad,
      description: "Fresh, crunchy salads for health enthusiasts",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      available: true,
    },
    {
      id: "smoothie",
      name: "Smoothie Subscription",
      icon: Wine,
      description: "Energizing smoothies packed with nutrition",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      available: true,
    },
    {
      id: "weightloss",
      name: "Weight Loss Plan",
      icon: Scale,
      description: "Customized meals for your fitness goals",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      available: false,
      badge: "Coming Soon",
    },
    {
      id: "custom",
      name: "Customize Your Plan",
      icon: Sparkles,
      description: "Mix and match to create your perfect plan",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      available: true,
    },
  ];

  const handlePlanSelect = (plan) => {
    if (!plan.available) return;
    
    setSubscription((prev) => ({
      ...prev,
      planType: plan.id,
      planName: plan.name,
    }));
    
    navigate("/subscription/customize");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select a subscription plan that fits your lifestyle
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan)}
                className={`
                  relative rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300
                  ${plan.available 
                    ? "hover:scale-105 hover:shadow-2xl cursor-pointer" 
                    : "opacity-60 cursor-not-allowed"
                  }
                `}
              >
                {/* Card Background */}
                <div className={`${plan.color} p-8 text-white h-64 flex flex-col justify-between`}>
                  <div>
                    <Icon className="w-12 h-12 mb-4" strokeWidth={2} />
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/90 text-sm">{plan.description}</p>
                  </div>
                  
                  {plan.available ? (
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                      <span className="font-semibold">Get Started →</span>
                    </div>
                  ) : (
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                      <span className="font-semibold text-gray-700">{plan.badge}</span>
                    </div>
                  )}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose VegOre?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold text-lg mb-2">100% Vegetarian</h3>
              <p className="text-gray-600 text-sm">Fresh, healthy, and delicious vegetarian meals</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚚</div>
              <h3 className="font-semibold text-lg mb-2">Daily Delivery</h3>
              <p className="text-gray-600 text-sm">Fresh meals delivered right to your doorstep</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💪</div>
              <h3 className="font-semibold text-lg mb-2">Nutrition Focused</h3>
              <p className="text-gray-600 text-sm">Balanced meals with complete nutrition info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}