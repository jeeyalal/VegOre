


// import { useState } from "react";
// import { Info, X, ShoppingCart, Zap } from "lucide-react";

// export default function DishCard({ dish }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Dish Card */}
//       <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        
//         {/* Dish Image */}
//         <div className="relative overflow-hidden">
//           <img
//             src={dish.img}
//             alt={dish.name}
//             className="w-full h-44 sm:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
//           {/* Info button */}
//           <button 
//             onClick={() => setOpen(true)}
//             className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-green-600 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-110"
//             aria-label="View details"
//           >
//             <Info size={18} />
//           </button>
//         </div>

//         {/* Card Content */}
//         <div className="p-4 sm:p-5">
//           <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
//             {dish.name}
//           </h3>

//           <div className="mb-4">
//             <p className="text-green-700 font-bold text-2xl">₹{dish.price}</p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-2.5">
//             <button className="flex-1 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
//               <ShoppingCart size={18} />
//               <span className="text-sm sm:text-base">Add to Cart</span>
//             </button>

//             <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
//               <Zap size={18} />
//               <span className="text-sm sm:text-base">Buy Now</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Info Modal */}
//       {open && (
//         <div 
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
//           onClick={() => setOpen(false)}
//         >
//           <div 
//             className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg shadow-2xl relative animate-slideUp max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button 
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 z-10 transform hover:rotate-90"
//             >
//               <X size={20} />
//             </button>

//             {/* Dish Image */}
//             <div className="relative">
//               <img
//                 src={dish.img}
//                 alt={dish.name}
//                 className="w-full h-48 sm:h-56 object-cover rounded-t-2xl sm:rounded-t-3xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-2xl sm:rounded-t-3xl" />
//             </div>

//             {/* Modal Content */}
//             <div className="p-5 sm:p-6">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//                 {dish.name}
//               </h2>

//               <p className="text-green-700 font-bold text-2xl sm:text-3xl mb-5">
//                 ₹{dish.price}
//               </p>

//               {/* Nutrition Section */}
//               <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//                 <span className="w-1 h-6 bg-green-600 rounded-full"></span>
//                 Nutrition Facts
//               </h3>

//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-5 rounded-xl border border-green-100">
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   <div className="bg-white p-3 rounded-lg shadow-sm">
//                     <p className="text-xs sm:text-sm text-gray-600 mb-1">Calories</p>
//                     <p className="font-bold text-base sm:text-lg text-gray-800">
//                       {dish.nutrition?.calories || "N/A"}
//                     </p>
//                   </div>

//                   <div className="bg-white p-3 rounded-lg shadow-sm">
//                     <p className="text-xs sm:text-sm text-gray-600 mb-1">Protein</p>
//                     <p className="font-bold text-base sm:text-lg text-gray-800">
//                       {dish.nutrition?.protein || "N/A"}
//                     </p>
//                   </div>

//                   <div className="bg-white p-3 rounded-lg shadow-sm">
//                     <p className="text-xs sm:text-sm text-gray-600 mb-1">Carbs</p>
//                     <p className="font-bold text-base sm:text-lg text-gray-800">
//                       {dish.nutrition?.carbs || "N/A"}
//                     </p>
//                   </div>

//                   <div className="bg-white p-3 rounded-lg shadow-sm">
//                     <p className="text-xs sm:text-sm text-gray-600 mb-1">Fat</p>
//                     <p className="font-bold text-base sm:text-lg text-gray-800">
//                       {dish.nutrition?.fat || "N/A"}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Buttons inside Modal */}
//               <div className="flex flex-col sm:flex-row gap-3 mt-6">
//                 <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-md">
//                   <ShoppingCart size={20} />
//                   Add to Cart
//                 </button>

//                 <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all flex items-center justify-center gap-2 shadow-md">
//                   <Zap size={20} />
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
//         .animate-slideUp { animation: slideUp 0.3s ease-out; }
//       `}</style>
//     </>
//   );
// }

import { useState } from "react";
import { Info, X, ShoppingCart, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function DishCard({ dish }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart(); // ADDED

  return (
    <>
      {/* Dish Card */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        
        {/* Dish Image */}
        <div className="relative overflow-hidden">
          <img
            src={dish.img}
            alt={dish.name}
            className="w-full h-36 sm:h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Info button */}
          <button 
            onClick={() => setOpen(true)}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-green-600 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <Info size={16} />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-2 line-clamp-2 flex-grow">
            {dish.name}
          </h3>

          <p className="text-green-700 font-bold text-lg sm:text-xl mb-3">₹{dish.price}</p>

          <div className="flex gap-2">

            {/* ADD TO CART BUTTON – FIXED */}
            <button
              onClick={() => addToCart(dish)}   // ADDED
              className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm text-xs sm:text-sm"
            >
              <ShoppingCart size={14} />
              <span className="hidden sm:inline">Cart</span>
            </button>

            {/* BUY NOW BUTTON – SAME */}
            <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm text-xs sm:text-sm">
              <Zap size={14} />
              <span className="hidden sm:inline">Buy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg shadow-2xl relative animate-slideUp max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button 
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-48 sm:h-56 object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Modal content */}
            <div className="p-5 sm:p-6">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                {dish.name}
              </h2>

              <p className="text-green-700 font-bold text-2xl sm:text-3xl mb-5">
                ₹{dish.price}
              </p>

              {/* Nutrition */}
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-600 rounded-full"></span>
                Nutrition Facts
              </h3>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                <div className="grid grid-cols-2 gap-4">
                  <NutritionItem label="Calories" value={dish.nutrition?.calories} />
                  <NutritionItem label="Protein" value={dish.nutrition?.protein} />
                  <NutritionItem label="Carbs" value={dish.nutrition?.carbs} />
                  <NutritionItem label="Fat" value={dish.nutrition?.fat} />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                {/* ADD TO CART INSIDE MODAL – FIXED */}
                <button
                  onClick={() => addToCart(dish)}   // ADDED
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>

                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition flex items-center justify-center gap-2">
                  <Zap size={20} /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
        @keyframes slideUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  );
}

// Nutrition Helper
function NutritionItem({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <p className="font-bold text-lg text-gray-800">{value || "N/A"}</p>
    </div>
  );
}
