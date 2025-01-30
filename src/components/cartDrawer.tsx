
"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { IoMdClose } from "react-icons/io";

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={toggleCart}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="p-4 text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="p-4 space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">Size: {item.size}</p>
                <p className="text-xs text-gray-500">Color: {item.color}</p>
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
      )}

      {cart.length > 0 && (
        <div className="p-4 border-t">
          <button
            onClick={toggleCart}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;