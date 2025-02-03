"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter(); // For navigation

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-black font-bold text-2xl md:text-3xl text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm font-bold">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => router.push("/checkout")} // Redirect to Checkout Page
            className="mt-5 w-full bg-black text-white py-2 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    
    </div>
  );
};

export default CartPage;