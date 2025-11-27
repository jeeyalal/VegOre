import { useCart } from "../context/CartContext";
import { Trash, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="px-4 max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <img src={item.img} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-4 flex-1">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-green-700 font-semibold">₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)} className="p-2 bg-gray-200 rounded-full">
                  <Minus size={16} />
                </button>
                <span className="text-lg">{item.qty}</span>
                <button onClick={() => increaseQty(item.id)} className="p-2 bg-gray-200 rounded-full">
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-4">
            <p className="text-xl font-bold">Total: ₹{total}</p>
            <button className="bg-green-600 text-white py-3 px-6 rounded-xl mt-2 font-bold hover:bg-green-700">
              Continue to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
