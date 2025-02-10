"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";


interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

const product:Iproducts[] = [
    {
     title:"Vertical Striped Shirt",
     id:5,
     price:"$150",
     img_url:"/images/image 5.png"
    },
    {
     title:"Courage Graphic T-Shirt",
     id:6,
     price:"$120",
     img_url:"/images/image 6.png",
     old_price:"$200"
    },
    {
     title:"Loose Fit Bermuda Sports",
     id:7,
     price:"$80",
     img_url:"/images/image 7.png"
    },
    {
     title:"Faded Skinny Jeans",
     id:8,
     price:"$120",
     img_url:"/images/image 8.png",
     old_price:"$210"

    }
]

// Adding key prop in star array
const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];
export default function Top_sell(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
<h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
<motion.div
  className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10 gap-6"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {product
    .map((data, index) => (
      <motion.div
        key={data.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Link href={`/products/${data.id}`}>
          <motion.div
            className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={data.img_url}
              alt={data.title}
              className="w-full h-full rounded-[20px]"
              width={290}
              height={290}
            />
          </motion.div>
        </Link>
        <div className="text-center">
          <p className="text-lg mt-2 font-bold">{data.title}</p>
          <motion.div
            className="flex justify-center text-yellow-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {star.map((icon, i) => (
              <motion.span key={i} whileHover={{ scale: 1.2 }}>
                {icon}
              </motion.span>
            ))}
          </motion.div>
          <p className="font-bold mt-1">
            {data.price}{" "}
            <span className="text-gray-400 font-bold line-through">
              {data.old_price}
            </span>
          </p>
        </div>
      </motion.div>
    ))}
</motion.div>
</div>
);
}
