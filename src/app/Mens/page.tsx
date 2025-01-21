
"use client";

import { BreadcrumbDemo } from "@/components/Bredcrupm";
import Topheader from "@/components/Topheader";
import  Header  from "@/components/Header";
import Image from "next/image";
import React from "react";


export default function shirtPage() {
  return (
    
    <div className="container mx-auto p-4 max-w-screen-2xl mx-auto">
        <Topheader/>
        <Header/>
    <BreadcrumbDemo  />
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Jearcy Collection</h1>
      <p className="text-lg text-center mb-8">
        Explore our range of casual wear designed to match your style and comfort.
      </p>
     
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example product cards */}
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Image
            src="/blue.png"
            alt="Casual Shirt"
            className="w-[250px]  object-center rounded-md mb-4 "
          />
          <h2 className="text-xl font-semibold">Jearcy</h2>
          <p className="text-gray-600">Comfortable and stylish for everyday wear.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Image
            src="/pink.png"
            alt="Jeans"
            className="w-[250px] object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">Jearcy Wear</h2>
          <p className="text-gray-600">Perfect for casual outings and relaxed winters days.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Image
            src="/white.png"
            alt="Casual Pants"
            className="w-[250px]  object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold"> White Jearcy </h2>
          <p className="text-gray-600">Versatile and comfortable for any occasion.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Image
            src="/shirt-color.png"
            alt="Casual Shirt"
            className="w-[250px]  object-center rounded-md mb-4 "
          />
          <h2 className="text-xl font-semibold">Jearcy Tees</h2>
          <p className="text-gray-600">Comfortable and stylish for everyday wear.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
      
    </div>
  );
}