// // frontend/src/components/CheckoutModal.jsx
// import React, { useEffect, useState } from "react";
// import { X, MapPin } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://vegore-backend.onrender.com";

// export default function CheckoutModal({ items, total, onClose, onSuccess }) {
//   const { clearCart } = useCart();
//   const [loading, setLoading] = useState(false);
//   const [addresses, setAddresses] = useState([]);
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     line1: "",
//     line2: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "India",
//     landmark: "",
//     label: "Home",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     // If logged in, fetch saved addresses
//     if (token) {
//       axios.get(`${BACKEND_URL}/api/user/addresses`, { headers: { token }})
//         .then(res => {
//           if (res.data.success) {
//             setAddresses(res.data.addresses || []);
//             if (res.data.addresses && res.data.addresses.length > 0) {
//               // Prefill with the first address
//               const ad = res.data.addresses[0];
//               setForm(prev => ({ ...prev, ...ad, name: ad.name || prev.name }));
//             } else if (storedUser) {
//               setForm(prev => ({ ...prev, name: JSON.parse(storedUser).name || prev.name, email: JSON.parse(storedUser).email || prev.email }));
//             }
//           }
//         })
//         .catch(err => {
//           console.log("Failed to fetch addresses", err);
//         });
//     } else if (storedUser) {
//       setForm(prev => ({ ...prev, name: JSON.parse(storedUser).name || prev.name, email: JSON.parse(storedUser).email || prev.email }));
//     }
//   }, []);

//   const handlePrefillAddress = (ad) => {
//     setForm(prev => ({ ...prev, ...ad }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     // Validate
//     if (!form.name || !form.email || !form.phone || !form.line1 || !form.city || !form.postalCode) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);
//       const payload = {
//         items: items.map((it) => ({ dishId: it.id, name: it.name, price: it.price, qty: it.qty || 1 })),
//         total,
//         address: {
//           label: form.label,
//           name: form.name,
//           phone: form.phone,
//           line1: form.line1,
//           line2: form.line2,
//           city: form.city,
//           state: form.state,
//           postalCode: form.postalCode,
//           country: form.country,
//           landmark: form.landmark,
//         },
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         payment: { provider: "offline_mock", status: "pending" }
//       };

//       const headers = { "Content-Type": "application/json" };
//       if (token) headers.token = token;
//       const res = await axios.post(`${BACKEND_URL}/api/orders/create`, payload, { headers });

//       if (res.data.success) {
//         toast.success("Order created successfully");
//         clearCart(); // clear cart context
//         onSuccess && onSuccess(res.data.order);
//         onClose && onClose();
//       } else {
//         toast.error(res.data.message || "Failed to create order");
//       }
//     } catch (err) {
//       console.error("Order creation error", err);
//       toast.error("Server error while creating order");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!items || items.length === 0) {
//     return null;
//   }

//   const subtotal = total || items.reduce((s, i) => s + i.price * (i.qty || 1), 0);

//   return (
//     <div className="fixed inset-0 z-[1200] bg-black/50 p-4 flex items-center justify-center">
//       <div className="bg-white rounded-2xl w-full max-w-3xl p-5 relative">
//         <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full bg-gray-100">
//           <X />
//         </button>

//         <h2 className="text-2xl font-bold mb-3">Checkout</h2>

//         {/* Items */}
//         <div className="p-3 bg-gray-50 rounded-lg mb-4">
//           <div className="mb-2 text-sm text-gray-600">Your Order</div>
//           <div className="space-y-2 max-h-48 overflow-y-auto">
//             {items.map((it) => (
//               <div key={it.id || Math.random()} className="flex justify-between items-center">
//                 <div>
//                   <div className="font-semibold">{it.name}</div>
//                   <div className="text-xs text-gray-500">Qty: {it.qty || 1}</div>
//                 </div>
//                 <div className="font-bold">₹{(it.price * (it.qty || 1)).toFixed(0)}</div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-3 border-t pt-3 flex justify-between text-md font-bold">
//             <div>Subtotal</div>
//             <div>₹{subtotal}</div>
//           </div>
//         </div>

//         {/* Address / User details */}
//         <div className="grid md:grid-cols-2 gap-3 mb-3">
//           <input name="name" onChange={handleChange} value={form.name} placeholder="Full Name" className="p-2 border rounded" />
//           <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="p-2 border rounded" />
//           <input name="phone" onChange={handleChange} value={form.phone} placeholder="Phone" className="p-2 border rounded" />
//           <input name="label" onChange={handleChange} value={form.label} placeholder="Address Label (Home/Work)" className="p-2 border rounded" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-3 mb-3">
//           <input name="line1" onChange={handleChange} value={form.line1} placeholder="Address line 1" className="p-2 border rounded" />
//           <input name="line2" onChange={handleChange} value={form.line2} placeholder="Address line 2 (optional)" className="p-2 border rounded" />
//           <input name="city" onChange={handleChange} value={form.city} placeholder="City" className="p-2 border rounded" />
//           <input name="state" onChange={handleChange} value={form.state} placeholder="State" className="p-2 border rounded" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-3 mb-4">
//           <input name="postalCode" onChange={handleChange} value={form.postalCode} placeholder="Postal Code" className="p-2 border rounded" />
//           <input name="landmark" onChange={handleChange} value={form.landmark} placeholder="Landmark (Optional)" className="p-2 border rounded" />
//         </div>

//         {/* Saved addresses */}
//         {addresses?.length > 0 && (
//           <div className="mb-3">
//             <div className="text-sm text-gray-600 mb-2 flex items-center gap-2"><MapPin /> Saved addresses</div>
//             <div className="flex gap-2 flex-wrap">
//               {addresses.map((ad, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => handlePrefillAddress(ad)}
//                   className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
//                 >
//                   {ad.label || "Address " + (idx + 1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Actions */}
//         <div className="flex items-center justify-between gap-3">
//           <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
//           <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-60" disabled={loading}>
//             {loading ? "Processing..." : `Place Order • ₹${subtotal}`}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


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
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  const RZ_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

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

      // If no Razorpay key is configured, fallback to server-side offline order
      if (!RZ_KEY) {
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

        setLoading(false);
        return;
      }

      // Real Razorpay payment flow
      if (!token) {
        toast.error("Please login to complete the payment");
        setLoading(false);
        return;
      }

      const orderRes = await axios.post(
        `${BACKEND_URL}/api/payments/create-order`,
        { amount: subtotal, items: payload.items },
        { headers: { token } }
      );

      if (!orderRes?.data?.success) {
        toast.error("Failed to create payment order");
        setLoading(false);
        return;
      }

      const order = orderRes.data.order;

      // Load Razorpay checkout script if needed
      if (!window.Razorpay) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      const options = {
        key: RZ_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "VegOre",
        description: "Food order",
        order_id: order.id,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              `${BACKEND_URL}/api/payments/verify`,
              {
                ...response,
                orderData: payload,
              },
              { headers: { token } }
            );

            if (!verifyRes.data.success) {
              throw new Error("Verification failed");
            }

            toast.success("Payment successful. Order placed.");
            clearCart(); // clear cart
            onSuccess && onSuccess(verifyRes.data.order || verifyRes.data.subscription || verifyRes.data.data);
            onClose && onClose();
          } catch (err) {
            console.error("Payment verification failed", err);
            toast.error("Payment verification failed. Contact support.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
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
    <div className="fixed inset-0 z-[1200] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 sm:p-8 relative shadow-2xl my-8">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 pr-8">Checkout</h2>

        {/* Items */}
        <div className="p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 border border-gray-200">
          <div className="mb-3 text-sm font-semibold text-gray-700 uppercase tracking-wide">Your Order</div>
          <div className="space-y-3 max-h-56 overflow-y-auto pr-2">
            {items.map((it) => (
              <div key={it.id || Math.random()} className="flex justify-between items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{it.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Quantity: {it.qty || 1}</div>
                </div>
                <div className="font-bold text-green-600 whitespace-nowrap">₹{(it.price * (it.qty || 1)).toFixed(0)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t-2 border-gray-300 flex justify-between items-center">
            <div className="text-lg font-bold text-gray-900">Subtotal</div>
            <div className="text-xl font-bold text-green-600">₹{subtotal}</div>
          </div>
        </div>

        {/* Address / User details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <input 
              name="name" 
              onChange={handleChange} 
              value={form.name} 
              placeholder="Full Name" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="email" 
              onChange={handleChange} 
              value={form.email} 
              placeholder="Email" 
              type="email"
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="phone" 
              onChange={handleChange} 
              value={form.phone} 
              placeholder="Phone" 
              type="tel"
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="label" 
              onChange={handleChange} 
              value={form.label} 
              placeholder="Address Label (Home/Work)" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <input 
              name="line1" 
              onChange={handleChange} 
              value={form.line1} 
              placeholder="Address line 1" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors sm:col-span-2"
            />
            <input 
              name="line2" 
              onChange={handleChange} 
              value={form.line2} 
              placeholder="Address line 2 (optional)" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors sm:col-span-2"
            />
            <input 
              name="city" 
              onChange={handleChange} 
              value={form.city} 
              placeholder="City" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="state" 
              onChange={handleChange} 
              value={form.state} 
              placeholder="State" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="postalCode" 
              onChange={handleChange} 
              value={form.postalCode} 
              placeholder="Postal Code" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
            <input 
              name="landmark" 
              onChange={handleChange} 
              value={form.landmark} 
              placeholder="Landmark (Optional)" 
              className="p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Saved addresses */}
        {addresses?.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" /> 
              Saved Addresses
            </div>
            <div className="flex gap-2 flex-wrap">
              {addresses.map((ad, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePrefillAddress(ad)}
                  className="px-4 py-2 border-2 border-blue-200 rounded-lg text-sm bg-white hover:bg-blue-100 hover:border-blue-400 transition-all font-medium shadow-sm"
                >
                  {ad.label || "Address " + (idx + 1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t-2 border-gray-200">
          <button 
            onClick={onClose} 
            className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl order-1 sm:order-2"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              `Place Order • ₹${subtotal}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
}