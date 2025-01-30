

import React from "react";
import { BsCart3 } from 'react-icons/bs';
import Link from "next/link";
import CartButton from "@/components/CartButton";

const CartPage = () => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <Link href="/cart">
  <BsCart3 className="w-6 h-6 cursor-pointer text-[#000000]" />
</Link>
<CartButton/>
    </div>
  );
};

export default CartPage;