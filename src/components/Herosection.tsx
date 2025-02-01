"use client";

import Image from 'next/image';
import React from 'react';

const Herosection = () => {
  return (
    <div>
      
      {/* Hero Section */}
      <div className=" max-w-screen-2xl mx-auto mt-[40px] w-full max-w-[1330px] mx-auto h-auto lg:h-[540px] flex flex-col lg:flex-row items-start relative px-4 lg:px-20">
        {/* Heading */}
        <h1 className="font-['Integral CF'] text-[#000000] text-3xl lg:text-[64px] font-bold leading-snug lg:leading-[64px] text-left w-full lg:w-[577px] pt-[30px] lg:pt-[100px]">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>

        {/* Paragraph */}
        <p className="text-[20px] lg:text-normal  text-left font-['Satoshi'] font-normal mt-6 lg:mt-10  lg:w-[545px] w-[200px]  lg:absolute left-15 top-60 ">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        
        {/* Shop Now Button */}
        <div className="text-white w-[180px] lg:w-[210px] h-[40px] lg:h-[52px] mt-6 lg:mt-10 lg:absolute left-15 lg:bottom-20 bg-[#000000] rounded-full flex items-center justify-center text-sm lg:text-base cursor-pointer">
          Shop Now
        </div>

        {/* Main Image */}
        <Image
          src="/image-main.png"
          alt="Main clothing display"
          width={665}
          height={380}
          className="mt-10 lg:mt-0 lg:absolute bottom-0 right-20 object-contain"
        />

      </div>

      {/* Logo Section */}
      <div className="h-auto bg-[#000000] py-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-[#FFFFFF]">
          <Image
            src="/Group.png"
            alt="Group Logo"
            width={120}
            height={25}
            className="object-contain"
          />
          <Image
            src="/zara-logo-1 1.png"
            alt="Zara Logo"
            width={120}
            height={25}
            className="object-contain"
          />
          <Image
            src="/gucci-logo-1 1.png"
            alt="Gucci Logo"
            width={120}
            height={25}
            className="object-contain"
          />
          <Image
            src="/prada-logo-1 1.png"
            alt="Prada Logo"
            width={120}
            height={25}
            className="object-contain"
          />
          <Image
            src="/Group (1).png"
            alt="Group 1 Logo"
            width={120}
            height={25}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Herosection;