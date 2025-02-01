

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext"; 

const HomePage = () => {
  const { cart } = useCart();  // Access the cart state from context

  return (
    <div className="container mx-auto p-4">
 
 
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      
      {/* Display cart count */}
      <div className="mb-4">
        <h2 className="text-2xl">Items in Cart: {cart.length}</h2>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl">Featured Products</h2>
        <div className="flex space-x-4">
          {/* Example Product Cards */}
          <div className="border p-4 rounded-lg">
            <Image src="/path-to-image.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl">Product 1</h3>
            <p>$20</p>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/image 1.png" alt="Product 2" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl">Product 2</h3>
            <p>$25</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HomePage;