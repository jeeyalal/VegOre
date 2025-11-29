// src/pages/Subscription/PlanSelection.jsx
import { Link } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";

export default function PlanSelection() {
  const { setPlanData } = useSubscription();

  const plans = [
    { id: "veg", name: "Veg Plan", price: 120, img: "/veg.jpg" },
    { id: "vegan", name: "Vegan Plan", price: 150, img: "/vegan.jpg" },
    { id: "jain", name: "Jain Plan", price: 140, img: "/jain.jpg" }
  ];

  return (
    <div className="px-4 max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Plan</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={p.img} className="rounded-lg h-40 w-full object-cover" />

            <h2 className="text-xl font-bold mt-3">{p.name}</h2>
            <p className="text-green-700 font-semibold mb-4">₹{p.price}/day</p>

            <Link
              to="/subscription/plan"
              onClick={() =>
                setPlanData((prev) => ({ ...prev, plan: p }))
              }
              className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Select Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
