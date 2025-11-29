// src/pages/Subscription/SummaryPayment.jsx
import { useSubscription } from "../../context/SubscriptionContext";
import { Link } from "react-router-dom";

export default function SummaryPayment() {
  const { planData } = useSubscription();

  return (
    <div className="px-4 max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

      <div className="bg-white p-5 rounded-xl shadow space-y-4">
        <p><strong>Plan:</strong> {planData.plan?.name}</p>
        <p><strong>Duration:</strong> {planData.duration} days</p>
        <p><strong>Meals:</strong> 
          {planData.meals.lunch && " Lunch "}
          {planData.meals.dinner && " Dinner "}
        </p>
        <p><strong>Address:</strong> {planData.address.address}</p>

        <Link
          to="/subscription/success"
          className="block bg-green-600 text-white py-3 rounded text-center"
        >
          Confirm & Continue
        </Link>
      </div>
    </div>
  );
}
