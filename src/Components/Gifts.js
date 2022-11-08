import React from 'react';

const Gifts = () => {
    return (
        <div className='my-20 container mx-auto'>
            <div> <h1 className='font-bold text-center text-xl lg:text-left lg:text-2xl'>Shop our popular gift categories</h1></div>

            <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-4 justify-center ' >

                <div className='flex space-x-2 lg:space-x-4 ' >
                    <div className='lg:border-2 border-gray-800 text-center font-bold text-lg rounded-md shadow-lg w-[50%] '>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/anniversary_gifts.jpg')} alt="" />
                        <p className='py-8'>Anniversary gifts</p>
                    </div>


                    <div className=' text-center font-bold text-lg rounded-md shadow-md hover:shadow-lg w-[50%] '>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/gifts_for_him.jpg')} alt="" />
                        <p className='py-8'>Gifts for him</p>
                    </div>
                </div>


                <div className='flex space-x-2 lg:space-x-4' >

                    <div className='text-center font-bold text-lg rounded-md shadow-md hover:shadow-lg w-[50%]'>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/gifts_for_her.jpg')} alt="" />
                        <p className='py-8'>Gifts for her</p>
                    </div>

                    <div className='text-center font-bold text-lg rounded-md shadow-md hover:shadow-lg w-[50%]'>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/personalized-gift.jpg')} alt="" />
                        <p className='py-8'>Personalized gifts ideas</p>
                    </div>
                </div>



                <div className='flex space-x-2 lg:space-x-4' >

                    <div className='text-center font-bold text-lg rounded-md shadow-md hover:shadow-lg w-[50%] lg:w-[100%]'>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/wedding_gifts.jpg')} alt="" />
                        <p className='py-8'>Wedding gifts</p>
                    </div>

                    <div className='text-center font-bold text-lg rounded-md shadow-md hover:shadow-lg w-[50%]  lg:hidden'>
                        <img className='rounded-md w-[200px] lg:w-[270px]' src={require('../assert/wine.jpg')} alt="" />
                        <p className='py-8'>Housewarming gifts</p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Gifts;
