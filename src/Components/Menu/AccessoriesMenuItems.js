import data from "../../data";


function AccessoriesMenu() {
   return(
    <div className='flex space-x-[40%]   w-full'>
    <div>
        {
            <>
                <div className='my-4'>
                    <p className='font-bold'>Hats & Caps</p>
                    {data.Accessories.accessories.hats.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className='py-2'>{item}</p>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='my-4'>
                    <p className='font-bold'>Hair Accessories</p>
                    {data.Accessories.accessories.hair.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className='py-2'>{item}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        }
    </div>


    <div>
        <div className='my-4 font-bold'>
            {data.Accessories.accessories.others.map((item, index) => {
                return (
                    <div key={index}>
                        <p className='py-2'>{item}</p>
                    </div>
                )
            })
            }
        </div>
    </div>
</div>
   )
}



function BagMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4'>
                     <p className='font-bold'>Backpacks</p>
                     {data.Accessories.Bags.backpacks.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>
 
                 <div className='my-4'>
                     <p className='font-bold'>HandBags</p>
                     {data.Accessories.Bags.handbags.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

                 <div className='my-4'>
                     <p className='font-bold'>Diaper</p>
                     {data.Accessories.Bags.Diaper.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>
             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 font-bold'>
             {data.Accessories.Bags.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }
 


 function NecklacesMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4 font-bold'>
                     {data.Accessories.Necklaces.items.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 font-bold'>
             {data.Accessories.Necklaces.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }


 
 function RingsMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4 font-bold'>
                     {data.Accessories.Rings.items.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 '>
            <p className="font-bold">Wedding & Engagement</p>
             {data.Accessories.Rings.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }




 function EarringMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4 font-bold'>
                     {data.Accessories.Earrings.items.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 font-bold '>
      
             {data.Accessories.Earrings.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }


 function BraceletsMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4 font-bold'>
                     {data.Accessories.Bracelets.items.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 font-bold '>
      
             {data.Accessories.Bracelets.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }



 function BodyJewelryMenu() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4 font-bold'>
                     {data.Accessories.BodyJewelry.items.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>

             </>
         }
     </div>
 
 
     <div>
         <div className='my-4 font-bold '>
      
             {data.Accessories.BodyJewelry.others.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>
     </div>
 </div>
    )
 }

export {AccessoriesMenu,BagMenu,NecklacesMenu,RingsMenu,EarringMenu,BraceletsMenu,BodyJewelryMenu}