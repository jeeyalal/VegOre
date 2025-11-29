// src/pages/Subscription/DeliveryDetails.jsx
import { useSubscription } from "../../context/SubscriptionContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DeliveryDetails() {
  const { setPlanData } = useSubscription();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    slot: "11AM - 3PM"
  });

  const handleNext = () => {
    setPlanData((p) => ({ ...p, address: form }));
  };

  return (
    <div className="px-4 max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Delivery Details</h1>

      <div className="bg-white p-5 rounded-xl shadow space-y-4">

        <input
          className="w-full border p-3 rounded"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded"
          placeholder="Address"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="PIN Code"
          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
        />

        {/* Delivery slot */}
        <select
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, slot: e.target.value })}
        >
          <option>11AM - 3PM</option>
          <option>6PM - 10PM</option>
        </select>

        <Link
          to="/subscription/preferences"
          onClick={handleNext}
          className="block bg-green-600 text-white py-3 rounded text-center"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
