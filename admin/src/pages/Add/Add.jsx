


import React, { useEffect, useState } from "react";
import "./add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    id: "",
    name: "",
    price: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    ingredients: "",
    section: "normal",   // normal | vegan | jain
    category: "meals",   // meals | salads | smoothies
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (
      !data.id ||
      !data.name ||
      !data.price ||
      !data.calories ||
      !data.protein ||
      !data.carbs ||
      !data.fat ||
      !data.ingredients ||
      !image
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("id", data.id);
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("calories", data.calories);
      formData.append("protein", data.protein);
      formData.append("carbs", data.carbs);
      formData.append("fat", data.fat);

      const ingredientsArray = data.ingredients
        .split(",")
        .map((item) => item.trim());

      formData.append("ingredients", JSON.stringify(ingredientsArray));
      formData.append("section", data.section);
      formData.append("category", data.category);
      formData.append("image", image);

      // ✅ ✅ ✅ GET ADMIN TOKEN
      const token = localStorage.getItem("adminToken");

      if (!token) {
        toast.error("Admin not logged in!");
        return;
      }

      // ✅ ✅ ✅ SEND TOKEN IN ALL POSSIBLE FORMATS
      const response = await axios.post(
        `${url}/api/food/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            token: token,
            "admin-token": token,
            "x-auth-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("✅ Dish added successfully!");

        // ✅ Reset form
        setData({
          id: "",
          name: "",
          price: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
          ingredients: "",
          section: "normal",
          category: "meals",
        });

        setImage(null);
      } else {
        toast.error("❌ Failed to add dish");
      }
    } catch (error) {
      console.log("ADD FOOD FRONTEND ERROR:", error);
      toast.error("❌ Server error! Please try again.");
    }
  };

  useEffect(() => {
    console.log("FORM DATA:", data);
  }, [data]);

  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        <h2>Add New Dish</h2>

        <input
          type="number"
          name="id"
          placeholder="Dish ID"
          required
          value={data.id}
          onChange={onChangeHandler}
        />

        <select
          name="section"
          required
          value={data.section}
          onChange={onChangeHandler}
        >
          <option value="normal">Normal</option>
          <option value="vegan">Vegan</option>
          <option value="jain">Jain</option>
        </select>

        <select
          name="category"
          required
          value={data.category}
          onChange={onChangeHandler}
        >
          <option value="meals">Meals</option>
          <option value="salads">Salads</option>
          <option value="smoothies">Smoothies</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Dish Name"
          required
          value={data.name}
          onChange={onChangeHandler}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          value={data.price}
          onChange={onChangeHandler}
        />

        <div className="nutrition-grid">
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            required
            value={data.calories}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="protein"
            placeholder="Protein (e.g. 40g)"
            required
            value={data.protein}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="carbs"
            placeholder="Carbs (e.g. 70g)"
            required
            value={data.carbs}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="fat"
            placeholder="Fat (e.g. 15g)"
            required
            value={data.fat}
            onChange={onChangeHandler}
          />
        </div>

        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          required
          value={data.ingredients}
          onChange={onChangeHandler}
        />

        <input
          type="file"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default Add;
