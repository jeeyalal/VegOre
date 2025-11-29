// src/pages/Subscription/PlanDetails.jsx
import { useSubscription } from "../../context/SubscriptionContext";
import { Link } from "react-router-dom";

export default function PlanDetails() {
  const { planData, setPlanData } = useSubscription();

  const toggleMeal = (meal) => {
    setPlanData((p) => ({
      ...p,
      meals: { ...p.meals, [meal]: !p.meals[meal] }
    }));
  };

  return (
    <div className="px-4 max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Customize Your Plan</h1>

      <div className="bg-white p-4 rounded-xl shadow">
        
        {/* Duration */}
        <div>
          <h2 className="font-semibold">Choose Duration</h2>
          <div className="flex gap-3 mt-2">
            {[7, 14, 30].map((d) => (
              <button
                key={d}
                onClick={() => setPlanData((p) => ({ ...p, duration: d }))}
                className={`px-4 py-2 rounded-lg border ${
                  planData.duration === d ? "bg-green-600 text-white" : ""
                }`}
              >
                {d} Days
              </button>
            ))}
          </div>
        </div>

        {/* Meals */}
        <div className="mt-6">
          <h2 className="font-semibold">Meal Time</h2>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => toggleMeal("lunch")}
              className={`px-4 py-2 rounded-lg border ${
                planData.meals.lunch ? "bg-green-600 text-white" : ""
              }`}
            >
              Lunch
            </button>
            <button
              onClick={() => toggleMeal("dinner")}
              className={`px-4 py-2 rounded-lg border ${
                planData.meals.dinner ? "bg-green-600 text-white" : ""
              }`}
            >
              Dinner
            </button>
          </div>
        </div>

        {/* Next Button */}
        <Link
          to="/subscription/delivery"
          className="block bg-green-600 text-center text-white mt-6 py-3 rounded-xl"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
