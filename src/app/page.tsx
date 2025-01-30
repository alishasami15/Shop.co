
import Herosection from "@/components/Herosection";
import Products from "./products/page";
import Sell from "./products/Sell";
import Cart from "./cart/page";
import Picture from "@/components/Picture";

export default async function Home() {
 
  return (
   
   <div>
   
   
    <Herosection/>
    <Products/>
    <Sell/>
    <Picture/>
    <Cart/>
    
    
   
    
   </div>
   
  );
}
