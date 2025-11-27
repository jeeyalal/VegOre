import { useState } from "react";
import { dishes } from "../data/dishes";
import CategoryTabs from "../components/CategoryTabs";
import FoodTypeTabs from "../components/FoodTypeTabs";
import DishCard from "../components/DishCard";

export default function MenuPage() {
  const [category, setCategory] = useState("normal");
  const [foodType, setFoodType] = useState("meals");

  const currentList = dishes[category][foodType];

  return (
    <main className="pt-5 px-4">

      <CategoryTabs selected={category} setSelected={setCategory} />
      <FoodTypeTabs foodType={foodType} setFoodType={setFoodType} />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {currentList.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </main>
  );
}



