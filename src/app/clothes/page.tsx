
"use client";

import Image from "next/image";

import React, { useState } from "react";


const Page = () => {
  const [selectedColor, setSelectedColor] = useState("#4F4631");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      productName: "One Life Graphic T-shirt",
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: 50, // Assuming $50 per shirt
    };

    // Here you can send `cartItem` to your cart management logic (e.g., global state, API, etc.)
    console.log("Item added to cart:", cartItem);
    alert("Item added to cart successfully!");
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col mt-6 sm:mt-10 md:mt-20 w-full bg-col">
      {/* Top Header */}
  

      {/* Shirt Images */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col md:flex-row gap-4 pt-10">
          <div className="flex justify-center items-center ml-1">
            <Image
              src="/shirt(2).png"
              alt="img"
              width={250}
              height={880}
              className="rounded-2xl"
            />
          </div>
          <div className="flex gap-2 md:flex-col mt-18 ml-10 lg-gap-2 md:hidden">
            <Image
              src="/shirt(2).png"
              alt="img"
              width={80}
              height={160}
              className="rounded-lg md:w-full"
            />
            <Image
              src="/shirt(2).png"
              alt="img"
              width={80}
              height={160}
              className="rounded-lg md:w-full"
            />
            <Image
              src="/shirt-image.png"
              alt="img"
              width={80}
              height={160}
              className="rounded-lg md:w-full"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="px-6 md:px-30 lg:px-32 mt-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            One Life Graphic T-shirt
          </h1>
          <div className="flex flex-col gap-2 mt-4">
            <Image src="/star1.png" alt="img" width={200} height={24} />
            <Image src="/$ 1.png" alt="img" width={280} height={80} />
          </div>
          <p className="text-lg mt-4 text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-600">Select Colors</h2>
            <div className="flex gap-4 mt-2">
              {["#4F4631", "#314F4A", "#31344F"].map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full cursor-pointer ${
                    selectedColor === color
                      ? "ring-2 ring-black"
                      : "ring-1 ring-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Choose Size */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-600">Choose Size</h2>
            <div className="flex gap-4 mt-2">
              {["Small", "Medium", "Large", "XLarge"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 mt-6 items-center">
            <div className="flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-2 rounded-full text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 md:px-16 lg:px-32 mt-16">
        <h2 className="text-2xl font-bold">All Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-sm flex flex-col gap-4"
            >
              <Image src="/star.png" alt="img" width={127} height={22} />
              <Image src="/correct.png" alt="img" width={145} height={24} />
              <p className="text-gray-700">
                This t-shirt exceeded my expectations! The colors are vibrant and
                the print quality is top-notch.
              </p>
              <p className="text-sm text-gray-500">Posted on August 19, 2023</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
