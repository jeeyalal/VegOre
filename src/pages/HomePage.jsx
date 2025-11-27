import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import DishSection from "../components/DishSection";
import { dishes } from "../data/dishes";

export default function HomePage() {
  const topMeals = [
    dishes.normal.meals[0],
    dishes.normal.salads[0],
    dishes.normal.smoothies[0],
  ];
  return (
    <main className="pt-6">
      <Hero />
      <Tagline />
       {/* Top Sellers */}
      <h2 className="text-xl font-bold px-4 mt-6">Top Sellers</h2>
      <DishSection dishes={topMeals} />
    </main>
  );
}
