"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    console.log(cart); // Log cart to see the structure
  }, [cart]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className=" text-[#000000] font-bold text-2xl md:text-3xl  flex justify-center item-center"> Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
               
               
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm font-bold">${item.price}</p>
                </div>
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
      )}
    </div>
  );
};

export default CartPage;


