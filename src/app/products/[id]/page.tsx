"use client";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useCart } from "@/context/CartContext"; 
import AllReview from "@/components/allreview";
import Tshirts from "@/components/image9";



interface Product {
  id: number;
  title: string;
  price: number;
  img3: string;
}

interface CartItem {
  id: string;
  title: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}




const products: Product[] = [
  { title: "T-SHIRT WITH TAPE DETAILS", id: 1, price: 140, img3: "/images/image-1.png" },
  { title: "SKINNY FIT JEANS", id: 2, price: 120, img3: "/image 2.png" },
  { title: "CHECKERED SHIRT", id: 3, price: 120 , img3: "/image 3.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 4, price: 120, img3: "/image 4.png" },
  { title: "Vertical Striped Shirt", id: 5, price: 180,  img3: "/image 5.png" },
  { title: "Courage Graphic T-Shirt", id: 6, price: 190 ,img3: "/image 6.png" },
  { title: "Loose Fit Bermuda Sports", id: 7, price: 200 , img3: "/image 7.png" },
  { title: "Faded Skinny Jeans", id: 8, price: 240, img3: "/image 8.png" },
  { title: "Vertical Striped Shirt", id: 9, price: 180,  img3: "/blue.png" },
  { title: "Courage Graphic T-Shirt", id: 10, price: 190, img3: "/white.png" },
  { title: "CHECKERED SHIRT", id: 11, price: 300,  img3: "/pink.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 12, price: 150, img3: "/shirt-color.png" },
];

export default function Pro_Detail() {
  const params = useParams();
  const id = Number(params.id);
  const { addToCart } = useCart(); 
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  const item = products.find((item) => item.id === id);




  
  const handleAddToCart = useCallback(() => {
    if (!item) return; 

    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to cart");
      return;
    }
  
    const cartItem: CartItem = {
      id: String(item.id), 
      title: item.title, 
      price: item.price, 
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
  
    addToCart(cartItem);
    router.push("/cart");
    console.log("Item added to cart!");
  }, [item, selectedSize, selectedColor, quantity, addToCart, router]);


  
  if (!item) {
    return <h1 className="text-center text-2xl mt-10">Product not found</h1>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0">
          <Image src={item.img3} alt={item.title} className="w-full h-[95%]" width={100} height={100} />
        </div>

        <div className="w-full sm:w-[600px] h-[200px] mt-3">
          <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
          <p className="font-bold mt-1">${item.price}</p>
          <p>This graphic t-shirt is perfect for any occasion.</p>

          {/* Select Size */}
          <div className="mt-4">
            <label className="block font-medium">Size:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border rounded-lg p-2 mt-2 w-full">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          {/* Select Color */}
          <div className="mt-4">
            <label className="block font-medium">Color:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="border rounded-lg p-2 mt-2 w-full">
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>

          {/* Select Quantity */}
          <div className="mt-4">
            <label className="block font-medium">Quantity:</label>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border rounded-lg p-2 mt-2 w-full" />
          </div>

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="mt-5 px-6 py-2 bg-black text-white rounded-full text-lg">
            Add to Cart
          </button>
        </div>
      </div>

      <AllReview />
      <Tshirts />
    </>
  );
}
