
// import { useState } from "react";
// import { Info, X, ShoppingCart, IndianRupee, ShoppingBag } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { initiatePayment } from "../utils/payments"; 
// import { toast } from "react-toastify";  // ⬅️ NEW

// export default function DishCard({ dish }) {
//   const [open, setOpen] = useState(false);
//   const { addToCart } = useCart();

//   // ⬅️ NEW - Toast Function
//   const handleAddToCart = () => {
//     addToCart(dish);

//     toast.success(
//       <div className="flex items-center gap-2">
//         <ShoppingBag size={18} />
//         <span>Added to cart</span>
//       </div>,
//       {
//         icon: false,
//         pauseOnHover: false,
//         draggable: false,
//         className: "bg-green-600 text-white rounded-lg shadow-lg",
//       }
//     );
//   };

//   return (
//     <>
//       {/* Dish Card */}
//       <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">

//         {/* Dish Image */}
//         <div className="relative overflow-hidden">
//           <img
//             src={dish.img}
//             alt={dish.name}
//             className="w-full h-36 sm:h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//           <button
//             onClick={() => setOpen(true)}
//             className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm 
//                        hover:bg-green-600 hover:text-white shadow-lg transition-all duration-300 
//                        transform hover:scale-110 z-[20]"
//           >
//             <Info size={16} />
//           </button>
//         </div>

//         {/* Card Content */}
//         <div className="p-3 sm:p-4 flex flex-col flex-grow">
//           <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-2 line-clamp-2 flex-grow">
//             {dish.name}
//           </h3>

//           <p className="text-green-700 font-bold text-lg sm:text-xl mb-3">
//             ₹{dish.price}
//           </p>

//           <div className="flex gap-2">

//             {/* ADD TO CART WITH TOAST */}
//             <button
//               onClick={handleAddToCart}  // ⬅️ UPDATED
//               className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold 
//                          hover:bg-green-700 active:scale-95 transition-all 
//                          flex items-center justify-center gap-1 shadow-sm text-xs sm:text-sm"
//             >
//               <ShoppingCart size={14} />
//               <span className="hidden sm:inline">Cart</span>
//             </button>

//             {/* BUY NOW — Razorpay */}
//             <button
//               onClick={() => initiatePayment(dish.price)}
//               className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 
//                          py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 
//                          active:scale-95 transition-all flex items-center justify-center 
//                          gap-1 shadow-sm text-xs sm:text-sm"
//             >
//               <IndianRupee size={14} />
//               <span className="hidden sm:inline">Buy</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* FULLSCREEN MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center 
//                      z-[1000] p-4 animate-fadeIn"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg shadow-2xl relative 
//                        animate-slideUp max-h-[90vh] overflow-y-auto z-[1001]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg 
//                          hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90 
//                          z-[1002]"
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
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//             </div>

//             {/* Modal Content */}
//             <div className="p-5 sm:p-6">

//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
//                 {dish.name}
//               </h2>

//               <p className="text-green-700 font-bold text-2xl sm:text-3xl mb-5">
//                 ₹{dish.price}
//               </p>

//               <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
//                 <span className="w-1 h-6 bg-green-600 rounded-full"></span>
//                 Nutrition Facts
//               </h3>

//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
//                 <div className="grid grid-cols-2 gap-4">
//                   <NutritionItem label="Calories" value={dish.nutrition?.calories} />
//                   <NutritionItem label="Protein" value={dish.nutrition?.protein} />
//                   <NutritionItem label="Carbs" value={dish.nutrition?.carbs} />
//                   <NutritionItem label="Fat" value={dish.nutrition?.fat} />
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold mt-6 mb-3 flex items-center gap-2">
//                 <span className="w-1 h-6 bg-green-600 rounded-full"></span>
//                 Ingredients
//               </h3>

//               <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-100">
//                 {dish.ingredients && dish.ingredients.length > 0 ? (
//                   <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                     {dish.ingredients.map((item, index) => (
//                       <li key={index} className="text-sm">{item}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-600 text-sm">No ingredients listed.</p>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style>{`
//         @keyframes fadeIn { 
//           from {opacity:0;} 
//           to {opacity:1;} 
//         }
//         @keyframes slideUp { 
//           from {opacity:0; transform:translateY(20px);} 
//           to {opacity:1; transform:translateY(0);} 
//         }
//         .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
//         .animate-slideUp { animation: slideUp 0.3s ease-out; }
//       `}</style>
//     </>
//   );
// }

// /* Nutrition Component */
// function NutritionItem({ label, value }) {
//   return (
//     <div className="bg-white p-3 rounded-lg shadow-sm">
//       <p className="text-xs text-gray-600 mb-1">{label}</p>
//       <p className="font-bold text-lg text-gray-800">{value || "N/A"}</p>
//     </div>
//   );
// }














import { useState } from "react";
import { Info, X, ShoppingCart, IndianRupee, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import CheckoutModal from "./CheckoutModal"; // ⭐ BUY NOW POPUP

export default function DishCard({ dish }) {
  const [open, setOpen] = useState(false); // Info Modal
  const [checkoutOpen, setCheckoutOpen] = useState(false); // Buy Now Modal
  const [checkoutItems, setCheckoutItems] = useState([]); // Items for Buy Now

  const { addToCart } = useCart();

  // ⭐ Add to Cart + Toast
  const handleAddToCart = () => {
    addToCart(dish);

    toast.success(
      <div className="flex items-center gap-2">
        <ShoppingBag size={18} />
        <span>Added to cart</span>
      </div>,
      {
        icon: false,
        pauseOnHover: false,
        draggable: false,
        className: "bg-green-600 text-white rounded-lg shadow-lg",
      }
    );
  };

  // ⭐ BUY NOW → open CheckoutModal
  const handleBuyNow = () => {
    setCheckoutItems([{ ...dish, qty: 1 }]);
    setCheckoutOpen(true);
  };

  return (
    <>
      {/* Dish Card */}
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={dish.img}
            alt={dish.name}
            className="w-full h-36 sm:h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          <button
            onClick={() => setOpen(true)}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-green-600 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-110 z-[20]"
          >
            <Info size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-2 line-clamp-2 flex-grow">
            {dish.name}
          </h3>

          <p className="text-green-700 font-bold text-lg sm:text-xl mb-3">
            ₹{dish.price}
          </p>

          <div className="flex gap-2">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm text-xs sm:text-sm"
            >
              <ShoppingCart size={14} />
              <span className="hidden sm:inline">Cart</span>
            </button>

            {/* ⭐ BUY NOW opens checkout modal */}
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm text-xs sm:text-sm"
            >
              <IndianRupee size={14} />
              <span className="hidden sm:inline">Buy</span>
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ CHECKOUT MODAL (Buy Now) */}
      {checkoutOpen && (
        <CheckoutModal
          items={checkoutItems}
          total={checkoutItems.reduce(
            (s, item) => s + item.price * (item.qty || 1),
            0
          )}
          onClose={() => setCheckoutOpen(false)}
          onSuccess={() => {
            toast.success("Order placed successfully!");
            setCheckoutOpen(false);
          }}
        />
      )}

      {/* Info Modal (Original) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000] p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg shadow-2xl relative animate-slideUp max-h-[90vh] overflow-y-auto z-[1001]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Btn */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90 z-[1002]"
            >
              <X size={20} />
            </button>

            <div className="relative">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-48 sm:h-56 object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                {dish.name}
              </h2>

              <p className="text-green-700 font-bold text-2xl sm:text-3xl mb-5">
                ₹{dish.price}
              </p>

              {/* Nutrition */}
              <h3 className="text-xl font-bold mb-3">Nutrition Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <NutritionItem label="Calories" value={dish.nutrition?.calories} />
                <NutritionItem label="Protein" value={dish.nutrition?.protein} />
                <NutritionItem label="Carbs" value={dish.nutrition?.carbs} />
                <NutritionItem label="Fat" value={dish.nutrition?.fat} />
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">Ingredients</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {dish.ingredients?.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NutritionItem({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <p className="font-bold text-lg text-gray-800">{value || "N/A"}</p>
    </div>
  );
}






