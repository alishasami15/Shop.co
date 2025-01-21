
import React from 'react';

const Topheader = () => {
  return (
   
    <div className="flex flex-col mx-auto w-full bg-col max-w-screen-2xl mx-auto">
      {/* Announcement Bar */}
      <div className="bg-[#000000] w-full h-[40px] flex items-center justify-center">
        <p className="font-satoshi text-xs sm:text-sm text-[#FFFFFF] font-normal text-center px-4">
          Sign up and get 20% off your first order.{' '}
          <span className="font-satoshi text-[#FFFFFF] underline cursor-pointer">
            Sign Up Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Topheader;