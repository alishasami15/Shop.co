import Image from "next/image";
import Topheader from "@/components/Topheader";
import  Header  from "@/components/Header";
import React from "react";
import { BreadcrumbDemo } from "@/components/Bredcrupm";


const page = () => {

  return (
        // Top Header  
    <div className=" max-w-screen-2xl mx-auto flex flex-col mt-6 sm:mt-10 md:mt-20 relative w-full bg-col">
        <Topheader/>
        <Header/>
        <BreadcrumbDemo/>
        {/* shirt image */}
      
        <div className="w-full sm:w-[152px] h-[70px] pt-10 ml-6 rounded-xl ">
          <div className="flex flex-col gap-2 sm:gap-4 flex md:flex-row md:flex-col mt-100">
          <Image
   src="/shirt (2).png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
       className="flex flex-row md:flex-col mt-100"
   
       />
    

       
              <Image
   src="/shirt (2).png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
    className="flex flex-row md:flex-col mt-100"
  
       />
              <Image
   src="/shirt-image.png"
   alt="img"
   width={152} // Adjust the width
   height={160} // Adjust the height
    className="flex flex-row md:flex-col mt-100"
  
       />
          
          </div> 
         </div> 
     {/* big-image */}
     <div  className=" flex flex-row md:flex-col  flex w-[400px] h-[580px] pt-[2px] ml-[220px] rounded-[20px]">
         <Image
   src="/shirt (2).png"
   alt="img"
   width={444} // Adjust the width
   height={550} // Adjust the height
className="absolute left-266 hover hover:border-[10px] opacity-[40px]"
       />

      
     </div>
      
    {/* right text */}
<div className=" flex flex-col gap-[30px] absolute left-50 w-[600px]h-[48px] pt-[230px] pl-[750px] font-integral font-bold text-5xl ">
        <h1>One Life Graphic T-shirt</h1>
        <div className="flex flex-col gap-[15px]">
        <Image
   src="/star 1.png"
   alt="img"
   width={200} // Adjust the width
   height={24} // Adjust the height
/>
<Image
   src="/$ 1.png"
   alt="img"
   width={280} // Adjust the width
   height={80} // Adjust the height
/>

        </div>
<div>
<p className="text-xl font-normal text-[#00000099] ">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
</div>
<div className="pt-[2px]">
<h1 className="text-xl font-normal text-[#00000099] ">Select Colors</h1>
<div className="flex gap-[16px] pt-[4px]">
<div className=" w-[37px] h-[37px] bg-[#4F4631] rounded-[50px]"></div>
<div className=" w-[37px] h-[37px] bg-[#314F4A] rounded-[50px]"></div>
<div className=" w-[37px] h-[37px] bg-[#31344F] rounded-[50px]"></div>
</div>
</div>

<div className="pt-[2px]">
<h1 className="text-xl font-normal text-[#00000099] ">Choose Size</h1>
<div className="flex gap-[16px]  font-integral text-xl font-normal pt-[15px] ">
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ">Small</div>
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[105px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] ">Medium</div>
<div className=" pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[12px] w-[90px] h-[45px] bg-[#000000] rounded-[62px] text-[#FFFFFF] ">Large</div>
<div className=" pt-[12px] pr-[24px] pb-[12px] pl-[20px] gap-[12px] w-[100px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099]  ">XLarge</div>
</div>
</div>
<div className="flex gap-[12px]">
<div className="w-[170px] h-[52px] rounded-[62px] justify-[space-between] bg-[#F0F0F0]">
<div className="flex text-xl font-normal text-[#000000] gap-[25px]">
<div className="w-[24px] h-[24px]   pt-[8px] pr-[20px] pb-[16px] pl-[20px] text-bold">_</div>
  <div className="w-[6px] h-[22px]   pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">1</div>
  <div className="w-[24px] h-[24px]  pt-[16px] pr-[20px] pb-[16px] pl-[20px] text-bold">+</div>
</div>
</div>


<div className="w-[400px] h-[52px] gap-[12px] rounded-[62px] bg-[#000000]">
  <div className="w-[320px] h-[22px] text-[#FFFFFF] text-xl font-normal font-[16px]  pb-[16px] pl-[54px] pt-[16px] pr-[54px] text-center ">Add to Cart</div>
</div>
</div>
     
      </div>

        {/* All reviews */}
  <div className="w-[135px] h-[32px] pt-[100px] pl-[130px] font-integral text-[48px]  leading-[57.6px] text-left" >
   <span  className="flex gap-10 ">All<p>Reviews</p></span>
  </div>
  {/* one */}
 <div className="flex">
 <div className=" mt-[100px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 3.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 15, 2023</p>
  </div>
  
  <div className="mt-[100px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 2.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 20, 2024</p>
  </div>
 
 </div>
{/* two */}
 <div className="flex">
 <div className=" mt-[50px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer s skill. It s like wearing a piece of art that reflects my passion for both design and fashion.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2024</p>
  </div>
  <div className="mt-[50px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 3.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2023</p>
  </div>
 
 </div>
{/* three */}
 <div className="flex">
 <div className=" mt-[50px] ml-[130px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct 2.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It s become my favorite go-to shirt.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 25, 2024</p>
</div>
  <div className="mt-[50px] ml-[40px] border-[1px] w-[610px] h-[241.58px] p-[28px 32px 28px 32px] gap-[10px] rounded-[20px]">
  <Image
   src="/star.png"
   alt="img"
   width={127}
   height={22}
   className="pl-[22px] pt-[6px] gap-[6px]"
 />
  <Image
   src="/correct.png"
   alt="img"
   width={145}
   height={24}
   className="pl-[22px] pt-[10px] gap-[4px]"
 />

   <p className="pl-[22px] pt-[10px]">The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.</p>
   <p className="text-[#00000099] pl-[22px] pt-[10px]">Posted on August 19, 2023</p>
  </div>
 
 </div>
 
 
 {/* Nanbar */}
 <div className="pl-[1px] pt-[100px]">
<Image
   src="/navbar.png"
   alt="img"
   width={1330}
   height={122}
   />
</div>
    </div>
  )
}

export default page