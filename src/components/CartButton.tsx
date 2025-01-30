

"use client";

import React from "react";
import { useCart } from "@/context/CartContext"; // Use your CartContext to interact with the cart

const CartButton = () => {
  const { cart, addToCart} = useCart();  // Use CartContext's methods

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),  // Using Date.now() to generate a unique ID
      name: "T-Shirt",
      price: 20,
      quantity: 1,
      imageurl: "/tshirt.png",  // Replace with actual item image URL
      size: "large",
      color: "white",
    };
    addToCart(newItem); // Add item to cart using addToCart method from context
  };

  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
      
    </div>
  );
};

export default CartButton;