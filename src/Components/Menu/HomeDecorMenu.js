import data from "../../data";



function HomeMenuItem() {
    return(
     <div className='flex space-x-[40%]   w-full'>
     <div>
         {
             <>
                 <div className='my-4'>
                     <p className='font-bold'>Home Decor</p>
                     {data.Home_Decor.Decor.map((item, index) => {
                         return (
                             <div key={index}>
                                 <p className='py-2'>{item}</p>
                             </div>
                         )
                     })
                     }
                 </div>
                     
                     <p className="font-bold">Rugs</p>
                 <div className='my-4'>
                     <p className='font-bold'>Furniture</p>
                     {data.Home_Decor.Furniture.map((item, index) => {
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
             {data.Home_Decor.others.Sub_cat1.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>

         <div className='my-4 '>
            <p className="font-bold">Kitchen</p>
             {data.Home_Decor.others.Kitchen.map((item, index) => {
                 return (
                     <div key={index}>
                         <p className='py-2'>{item}</p>
                     </div>
                 )
             })
             }
         </div>

         <div className='my-4 font-bold'>
             {data.Home_Decor.others.Sub_cat2.map((item, index) => {
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

 
 export {HomeMenuItem}