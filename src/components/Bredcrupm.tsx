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
          
            <BreadcrumbLink></BreadcrumbLink>
          
          </BreadcrumbItem>
         
         
        
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    )
  }
  