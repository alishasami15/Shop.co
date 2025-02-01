'use client'
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { SheetDemo } from './sheet';
import { NavigationMenuDemo } from './NavigationMenu';

const Header = () => {

  return (
    <header className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between w-full px-4 md:px-8 lg:px-20 mt-6">
      {/* Logo */}
      <div className="flex justify-center item-center">
        <SheetDemo />
        <h1 className="pt-4 text-[#000000] font-bold text-2xl md:text-4xl font-integral">SHOP.CO</h1>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-7 text-[#000000] text-base font-satoshi flex items-center">
      <li className="cursor-pointer hover:text-blue-500">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="cursor-pointer hover:text-blue-500">
          <Link href={""}><NavigationMenuDemo /></Link>
        </li>
        
        <li className="cursor-pointer hover:text-blue-500">
          <Link href={"/cascul"}>On Sale</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <Link href={"/products"}>New Arrivals</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <Link href={"/Mens"}>Brands</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="hidden sm:block">
        <div className="flex items-center w-full mt-4 md:mt-0 md:w-auto bg-[#F0F0F0] rounded-full px-4 py-2">
          <IoIosSearch className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full md:w-[200px] text-sm text-[#00000066] bg-transparent focus:outline-none ml-2"
          />
        </div>
      </div>

      {/* Icons */}
     
             <Link href="/cart">
  <BsCart3 className="w-6 h-6 cursor-pointer text-[#000000]" />
</Link>

        {/* User Icon */}
        <FaRegUserCircle className="w-6 h-6 cursor-pointer text-[#000000]" />
      
    </header>
  );
};

export default Header;



