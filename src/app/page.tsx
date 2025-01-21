import Topheader from "@/components/Topheader";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Products from "./products/page";
import Sell from "./products/Sell";
import Navbar from "@/components/Navbar";
import Picture from "@/components/Picture";


export default function Home() {
  return (
   <div>
    <Topheader/>
    <Header/>
    <Herosection/>
    <Products/>
    <Sell/>
    <Picture/>
    <Navbar/>
   
    
   </div>
  );
}
