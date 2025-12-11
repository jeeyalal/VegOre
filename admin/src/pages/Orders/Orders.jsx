// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const token = localStorage.getItem("adminToken");
//   const url = import.meta.env.VITE_BACKEND_URL || "https://vegore-backend.onrender.com";

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${url}/api/orders/list`, { headers: { token } });
//       if (res.data.success) setOrders(res.data.data);
//     } catch (err) {
//       console.error("Fetch orders error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Orders</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map(order => (
//             <div key={order._id} className="bg-white p-4 border rounded">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <div className="text-lg font-semibold">{order.name} <span className="text-xs text-gray-500 ml-2">{order.email}</span></div>
//                   <div className="text-sm text-gray-600">Phone: {order.phone}</div>
//                   <div className="text-sm mt-2 text-gray-700">{order.address.line1}, {order.address.city} - {order.address.postalCode}</div>
//                   <div className="text-sm text-gray-500 mt-1">{order.address.landmark}</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-bold text-green-700">₹{order.total}</div>
//                   <div className="text-xs text-gray-500">{(new Date(order.createdAt)).toLocaleString()}</div>
//                 </div>
//               </div>

//               <div className="mt-3">
//                 <div className="font-semibold">Items:</div>
//                 <ul className="pl-4">
//                   {order.items.map((it, idx) => (
//                     <li key={idx}>{it.name} × {it.qty} • ₹{it.price}</li>
//                   ))}
//                 </ul>
//               </div>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;




import React, { useEffect, useState } from "react";
import axios from "axios";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adminToken");
  const url = import.meta.env.VITE_BACKEND_URL || "https://vegore-backend.onrender.com";

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/orders/list`, { headers: { token } });
      if (res.data.success) setOrders(res.data.data);
    } catch (err) {
      console.error("Fetch orders error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h1 className="orders-title">Orders</h1>

      {loading ? (
        <div className="orders-loading">Loading...</div>
      ) : orders.length === 0 ? (
        <div className="orders-empty">No orders yet.</div>
      ) : (
        <div className="orders-grid">
          {orders.map(order => (
            <div key={order._id} className="order-card">
              <div className="order-customer">
                <h3>{order.name}</h3>
                <p>{order.email}</p>
                <p>Phone: {order.phone}</p>
              </div>

              <div className="order-address">
                <strong>Delivery Address:</strong>
                {order.address.line1}, {order.address.city} - {order.address.postalCode}
                <br />
                {order.address.landmark}
              </div>

              <div className="order-meta">
                <span className="order-total">₹{order.total}</span>
                <span className="order-date">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((it, idx) => (
                    <li key={idx}>
                      <span className="item-name">
                        {it.name} × {it.qty}
                      </span>
                      <span className="item-price">₹{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;