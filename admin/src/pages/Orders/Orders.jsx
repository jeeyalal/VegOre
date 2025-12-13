// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2, RefreshCw, AlertCircle } from "lucide-react";
// import "./orders.css";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [deleting, setDeleting] = useState(null);
//   const token = localStorage.getItem("adminToken");
//   const url = import.meta.env.VITE_BACKEND_URL || "https://vegore-backend.onrender.com";

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${url}/api/orders/list`, { headers: { token } });
//       if (res.data.success) setOrders(res.data.data);
//     } catch (err) {
//       console.error("Fetch orders error", err);
//       alert("Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteOrder = async (orderId) => {
//     // Confirm before deleting
//     const confirmed = window.confirm("Are you sure you want to delete this order? This action cannot be undone.");
//     if (!confirmed) return;

//     try {
//       setDeleting(orderId);
//       const res = await axios.delete(`${url}/api/orders/${orderId}`, { headers: { token } });
      
//       if (res.data.success) {
//         // Remove order from local state
//         setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
//         alert("Order deleted successfully");
//       } else {
//         alert(res.data.message || "Failed to delete order");
//       }
//     } catch (err) {
//       console.error("Delete order error", err);
//       alert("Failed to delete order. Please try again.");
//     } finally {
//       setDeleting(null);
//     }
//   };

//   const handleRefresh = () => {
//     fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="orders-page">
//       <div className="orders-header">
//         <h1 className="orders-title">Orders</h1>
//         <button 
//           onClick={handleRefresh} 
//           disabled={loading}
//           className="refresh-button"
//           title="Refresh orders"
//         >
//           <RefreshCw className={`refresh-icon ${loading ? 'spinning' : ''}`} />
//           Refresh
//         </button>
//       </div>

//       {loading ? (
//         <div className="orders-loading">
//           <div className="spinner"></div>
//           Loading orders...
//         </div>
//       ) : orders.length === 0 ? (
//         <div className="orders-empty">
//           <AlertCircle className="empty-icon" />
//           <p>No orders yet.</p>
//         </div>
//       ) : (
//         <div className="orders-grid">
//           {orders.map(order => (
//             <div key={order._id} className="order-card">
//               <div className="order-header-actions">
//                 <span className="order-id">Order #{order._id.slice(-6)}</span>
//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   disabled={deleting === order._id}
//                   className="delete-button"
//                   title="Delete order"
//                 >
//                   {deleting === order._id ? (
//                     <span className="deleting-spinner"></span>
//                   ) : (
//                     <Trash2 className="delete-icon" />
//                   )}
//                 </button>
//               </div>

//               <div className="order-customer">
//                 <h3>{order.name}</h3>
//                 <p>{order.email}</p>
//                 <p>Phone: {order.phone}</p>
//               </div>

//               <div className="order-address">
//                 <strong>Delivery Address:</strong>
//                 <br />
//                 {order.address.line1}, {order.address.city} - {order.address.postalCode}
//                 {order.address.landmark && (
//                   <>
//                     <br />
//                     Landmark: {order.address.landmark}
//                   </>
//                 )}
//               </div>

//               <div className="order-meta">
//                 <span className="order-total">₹{order.total}</span>
//                 <span className="order-date">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </span>
//               </div>

//               <div className="order-items">
//                 <h4>Items:</h4>
//                 <ul>
//                   {order.items.map((it, idx) => (
//                     <li key={idx}>
//                       <span className="item-name">
//                         {it.name} × {it.qty}
//                       </span>
//                       <span className="item-price">₹{it.price}</span>
//                     </li>
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
import { Trash2, RefreshCw, AlertCircle } from "lucide-react";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(null);

  const token = localStorage.getItem("adminToken");
  const url =
    import.meta.env.VITE_BACKEND_URL ||
    "https://vegore-backend.onrender.com";

  // 🔐 Common auth header
  const authHeader = {
    Authorization: `Bearer ${token}`,
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/orders/list`, {
        headers: authHeader,
      });

      if (res.data.success) {
        setOrders(res.data.data);
      } else {
        alert(res.data.message || "Failed to fetch orders");
      }
    } catch (err) {
      console.error("Fetch orders error:", err.response?.data || err.message);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order? This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      setDeleting(orderId);

      const res = await axios.delete(
        `${url}/api/orders/${orderId}`,
        {
          headers: authHeader,
        }
      );

      if (res.data.success) {
        setOrders((prev) =>
          prev.filter((order) => order._id !== orderId)
        );
        alert("Order deleted successfully");
      } else {
        alert(res.data.message || "Failed to delete order");
      }
    } catch (err) {
      console.error("Delete order error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to delete order");
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    if (!token) {
      alert("Admin not authenticated");
      return;
    }
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1 className="orders-title">Orders</h1>

        <button
          onClick={fetchOrders}
          disabled={loading}
          className="refresh-button"
        >
          <RefreshCw className={loading ? "spinning" : ""} />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="orders-loading">
          <div className="spinner"></div>
          Loading orders...
        </div>
      ) : orders.length === 0 ? (
        <div className="orders-empty">
          <AlertCircle />
          <p>No orders yet.</p>
        </div>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header-actions">
                <span className="order-id">
                  Order #{order._id.slice(-6)}
                </span>

                <button
                  onClick={() => deleteOrder(order._id)}
                  disabled={deleting === order._id}
                  className="delete-button"
                >
                  {deleting === order._id ? (
                    <span className="deleting-spinner"></span>
                  ) : (
                    <Trash2 />
                  )}
                </button>
              </div>

              <div className="order-customer">
                <h3>{order.name}</h3>
                <p>{order.email}</p>
                <p>Phone: {order.phone}</p>
              </div>

              <div className="order-address">
                <strong>Delivery Address:</strong>
                <br />
                {order.address.line1}, {order.address.city} -{" "}
                {order.address.postalCode}
                {order.address.landmark && (
                  <>
                    <br />
                    Landmark: {order.address.landmark}
                  </>
                )}
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
                      <span>
                        {it.name} × {it.qty}
                      </span>
                      <span>₹{it.price}</span>
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
