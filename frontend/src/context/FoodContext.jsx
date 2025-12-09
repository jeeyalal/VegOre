import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const url = "http://localhost:4000";

  const [dishes, setDishes] = useState({
    normal: { meals: [], salads: [], smoothies: [] },
    vegan: { meals: [], salads: [], smoothies: [] },
    jain: { meals: [], salads: [], smoothies: [] },
  });

  // ✅ Convert backend array into frontend format
  const formatFoods = (foods) => {
    const formatted = {
      normal: { meals: [], salads: [], smoothies: [] },
      vegan: { meals: [], salads: [], smoothies: [] },
      jain: { meals: [], salads: [], smoothies: [] },
    };

    foods.forEach((item) => {
      const section = item.section;
      const category = item.category;

      if (formatted[section] && formatted[section][category]) {
        formatted[section][category].push({
          id: item.id,
          name: item.name,
          img: `http://localhost:4000/images/${item.img}`,
          price: item.price,
          nutrition: item.nutrition,
          ingredients: item.ingredients,
        });
      }
    });

    return formatted;
  };

  // ✅ Fetch food from backend
  const fetchFoods = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      if (res.data.success) {
        const formatted = formatFoods(res.data.data);
        setDishes(formatted);
      }
    } catch (err) {
      console.log("Food Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <FoodContext.Provider value={{ dishes, fetchFoods }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
