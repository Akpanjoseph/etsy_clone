import React from 'react';
import { FiHeart } from "react-icons/fi";

const Category = () => {
    return (
        <div className='my-10 container mx-auto'>

            <div> <h1 className='font-bold text-center text-xl lg:text-left lg:text-2xl'>Discover unique hand-pack items</h1></div>


            <div>
                {/* navs  */}
                <div className='flex justify-between text-2xl border-b-2 my-10 border-gray-300'>
                    <p className='border-b-2 border-gray-800 px-4'>Modern farmhouse</p>
                    <p className='hover:border-b-2 hover:border-gray-800 px-4'>Boho Decor</p>
                    <p className='hover:border-b-2 hover:border-gray-800 px-4 hidden lg:block'>Eclectic Decor</p>
                    <p className='hover:border-b-2 hover:border-gray-800 px-4 hidden lg:block'>Minimalist</p>
                </div>

                <div className='flex p-2 lg:space-x-4 space-y-6 flex-col-reverse lg:flex-row'>

                    <div>

                        <div className=''>
                            <img className='rounded-md' src={require('../assert/m_funiture.jpg')} alt="" width={"410px"} />
                        </div>

                        <div className='bg-white -mt-[22%] ml-[25%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block  '>
                            <FiHeart />
                        </div>

                        <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                            <span >USD 36.00</span>
                        </div>
                    </div>



                    <div className='flex lg:flex-col space-x-2'>
                        <div>
                            <div>
                                <img className="rounded-md pb-2" src={require('../assert/pillow.jpg')} alt="" width={"210px"} />
                            </div>

                            <div className='bg-white -mt-[12%] ml-[12%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block  '>
                                <FiHeart />
                            </div>

                            <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                                <span >USD 52.00</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img className='rounded-md' src={require('../assert/hanger.jpg')} alt="" width={"210px"} />
                            </div>

                            <div className='bg-white -mt-[12%] ml-[12%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block  '>
                                <FiHeart />
                            </div>
                            <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                                <span >USD 46.99</span>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div>
                            <img className='rounded-md' src={require('../assert/ecletic.jpg')} alt="" width={"410px"} />
                        </div>

                        <div className='bg-white -mt-[22%] ml-[25%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block '>
                            <FiHeart />
                        </div>

                        <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                            <span >USD 25.97</span>
                        </div>
                    </div>



                    <div className='flex lg:flex-col space-x-2'>
                        <div>
                            <div>
                                <img className="rounded-md pb-2" src={require('../assert/minimalist1.jpg')} alt="" width={"210px"} />
                            </div>

                            <div className='bg-white -mt-[12%] ml-[12%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block  '>
                                <FiHeart />
                            </div>

                            <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                                <span >USD 122.00</span>
                            </div>
                        </div>


                        <div>
                            <div>
                                <img className='rounded-md' src={require('../assert/minimalist2.jpg')} alt="" width={"210px"} />
                            </div>

                            <div className='bg-white -mt-[12%] ml-[12%] p-3 absolute shadow-2xl rounded-full font-bold hidden lg:block  '>
                                <FiHeart />
                            </div>

                            <div className='bg-white -mt-[10%] lg:-mt-[2.5%] ml-2 px-2 absolute shadow-2xl rounded-full font-bold '>
                                <span >USD 18.00</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Category;
