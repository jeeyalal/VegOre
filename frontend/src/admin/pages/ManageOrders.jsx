import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:8000/api/orders", {
      withCredentials: true,
    });
    setOrders(res.data.orders);
  };

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:8000/api/orders/${id}`,
      { status },
      { withCredentials: true }
    );
    fetchOrders();
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8000/api/orders/${id}`, {
      withCredentials: true,
    });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl text-green-700 font-bold mb-4">Manage Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="p-4 mb-4 bg-white shadow rounded-lg">
          <h2 className="font-bold text-lg">{order.userName}</h2>
          <p className="text-sm text-gray-600">{order.userPhone}</p>
          <p className="text-sm text-gray-600">{order.address}</p>

          <h3 className="mt-2 font-bold">Items:</h3>
          {order.items.map((i, idx) => (
            <p key={idx}>
              {i.name} × {i.qty} = ₹{i.price * i.qty}
            </p>
          ))}

          <p className="font-bold text-green-700 mt-2">
            Total: ₹{order.totalAmount}
          </p>

          {/* Status dropdown */}
          <select
            className="mt-3 border p-2 rounded"
            value={order.status}
            onChange={(e) => updateStatus(order._id, e.target.value)}
          >
            <option>Pending</option>
            <option>Accepted</option>
            <option>Preparing</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
          </select>

          <button
            onClick={() => deleteOrder(order._id)}
            className="ml-4 text-red-600 font-bold"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
