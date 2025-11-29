// src/pages/Subscription/MealPreferences.jsx
import { useSubscription } from "../../context/SubscriptionContext";
import { Link } from "react-router-dom";

export default function MealPreferences() {
  const { setPlanData } = useSubscription();

  const preferences = [
    "Low Spice",
    "High Protein",
    "No Onion",
    "No Garlic",
    "Extra Veggies",
  ];

  const toggle = (value, selected) => {
    if (selected.includes(value)) {
      return selected.filter((i) => i !== value);
    }
    return [...selected, value];
  };

  return (
    <div className="px-4 max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Meal Preferences</h1>

      <div className="bg-white p-5 rounded-xl shadow space-y-4">
        {preferences.map((p) => (
          <label key={p} className="flex items-center gap-3">
            <input
              type="checkbox"
              onChange={() =>
                setPlanData((prev) => ({
                  ...prev,
                  preferences: toggle(
                    p,
                    prev.preferences || []
                  ),
                }))
              }
            />
            {p}
          </label>
        ))}

        <Link
          to="/subscription/summary"
          className="block bg-green-600 text-white py-3 rounded text-center"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
