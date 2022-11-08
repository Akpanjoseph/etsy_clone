import React from 'react';

const Discount = () => {
    return (
        <div className='mt-[15%] container mx-auto'>
        <p className='text-center py-2 font-bold text-lg lg:text-left'>Recently viewed & more</p>


        <div className='flex flex-col space-y-2 lg:space-x-10 lg:flex-row '>
            
            <div>
                <div>
                    <img src={require('../assert/img1.jpg')} alt="" className='w-full h-[250px]  relative lg:rounded-lg lg:w-[250px] lg:h-[150px]' />
                </div>
                <div className='bg-white -mt-[10%]  ml-2 px-2 absolute shadow-2xl rounded-full font-bold lg:-mt-[2.5%]  '>
                    <span >USD 47.49</span>
                </div>
            </div>


            <div>
                <div>
                    <img src={require('../assert/img2.jpg')} alt="" className='w-full h-[250px]  relative lg:rounded-lg lg:w-[250px] lg:h-[150px]' />
                </div>
                <div className='bg-white -mt-[10%]  ml-2 px-2 absolute shadow-2xl rounded-full font-bold lg:-mt-[2.5%]   '>
                    <span className='font-bold ' >USD 18.72</span> <del>USD 37.45</del>
                </div>
            </div>

            <div>
                <div>
                    <img src={require('../assert/img3.jpg')} alt="" className='w-full h-[250px]  relative lg:rounded-lg lg:w-[250px] lg:h-[150px]' />
                </div>
                <div className='bg-white -mt-[10%]  ml-2 px-2 absolute shadow-2xl rounded-full font-bold lg:-mt-[2.5%]   '>
                    <span className=' font-bold' >USD 31.45 </span> <del>USD 37.00</del>
                </div>
            </div>

            <div>
                <div>
                    <img src={require('../assert/img4.jpg')} alt="" className='w-full h-[250px]  relative lg:rounded-lg lg:w-[250px] lg:h-[150px]' />
                </div>
                <div className='bg-white -mt-[10%]  ml-2 px-2 absolute shadow-2xl rounded-full font-bold lg:-mt-[2.5%]    '>
                <span className=' font-bold' >USD 19.36 </span> <del>USD 38.72</del>
                </div>
            </div>

            <div>
                <div>
                    <img src={require('../assert/img5.jpg')} alt="" className='w-full h-[250px]  relative lg:rounded-lg lg:w-[250px] lg:h-[150px]' />
                </div>
                <div className='bg-white -mt-[10%]  ml-2 px-2 absolute shadow-2xl rounded-full font-bold lg:-mt-[2.5%]   '>
                <span className=' font-bold' >USD 10.00 </span> <del>USD 25.00</del>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Discount;
