
import Herosection from "@/components/Herosection";
import Products from "./products/page";
import Sell from "./products/Sell";
import Navbar from "@/components/Navbar";
import Picture from "@/components/Picture";

export default async function Home() {
 
  return (
   
   <div>
   
   
    <Herosection/>
    <Products/>
    <Sell/>
    <Picture/>
    
    
   
    
   </div>
   
  );
}
