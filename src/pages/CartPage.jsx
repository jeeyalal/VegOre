// import { useCart } from "../context/CartContext";
// import { Trash, Plus, Minus } from "lucide-react";

// export default function CartPage() {
//   const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="px-4 max-w-4xl mx-auto mt-8">
//       <h1 className="text-3xl font-bold text-green-700 mb-6">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center bg-white p-4 rounded-xl shadow-md">
//               <img src={item.img} className="w-20 h-20 object-cover rounded-lg" />
//               <div className="ml-4 flex-1">
//                 <h2 className="font-bold text-lg">{item.name}</h2>
//                 <p className="text-green-700 font-semibold">₹{item.price}</p>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-2">
//                 <button onClick={() => decreaseQty(item.id)} className="p-2 bg-gray-200 rounded-full">
//                   <Minus size={16} />
//                 </button>
//                 <span className="text-lg">{item.qty}</span>
//                 <button onClick={() => increaseQty(item.id)} className="p-2 bg-gray-200 rounded-full">
//                   <Plus size={16} />
//                 </button>
//               </div>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="ml-4 text-red-500 hover:text-red-700"
//               >
//                 <Trash size={20} />
//               </button>
//             </div>
//           ))}

//           {/* Total */}
//           <div className="text-right mt-4">
//             <p className="text-xl font-bold">Total: ₹{total}</p>
//             <button className="bg-green-600 text-white py-3 px-6 rounded-xl mt-2 font-bold hover:bg-green-700">
//               Continue to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useCart } from "../context/CartContext";
import { Trash, Plus, Minus } from "lucide-react";
import { initiatePayment } from "../utils/payments"; // ⭐ Razorpay Checkout
import BackButton from "../components/BackButton";
export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="px-4 max-w-4xl mx-auto mt-8 mb-16">
      <BackButton />
      <h1 className="text-3xl font-bold mt-4 text-green-700 mb-6">Your Cart</h1>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <a
            href="/menu"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Browse Menu
          </a>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-xl shadow-md"
              >
                {/* Image */}
                <img
                  src={item.img}
                  className="w-20 h-20 object-cover rounded-lg"
                  alt={item.name}
                />

                {/* Info */}
                <div className="ml-4 flex-1">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-green-700 font-semibold">₹{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-lg font-semibold">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL + CHECKOUT */}
          <div className="text-right mt-6">
            <p className="text-2xl font-bold">
              Total: <span className="text-green-700">₹{total}</span>
            </p>

            <button
              onClick={() => initiatePayment(total)} // ⭐ Razorpay Checkout
              className="bg-green-600 text-white py-3 px-8 rounded-xl mt-3 font-bold 
                         hover:bg-green-700 transition shadow-md"
            >
              Continue to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
