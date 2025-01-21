import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb"
  
  export function BreadcrumbDemo() {
    return (
    <div className=" pl-6 pt-6 text-bold text-2xl">
    
    
          <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
          
            <BreadcrumbLink href="/" className="pl-6 mt-1 text-bold text-[20px]">Home</BreadcrumbLink>
            <BreadcrumbLink href="/clothes" className="pl-6 mt-1 text-bold text-[20px]">clothes</BreadcrumbLink>
            <BreadcrumbLink href="/detail" className="pl-6 mt-1 text-bold text-[20px]">carts</BreadcrumbLink>
          </BreadcrumbItem>
         
         
        
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    )
  }
  