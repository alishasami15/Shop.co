import { client } from "@/sanity/lib/client";
import Customer from "@/types/customer"; 
import Clothes from "@/types/clothes"; 

const CreateCustomerInSanity = async (customerInfo:Customer)=>
{

    try{
    const customerObject = {
        _type:"customer",
        name:customerInfo.name,
        email:customerInfo.email,
        phone:customerInfo.phone
    };
    console.log(customerObject);

    const response = await client.create(customerObject)
    console.log("user created in sanity",response)
    return response
    }
    catch(error)
    {
        console.log("error created user in sanity",error)
        throw error
    }
}

const CreateOrderInSanity = async (cartData:Clothes[], customer_id:string)=>
    {
        try
        {
            const orderObject = {
                _type:"order",
                customer:{
                    _type:"reference",
                    _ref:customer_id
                },
                items:cartData.map((item:Clothes)=>(
                    {
                        _type:"items",
                        _id : item._id,
                        product_name:item.name,
                        product_size:item.size,
                        product_color:item.color,
                        product_price:item.price,
                        quantity:1
                    }
                )),
                order_date:new Date().toISOString()
            }
        
            const response = await client.create(orderObject)
            console.log("order created in sanity",response)
            return response
        }   
        catch(error)
        {
            console.log("error created order in sanity",error)
            throw error
        }
    }
export default async function Check(cartData:Clothes[], customerInformation:Customer) {
    try{
        const customer = await CreateCustomerInSanity(customerInformation)
        await CreateOrderInSanity(cartData,customer._id)
        console.log("check completed")
    }
    catch(error)
    {
        console.log("error created order and customer in sanity",error)
        throw error 
    }
}