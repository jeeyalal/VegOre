// frontend/src/components/CheckoutModal.jsx
import React, { useEffect, useState } from "react";
import { X, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://vegore-backend.onrender.com";

export default function CheckoutModal({ items, total, onClose, onSuccess }) {
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    landmark: "",
    label: "Home",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    // If logged in, fetch saved addresses
    if (token) {
      axios.get(`${BACKEND_URL}/api/user/addresses`, { headers: { token }})
        .then(res => {
          if (res.data.success) {
            setAddresses(res.data.addresses || []);
            if (res.data.addresses && res.data.addresses.length > 0) {
              // Prefill with the first address
              const ad = res.data.addresses[0];
              setForm(prev => ({ ...prev, ...ad, name: ad.name || prev.name }));
            } else if (storedUser) {
              setForm(prev => ({ ...prev, name: JSON.parse(storedUser).name || prev.name, email: JSON.parse(storedUser).email || prev.email }));
            }
          }
        })
        .catch(err => {
          console.log("Failed to fetch addresses", err);
        });
    } else if (storedUser) {
      setForm(prev => ({ ...prev, name: JSON.parse(storedUser).name || prev.name, email: JSON.parse(storedUser).email || prev.email }));
    }
  }, []);

  const handlePrefillAddress = (ad) => {
    setForm(prev => ({ ...prev, ...ad }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validate
    if (!form.name || !form.email || !form.phone || !form.line1 || !form.city || !form.postalCode) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        items: items.map((it) => ({ dishId: it.id, name: it.name, price: it.price, qty: it.qty || 1 })),
        total,
        address: {
          label: form.label,
          name: form.name,
          phone: form.phone,
          line1: form.line1,
          line2: form.line2,
          city: form.city,
          state: form.state,
          postalCode: form.postalCode,
          country: form.country,
          landmark: form.landmark,
        },
        name: form.name,
        email: form.email,
        phone: form.phone,
        payment: { provider: "offline_mock", status: "pending" }
      };

      const headers = { "Content-Type": "application/json" };
      if (token) headers.token = token;
      const res = await axios.post(`${BACKEND_URL}/api/orders/create`, payload, { headers });

      if (res.data.success) {
        toast.success("Order created successfully");
        clearCart(); // clear cart context
        onSuccess && onSuccess(res.data.order);
        onClose && onClose();
      } else {
        toast.error(res.data.message || "Failed to create order");
      }
    } catch (err) {
      console.error("Order creation error", err);
      toast.error("Server error while creating order");
    } finally {
      setLoading(false);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  const subtotal = total || items.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return (
    <div className="fixed inset-0 z-[1200] bg-black/50 p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-5 relative">
        <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full bg-gray-100">
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-3">Checkout</h2>

        {/* Items */}
        <div className="p-3 bg-gray-50 rounded-lg mb-4">
          <div className="mb-2 text-sm text-gray-600">Your Order</div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {items.map((it) => (
              <div key={it.id || Math.random()} className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-xs text-gray-500">Qty: {it.qty || 1}</div>
                </div>
                <div className="font-bold">₹{(it.price * (it.qty || 1)).toFixed(0)}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 border-t pt-3 flex justify-between text-md font-bold">
            <div>Subtotal</div>
            <div>₹{subtotal}</div>
          </div>
        </div>

        {/* Address / User details */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <input name="name" onChange={handleChange} value={form.name} placeholder="Full Name" className="p-2 border rounded" />
          <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="p-2 border rounded" />
          <input name="phone" onChange={handleChange} value={form.phone} placeholder="Phone" className="p-2 border rounded" />
          <input name="label" onChange={handleChange} value={form.label} placeholder="Address Label (Home/Work)" className="p-2 border rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <input name="line1" onChange={handleChange} value={form.line1} placeholder="Address line 1" className="p-2 border rounded" />
          <input name="line2" onChange={handleChange} value={form.line2} placeholder="Address line 2 (optional)" className="p-2 border rounded" />
          <input name="city" onChange={handleChange} value={form.city} placeholder="City" className="p-2 border rounded" />
          <input name="state" onChange={handleChange} value={form.state} placeholder="State" className="p-2 border rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <input name="postalCode" onChange={handleChange} value={form.postalCode} placeholder="Postal Code" className="p-2 border rounded" />
          <input name="landmark" onChange={handleChange} value={form.landmark} placeholder="Landmark (Optional)" className="p-2 border rounded" />
        </div>

        {/* Saved addresses */}
        {addresses?.length > 0 && (
          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-2 flex items-center gap-2"><MapPin /> Saved addresses</div>
            <div className="flex gap-2 flex-wrap">
              {addresses.map((ad, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePrefillAddress(ad)}
                  className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                >
                  {ad.label || "Address " + (idx + 1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-60" disabled={loading}>
            {loading ? "Processing..." : `Place Order • ₹${subtotal}`}
          </button>
        </div>
      </div>
    </div>
  );
}