import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login to view your orders");
        setLoading(false);
        return;
      }

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/orders/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setOrders(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">
                  Order ID: {order._id.slice(-6)}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100">
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                Placed on: {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <div className="mt-3">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm py-1"
                  >
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-4 font-semibold">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
