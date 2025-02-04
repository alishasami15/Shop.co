// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";

// interface Iproducts{
//     title:string,
//     price:string,
//     id:number
//     rating?:string,
//     old_price?:string
//     img_url:string
// }

// const  product:Iproducts[] = [
//     {
//      title:"Vertical Striped Shirt",
//      id:9,
//      price:"$200",
//      img_url:"/blue.png"
//     },
//     {
//      title:"Courage Graphic T-Shirt",
//      id:10,
//      price:"$300",
//      img_url:"/pink.png",
//      old_price:"$200"
//     },
//     {
//      title:"CHECKERED SHIRT",
//      id:11,
//      price:"$180",
//      img_url:"/shirt-color.png",
//     },
//     {
//      title:"SLEEVE STRIPED T-SHIRT",
//      id:12,
//      price:"$120",
//      img_url:"/white.png",
//      old_price:"$200"

//     }
// ]
// // Adding key prop in star array
// const star = [
//     <FaStar key={1} />,
//     <FaStar key={2} />,
//     <FaStar key={3} />,
//     <FaStar key={4} />,
//     <FaStar key={5} />,
//   ];
// export default function Tshirts(){
//     return(
//         <div className="w-full  h-full sm:h-[400px] mt-20  max-w-screen-2xl mx-auto pt-50 md:pt-0">
  
//             <h1 className="text-3xl md:text-4xl font-bold text-center">You might also like</h1>
//             <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
//                 {
//                    product
//                    .filter((data) => data.id <= 12) // Display only products with ID <= 12
//                    .map((data) => {
//                      return (
//                        <div key={data.id}>
//                          <Link href={`/products/${data.id}`}>
//                            <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
//                              <Image
//                                src={data.img_url}
//                                alt={data.title}
//                                className="w-full h-full rounded-[20px]"
//                                width={100}
//                                height={100}
//                              />
//                            </div>
//                          </Link>
//                          <div>
//                            <p className="text-lg mt-2 font-bold">{data.title}</p>
//                            <div className="flex text-yellow-400">
//                              {star.map((icon, index) => (
//                                <span key={index}>{icon}</span>
//                              ))}
//                            </div>
//                            <p className="font-bold mt-1">
//                              {data.price}{" "}
//                              <span className="text-gray-400 font-bold line-through">
//                                {data.old_price}
//                              </span>
//                            </p>
//                          </div>
//                        </div>
//                      );
//                    })
//                 }
//             </div>
//         </div>
//     )
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Correct Import

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

const product: Iproducts[] = [
  { title: "Vertical Striped Shirt", id: 9, price: "$200", img_url: "/blue.png" },
  { title: "Courage Graphic T-Shirt", id: 10, price: "$300", img_url: "/pink.png", old_price: "$200" },
  { title: "CHECKERED SHIRT", id: 11, price: "$180", img_url: "/shirt-color.png" },
  { title: "SLEEVE STRIPED T-SHIRT", id: 12, price: "$120", img_url: "/white.png", old_price: "$200" }
];

// ⭐ Star Icons Array
const star = [...Array(5)].map((_, i) => <FaStar key={i} />);

export default function Tshirts() {
  return (
    <div className="w-full h-full sm:h-[400px] mt-20 max-w-screen-2xl mx-auto pt-50 md:pt-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center">You might also like</h1>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {product.map((data, index) => (
          <motion.div
            key={data.id}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link href={`/products/${data.id}`}>
              <motion.div 
                className="md:w-[290px]  md:h-[290px]  w-[190px] h-[190px] bg-[#F0EEED] rounded-[20px] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="w-full h-full rounded-[20px]"
                  width={230}
                  height={230}
                />
              </motion.div>
            </Link>

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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}