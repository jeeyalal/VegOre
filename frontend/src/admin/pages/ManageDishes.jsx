import { useEffect, useState } from "react";

export default function ManageDishes() {
  const [dishes, setDishes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    img: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all dishes
  const fetchDishes = async () => {
    const res = await fetch("http://localhost:8000/api/dishes", {
      credentials: "include",
    });
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  // Convert image to Base64
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({ ...form, img: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  // Add or edit dish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:8000/api/dishes/${editingId}`
      : "http://localhost:8000/api/dishes";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: "", category: "", img: "" });
    setEditingId(null);
    fetchDishes();
  };

  // Edit dish
  const startEdit = (dish) => {
    setForm(dish);
    setEditingId(dish._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete dish
  const deleteDish = async (id) => {
    await fetch(`http://localhost:8000/api/dishes/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    fetchDishes();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Manage Dishes
      </h1>

      {/* ADD / EDIT FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow mb-8 space-y-4"
      >
        <input
          className="w-full p-2 border rounded"
          placeholder="Dish Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={handleImage}
        />

        {form.img && (
          <img
            src={form.img}
            className="w-24 h-24 object-cover rounded border"
          />
        )}

        <button className="w-full bg-green-600 text-white py-2 rounded font-bold">
          {editingId ? "Update Dish" : "Add Dish"}
        </button>
      </form>

      {/* DISH LIST */}
      <div className="grid gap-4">
        {dishes.map((dish) => (
          <div
            key={dish._id}
            className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
          >
            <img
              src={dish.img}
              className="w-20 h-20 rounded object-cover border"
              alt=""
            />

            <div className="flex-1">
              <h2 className="font-bold">{dish.name}</h2>
              <p className="text-gray-600">₹{dish.price}</p>
              <p className="text-sm text-gray-500">{dish.category}</p>
            </div>

            <button
              onClick={() => startEdit(dish)}
              className="px-3 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteDish(dish._id)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
