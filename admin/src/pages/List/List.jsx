import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===============================
  // FETCH ALL DISHES (PUBLIC)
  // ===============================
  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      }
    } catch (error) {
      console.error("FETCH ERROR:", error);
      toast.error("Failed to fetch food list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // ===============================
  // DELETE FOOD (ADMIN ONLY)
  // ===============================
  const removeFood = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    const token = localStorage.getItem("adminToken");

    if (!token) {
      toast.error("Admin not logged in");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/api/food/remove`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("✅ Food deleted successfully");
        fetchList();
      } else {
        toast.error(response.data.message || "❌ Delete failed");
      }
    } catch (error) {
      console.error("DELETE ERROR:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "❌ Delete failed");
    }
  };

  const isAdmin = !!localStorage.getItem("adminToken");

  return (
    <div className="list-page">
      <h2 className="list-title">All Dishes</h2>

      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>Loading...</p>
        </div>
      ) : list.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>No dishes found. Add some dishes first!</p>
        </div>
      ) : (
        <div className="food-grid">
          {list.map((item) => (
            <div className="food-card" key={item._id}>
              {/* IMAGE */}
              <img
                src={
                  item.img?.startsWith("http")
                    ? item.img
                    : `${url}/uploads/${item.img}`
                }
                alt={item.name}
                className="food-img"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />

              <div className="food-content">
                <h3>{item.name}</h3>
                <p className="food-price">₹{item.price}</p>

                <div className="food-meta">
                  <span>{item.section}</span>
                  <span>{item.category}</span>
                </div>

                <p className="food-nutrition">
                  {item.nutrition?.calories || 0} cal •{" "}
                  {item.nutrition?.protein || "0g"} protein •{" "}
                  {item.nutrition?.carbs || "0g"} carbs •{" "}
                  {item.nutrition?.fat || "0g"} fat
                </p>

                <p className="food-ingredients">
                  <b>Ingredients:</b>{" "}
                  {item.ingredients?.length
                    ? item.ingredients.join(", ")
                    : "Not available"}
                </p>

                {/* ADMIN ONLY DELETE */}
                {isAdmin && (
                  <div className="food-actions">
                    <button
                      className="delete-btn"
                      onClick={() => removeFood(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
