import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch food list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // ✅✅✅ DELETE WITH ADMIN TOKEN (FIXED)
  const removeFood = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await axios.post(
        `${url}/api/food/remove`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            token: token,
            "x-auth-token": token,
          },
        }
      );

      if (response.data.success) {
        toast.success("✅ Food deleted successfully");
        fetchList();
      } else {
        toast.error("❌ Delete failed");
      }
    } catch (error) {
      console.log("DELETE ERROR:", error);
      toast.error("❌ Delete failed");
    }
  };

  return (
    <div className="list-page">
      <h2 className="list-title">All Dishes</h2>

      <div className="food-grid">
        {list.map((item) => (
          <div className="food-card" key={item._id}>

            {/* ✅✅✅ FINAL CORRECT IMAGE URL */}
            <img
              src={item.img}
              alt={item.name}
              className="food-img"
            />

            <div className="food-content">
              <h3>{item.name}</h3>
              <p className="food-price">₹{item.price}</p>

              <div className="food-meta">
                <span>{item.section}</span>
                <span>{item.category}</span>
              </div>

              <p className="food-nutrition">
                {item.nutrition.calories} cal • {item.nutrition.protein} protein •{" "}
                {item.nutrition.carbs} carbs • {item.nutrition.fat} fat
              </p>

              <p className="food-ingredients">
                <b>Ingredients:</b> {item.ingredients.join(", ")}
              </p>

              <div className="food-actions">
                <button
                  className="delete-btn"
                  onClick={() => removeFood(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
