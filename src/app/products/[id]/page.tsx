"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext"; 
import AllReview from "@/components/allreview";
import Tshirts from "@/components/image9";
import { useRouter } from "next/navigation"; 
import  Producted  from "@/types/producted";
import { CartItem } from "@/types/cart";

const star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />];

interface product {
  title: string;
  price: string | number;
  id: number;
  rating?: string;
  old_price?: string | number;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
}


const products : product[] = [
  { title: "T-SHIRT WITH TAPE DETAILS", id: 1, price: "$140", img_url: "/images/image-1.png", img1: "/images/image-1.png", img2: "/images/image-1.png", img3: "/images/image-1.png"},
  { title: "SKINNY FIT JEANS", id: 2, price: "$120", img_url: "/image 2.png", old_price: "$200", img1: "/image 2.png", img2: "/image 2.png", img3: "/image 2.png" },
  { title: "CHECKERED SHIRT", id: 3, price: "$120", img_url: "/image 3.png", img1: "/image 3.png", img2: "/image 3.png", img3: "/image 3.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 4, price: "$120", img_url: "/image 4.png", old_price: "$200", img1: "/image 4.png", img2: "/image 4.png", img3: "/image 4.png" },
  { title: "Vertical Striped Shirt", id: 5, price: "$180", img_url: "/image 5.png", img1: "/image 5.png", img2: "/image 5.png", img3: "/image 5.png" },
  { title: "Courage Graphic T-Shirt", id: 6, price: "$190", img_url: "/image 6.png", img1: "/image 6.png", img2: "/image 6.png", img3: "/image 6.png" },
  { title: "Loose Fit Bermuda Sports", id: 7, price: "$200", img_url: "/image 7.png", img1: "/image 7.png", img2: "/image 7.png", img3: "/image 7.png" },
  { title: "Faded Skinny Jeans", id: 8, price: "$240", img_url: "/image 8.png", img1: "/image 8.png", img2: "/image 8.png", img3: "/image 8.png" },
  { title: "Vertical Striped Shirt", id: 9, price: "$180", img_url: "/blue.png", img1: "/blue.png", img2: "/blue.png", img3: "/blue.png" },
  { title: "Courage Graphic T-Shirt", id: 12, price: "$190", img_url: "/white.png", img1: "/white.png", img2: "/white.png", img3: "/white.png" },
  { title: "CHECKERED SHIRT", id: 10, price: "$300", img_url: "/pink.png", img1: "/pink.png", img2: "/pink.png", img3: "/pink.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 11, price: "$150", img_url: "/shirt-color.png", img1: "/shirt-color.png", img2: "/shirt-color.png", img3: "/shirt-color.png" },
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
  if (!item ) {
    return <h1 className="text-center text-2xl mt-10">Product not found</h1>;
  }
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to cart");
      return;
    }
    
 const handleAddToCart =(item: Producted) => {
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
  
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0">
          <Image src={item.img3} alt={item.title} className="w-full h-[95%]" width={100} height={100} />
        </div>

        <div className="w-full sm:w-[600px] h-[200px] mt-3">
          <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
          <div className="flex text-yellow-400">{star.map((icon, index) => (<span key={index}>{icon}</span>))}</div>
          <p className="font-bold mt-1">{item.price} <span>{item.old_price}</span></p>
          <p>This graphic t-shirt is perfect for any occasion.</p>

          <div className="mt-4">
            <label className="block font-medium">Size:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border rounded-lg p-2 mt-2 w-full">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block font-medium">Color:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="border rounded-lg p-2 mt-2 w-full">
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block font-medium">Quantity:</label>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border rounded-lg p-2 mt-2 w-full" />
          </div>
          

          <button onClick={() => handleAddToCart(item)}  className="mt-5 px-6 py-2 bg-black text-white rounded-full text-lg">
            Add to Cart
          </button>
        
        </div>
      </div>

      <AllReview />
      <Tshirts />
    </>
  );
}