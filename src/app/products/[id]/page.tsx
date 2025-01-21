

"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import AllReview from "@/components/allreview";
import { BreadcrumbDemo } from "@/components/Bredcrupm";
import Tshirts from "@/components/Products";
import Topheader from "@/components/Topheader";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
}

const product: Iproducts[] = [
  { title: "T-SHIRT WITH TAPE DETAILS", id: 1, price: "$140", img_url: "/image 1.png", img1: "/image 1.png", img2: "/image 1.png", img3: "/image 1.png" },
  { title: "SKINNY FIT JEANS", id: 2, price: "$120", img_url: "/image 2.png", old_price: "$200", img1: "/image 2.png", img2: "/image 2.png", img3: "/image 2.png" },
  { title: "CHECKERED SHIRT", id: 3, price: "$120", img_url: "/image 3.png", img1: "/image 3.png", img2: "/image 3.png", img3: "/image 3.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 4, price: "$120", img_url: "/image 4.png", old_price: "$200", img1: "/image 4.png", img2: "/image 4.png", img3: "/image 4.png" },
  { title: "Vertical Striped Shirt", id: 5, price: "$140", img_url: "/image 5.png", img1: "/image 5.png", img2: "/image 5.png", img3: "/image 5.png" },
  { title: "Courage Graphic T-Shirt", id: 6, price: "$190", img_url: "/image 6.png", old_price: "$200", img1: "/image 6.png", img2: "/image 6.png", img3: "/image 6.png" },
  { title: "Loose Fit Bermuda Sports", id: 7, price: "$120", img_url: "/image 7.png", img1: "/image 7.png", img2: "/image 7.png", img3: "/image 7.png" },
  { title: "Faded Skinny Jeans", id: 8, price: "$100", img_url: "/image 8.png", old_price: "$200", img1: "/image 8.png", img2: "/image 8.png", img3: "/image 8.png" },
  { title: "Vertical Striped Shirt", id: 9, price: "$140", img_url: "/blue.png", old_price: "$200", img1: "/blue.png", img2: "/blue.png", img3: "/blue.png" },
  { title: "Courage Graphic T-Shirt", id: 10, price: "$130", img_url: "/pink.png", old_price: "$200", img1: "/pink.png", img2: "/pink.png", img3: "/pink.png" },
  { title: "CHECKERED SHIRT", id: 11, price: "$120", img_url: "/shirt-color.png", old_price: "$200", img1: "/shirt-color.png", img2: "/shirt-color.png", img3: "/shirt-color.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 12, price: "$110", img_url: "/white.png", old_price: "$200", img1: "/white.png", img2: "/white.png", img3: "/white.png" },
];

export default function Pro_Detail() {
  const params = useParams();
  const id = Number(params.id); // Convert to number

  // Check for a valid product
  const item = product.find((item) => item.id === id);
  if (!item || id > 12) {
    return <h1 className="text-center text-2xl mt-10">Product not found</h1>;
  }

  return (
    <>
      <Topheader />
      <Header />
      <BreadcrumbDemo />
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
        {/* Left Section */}
        <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
          <Image src={item.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt={item.title} width={100} height={100} />
          <Image src={item.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt={item.title} width={100} height={100} />
          <Image src={item.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt={item.title} width={100} height={100} />
        </div>

        {/* Middle Section */}
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
          <Image src={item.img3} alt={item.title} className="w-full h-[95%]" width={100} height={100} />
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[600px] h-[200px] mt-3 order-3">
          <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
          <div className="flex text-yellow-400 ">
            {star.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
          <p className="font-bold mt-1">{item.price} <span>{item.old_price}</span></p>
          <p>This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </div>
      </div>
      <AllReview />
      <Tshirts />
      <Navbar />
    </>
  );
}