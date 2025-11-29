// src/pages/Subscription/SubscriptionSuccess.jsx
import { Link } from "react-router-dom";

export default function SubscriptionSuccess() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-3xl font-bold text-green-700">Subscription Activated!</h1>
      <p className="mt-3 text-gray-600">Your meals will start soon.</p>

      <Link
        to="/subscription/dashboard"
        className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
