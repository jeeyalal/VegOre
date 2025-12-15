
// // src/pages/Subscription/MenuPreview.jsx
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSubscription } from "../../context/SubscriptionContext";
// import { dishes } from "../../data/dishes";
// import { RefreshCw, ArrowRight, StickyNote } from "lucide-react";

// export default function MenuPreview() {
//   const navigate = useNavigate();
//   const { subscription, setSubscription } = useSubscription();

//   const [selectedMode, setSelectedMode] = useState("random"); // random | manual
//   const [selectedDishes, setSelectedDishes] = useState([]);
//   const [manualSelection, setManualSelection] = useState([]);
//   const [notes, setNotes] = useState(subscription.specialNotes || "");

//   // 🥗 GET DISHES ACCORDING TO USER PLAN + DIET TYPE
//   const getAvailableDishes = () => {
//     const { planType, dietType } = subscription;

//     let category =
//       planType === "meal"
//         ? "meals"
//         : planType === "salad"
//         ? "salads"
//         : planType === "smoothie"
//         ? "smoothies"
//         : "meals";

//     return dishes[dietType]?.[category] || dishes.normal.meals;
//   };

//   const getRandomDishes = () => {
//     const available = getAvailableDishes();
//     const shuffled = [...available].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, Math.min(5, shuffled.length));
//   };

//   useEffect(() => {
//     if (subscription.selectedDishes.length > 0) {
//       setSelectedDishes(subscription.selectedDishes);
//     } else {
//       setSelectedDishes(getRandomDishes());
//     }
//   }, []);

//   const handleRefresh = () => {
//     setSelectedDishes(getRandomDishes());
//     setSelectedMode("random");
//   };

//   const handleCheckbox = (dish) => {
//     setManualSelection((prev) =>
//       prev.includes(dish)
//         ? prev.filter((d) => d !== dish)
//         : [...prev, dish]
//     );
//   };

//   const handleContinue = () => {
//     const finalDishes =
//       selectedMode === "manual" ? manualSelection : selectedDishes;

//     if (finalDishes.length === 0) {
//       alert("Please select at least one dish.");
//       return;
//     }

//     setSubscription((prev) => ({
//       ...prev,
//       selectedDishes: finalDishes,
//       specialNotes: notes,
//     }));

//     navigate("/subscription/user-details");
//   };

//   const availableDishes = getAvailableDishes();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
//       <div className="max-w-5xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-green-800 mb-2">
//             Your Menu Preview
//           </h1>
//           <p className="text-gray-600 mb-4">
//             Here's what you'll enjoy in your {subscription.planName}
//           </p>

//           {/* MODE SWITCH */}
//           <div className="flex justify-center gap-4 mb-4">
//             <button
//               onClick={() => setSelectedMode("random")}
//               className={`px-4 py-2 rounded-lg border-2 ${
//                 selectedMode === "random"
//                   ? "bg-green-600 text-white border-green-600"
//                   : "bg-white text-green-600 border-green-600"
//               }`}
//             >
//               Auto-Select for Me
//             </button>

//             <button
//               onClick={() => setSelectedMode("manual")}
//               className={`px-4 py-2 rounded-lg border-2 ${
//                 selectedMode === "manual"
//                   ? "bg-green-600 text-white border-green-600"
//                   : "bg-white text-green-600 border-green-600"
//               }`}
//             >
//               I'll Choose Myself
//             </button>
//           </div>

//           {/* RANDOM REFRESH BUTTON */}
//           {selectedMode === "random" && (
//             <button
//               onClick={handleRefresh}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all"
//             >
//               <RefreshCw className="w-4 h-4" />
//               Refresh Menu
//             </button>
//           )}
//         </div>

//         {/* SUBSCRIPTION SUMMARY */}
//         <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-6 mb-8">
//           <div className="grid md:grid-cols-3 gap-4 text-center">
//             <div>
//               <div className="text-sm opacity-90 mb-1">Plan</div>
//               <div className="text-xl font-bold">{subscription.planName}</div>
//             </div>
//             <div>
//               <div className="text-sm opacity-90 mb-1">Duration</div>
//               <div className="text-xl font-bold">{subscription.duration} Days</div>
//             </div>
//             <div>
//               <div className="text-sm opacity-90 mb-1">Diet Type</div>
//               <div className="text-xl font-bold capitalize">{subscription.dietType}</div>
//             </div>
//           </div>
//         </div>

//         {/* DISHES SECTION */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">

//           {/* RANDOM MODE */}
//           {selectedMode === "random" &&
//             selectedDishes.map((dish) => (
//               <DishCard key={dish.id} dish={dish} />
//             ))}

//           {/* MANUAL MODE */}
//           {selectedMode === "manual" && (
//             <div className="col-span-2 max-h-96 overflow-y-auto pr-2 space-y-4">
//               {availableDishes.map((dish) => (
//                 <div
//                   key={dish.id}
//                   className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
//                 >
//                   <input
//                     type="checkbox"
//                     onChange={() => handleCheckbox(dish)}
//                     checked={manualSelection.includes(dish)}
//                     className="mt-2 w-5 h-5 accent-green-600"
//                   />
//                   <div className="flex-1">
//                     <DishCard dish={dish} small />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* SPECIAL NOTES */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
//           <div className="flex items-center gap-3 mb-4">
//             <StickyNote className="w-6 h-6 text-green-600" />
//             <h2 className="text-2xl font-bold text-gray-800">Special Notes</h2>
//           </div>

//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             placeholder="Any dietary restrictions or preferences?"
//             className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-green-500 focus:outline-none resize-none"
//             rows={4}
//           />
//         </div>

//         {/* CONTINUE BUTTON */}
//         <button
//           onClick={handleContinue}
//           className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
//         >
//           Continue to Details
//           <ArrowRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// }

// /* --- DISH CARD COMPONENT --- */
// function DishCard({ dish, small }) {
//   return (
//     <div
//       className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
//         small ? "" : "hover:shadow-xl transition-all duration-300"
//       }`}
//     >
//       <div className="relative h-40 bg-gradient-to-br from-green-100 to-emerald-100">
//         <img
//           src={dish.img}
//           alt={dish.name}
//           className="w-full h-full object-cover"
//           onError={(e) => (e.target.style.display = "none")}
//         />
//         <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-lg">
//           <span className="text-green-700 font-bold">₹{dish.price}</span>
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-gray-800 text-lg mb-2">{dish.name}</h3>

//         <div className="grid grid-cols-2 gap-2 text-xs">
//           <Stat label="Calories" value={dish.nutrition.calories} />
//           <Stat label="Protein" value={dish.nutrition.protein} />
//           <Stat label="Carbs" value={dish.nutrition.carbs} />
//           <Stat label="Fat" value={dish.nutrition.fat} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Stat({ label, value }) {
//   return (
//     <div className="bg-gray-50 p-2 rounded">
//       <div className="text-gray-500 text-[10px]">{label}</div>
//       <div className="font-semibold text-sm">{value}</div>
//     </div>
//   );
// }










import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../../context/SubscriptionContext";
import { FoodContext } from "../../context/FoodContext";
import { RefreshCw, ArrowRight, StickyNote } from "lucide-react";

export default function MenuPreview() {
  const navigate = useNavigate();
  const { subscription, setSubscription } = useSubscription();
  const { dishes } = useContext(FoodContext);

  const [selectedMode, setSelectedMode] = useState("random"); // random | manual
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [manualSelection, setManualSelection] = useState([]);
  const [notes, setNotes] = useState(subscription.specialNotes || "");

  // ✅ MAP PLAN → CATEGORY
  const getCategoryFromPlan = () => {
    switch (subscription.planType) {
      case "salad":
        return "salads";
      case "smoothie":
        return "smoothies";
      case "meal":
      default:
        return "meals";
    }
  };

  // ✅ GET DISHES FROM BACKEND DATA
  const getAvailableDishes = () => {
    const diet = subscription.dietType || "normal";
    const category = getCategoryFromPlan();

    return dishes?.[diet]?.[category] || [];
  };

  const getRandomDishes = () => {
    const available = getAvailableDishes();
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(5, shuffled.length));
  };

  useEffect(() => {
    if (subscription.selectedDishes.length > 0) {
      setSelectedDishes(subscription.selectedDishes);
    } else {
      setSelectedDishes(getRandomDishes());
    }
  }, [subscription.dietType, subscription.planType, dishes]);

  const handleRefresh = () => {
    setSelectedDishes(getRandomDishes());
    setSelectedMode("random");
  };

  const handleCheckbox = (dish) => {
    setManualSelection((prev) =>
      prev.some((d) => d.id === dish.id)
        ? prev.filter((d) => d.id !== dish.id)
        : [...prev, dish]
    );
  };

  const handleContinue = () => {
    const finalDishes =
      selectedMode === "manual" ? manualSelection : selectedDishes;

    if (finalDishes.length === 0) {
      alert("Please select at least one dish.");
      return;
    }

    setSubscription((prev) => ({
      ...prev,
      selectedDishes: finalDishes,
      specialNotes: notes,
    }));

    navigate("/subscription/user-details");
  };

  const availableDishes = getAvailableDishes();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Your Menu Preview
          </h1>
          <p className="text-gray-600">
            {subscription.dietType} {subscription.planName}
          </p>

          {/* MODE SWITCH */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setSelectedMode("random")}
              className={`px-4 py-2 rounded-lg border-2 ${
                selectedMode === "random"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border-green-600"
              }`}
            >
              Auto Select
            </button>

            <button
              onClick={() => setSelectedMode("manual")}
              className={`px-4 py-2 rounded-lg border-2 ${
                selectedMode === "manual"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border-green-600"
              }`}
            >
              Choose Manually
            </button>
          </div>

          {selectedMode === "random" && (
            <button
              onClick={handleRefresh}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 text-green-600 rounded-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          )}
        </div>

        {/* DISHES */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {selectedMode === "random" &&
            selectedDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}

          {selectedMode === "manual" && (
            <div className="col-span-2 space-y-4">
              {availableDishes.map((dish) => (
                <div key={dish.id} className="flex gap-4 bg-white p-4 rounded-xl shadow">
                  <input
                    type="checkbox"
                    checked={manualSelection.some((d) => d.id === dish.id)}
                    onChange={() => handleCheckbox(dish)}
                  />
                  <DishCard dish={dish} small />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NOTES */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <StickyNote className="w-5 h-5 text-green-600" />
            <h3 className="font-bold">Special Notes</h3>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border rounded-lg p-3"
            rows={3}
          />
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- DISH CARD ---------- */
function DishCard({ dish, small }) {
  return (
    <div className={`bg-white rounded-xl shadow ${small ? "" : "hover:shadow-lg"}`}>
      <img
        src={dish.img}
        alt={dish.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-bold">{dish.name}</h3>
        <p className="text-sm text-gray-500">{dish.nutrition?.calories} cal</p>
        <div className="font-bold text-green-700 mt-2">₹{dish.price}</div>
      </div>
    </div>
  );
}
