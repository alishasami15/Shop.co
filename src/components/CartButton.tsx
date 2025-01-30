"use client"; 

import { useCart } from "@/context/CartContext";

const CartButton = () => {
  const { cart } = useCart();

  return <button>Cart ({cart.length})</button>;
};

export default CartButton;
