
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="w-full  mt-10 px-4 lg:px-20 max-w-screen-2xl mx-auto">
      {/* Heading for "OUR HAPPY CUSTOMERS" */}
      <div className="text-center lg:mt-20">
        <h1 className="text-4xl md:text-4xl font-bold text-center leading-tight">OUR HAPPY CUSTOMERS</h1>
        
      </div>

      {/* Customer Reviews Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Review 1 */}
        <div className="w-full h-auto pt-6 pl-4 pr-4 bg-white border rounded-xl">
          <Image
            src="/star.png"
            alt="Star"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <Image
            src="/correct.png"
            alt="Correct"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <p className="pl-4 pt-4 text-sm md:text-base">
            I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.
          </p>
        </div>

        {/* Review 2 */}
        <div className="w-full h-auto pt-6 pl-4 pr-4 bg-white border rounded-xl">
          <Image
            src="/star.png"
            alt="Star"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <Image
            src="/correct 2.png"
            alt="Correct"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <p className="pl-4 pt-4 text-sm md:text-base">
            I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations.
          </p>
        </div>

        {/* Review 3 */}
        <div className="w-full h-auto pt-6 pl-4 pr-4 bg-white border rounded-xl">
          <Image
            src="/star.png"
            alt="Star"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <Image
            src="/correct 3.png"
            alt="Correct"
            width={100}
            height={100}
            className="pl-4 pt-2"
          />
          <p className="pl-4 pt-4 text-sm md:text-base">
            I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations.
          </p>
        </div>
      </div>

      {/* Navbar Image */}
      <div className="mt-20">
        <Image
          src="/navbar.png"
          alt="Navbar"
          width={1330}
          height={122}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;