"use client"; 

import { useCart } from "@/context/CartContext";
import Cart from "@/app/cart/page"

const CartButton = () => {
  const { cart } = useCart();

  // return <button>Cart ({cart.length})</button>;
  <Cart/>
};

export default CartButton;
