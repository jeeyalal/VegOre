// import Hero from "../components/Hero";
// import Tagline from "../components/Tagline";
// import DishSection from "../components/DishSection";
// import { dishes } from "../data/dishes";
// import ReviewSection from "../components/ReviewSection";

// export default function HomePage() {
//   const topMeals = [
//     dishes.normal.meals[0],
//     dishes.normal.salads[0],
//     dishes.normal.smoothies[0],
//   ];
//   return (
//     <main className="pt-6">
//       <Hero />
//       <Tagline />
//       {/* Top Sellers */}
//       <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mt-10 relative">
//         Top Sellers
//         <span className="block w-20 sm:w-24 h-1 bg-green-600 mx-auto mt-2 rounded-full"></span>
//       </h2>

//       <DishSection dishes={topMeals} category="normal" type="meals" />

//       <ReviewSection />

      
    
//     </main>
//   );
// }

import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import DishSection from "../components/DishSection";
import ReviewSection from "../components/ReviewSection";

export default function HomePage() {
  const { dishes } = useContext(FoodContext);

  const topMeals = [
    dishes.normal.meals[0],
    dishes.normal.salads[0],
    dishes.normal.smoothies[0],
  ].filter(Boolean);

  return (
    <main className="pt-6">
      <Hero />
      <Tagline />

      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mt-10 relative">
        Top Sellers
        <span className="block w-20 sm:w-24 h-1 bg-green-600 mx-auto mt-2 rounded-full"></span>
      </h2>

      <DishSection dishes={topMeals} />

      <ReviewSection />
    </main>
  );
}
