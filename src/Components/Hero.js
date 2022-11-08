import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#ddebe3] py-10 mt-5 mb-[10em]  lg:mb-[0em]  '>

        <div className=' text-center '>
            <p className='text-lg mx-4 lg:text-3xl pb-6'>Find things you'll love. Support independent sellers. Only on Etsy.</p>
        </div>

        <div className='flex flex-wrap justify-center space-x-5 lg:space-x-6 lg:flex-row '>

            <div className=' lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black'>
                <img src={require('../assert/gift.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1] ' />
                <p className='pt-2 hidden lg:block'>Personalized Gifts</p>
            </div>

            <div className=' lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black text-center'>
                <img src={require('../assert/home_decor.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1]' />
                <p className='pt-2 hidden lg:block'>Home Decor</p>
            </div>



            <div className=' lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black text-center'>
                <img src={require('../assert/bangle1.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1]' />
                <p className='pt-2 hidden lg:block'>Clothing</p>
            </div>

            <div className=' -mb-[20em] py-4 lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black text-center'>
                <img src={require('../assert/cloth1.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1]' />
                <p className='pt-2 hidden lg:block'>Jewelry</p>
            </div>



            <div className='-mb-[20em] py-4 lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black text-center'>
                <img src={require('../assert/funiture.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1]' />
                <p className='pt-2 hidden lg:block'>Furniture</p>
            </div>


            <div className='-mb-[20em] py-4 lg:-mb-[10em] font-semibold hover:lg:border-b-2 border-black text-center'>
                <img src={require('../assert/home_decor2.jpg')} alt="" className='rounded-full  w-[100px] transition delay-5 duration-2 ease-in-out lg:w-[120px]  hover:lg:scale-[1.1]' />
                <p className='pt-2 hidden lg:block'>On Sale</p>
            </div>

        </div>
 
    </div>
           );
}

export default Hero;
