import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import {GiWorld} from 'react-icons/gi'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <div className='bg-[#2F466C]'>
                <div className='mx-auto container py-10'>

                    <div className='flex flex-col justify-between mx-8 text-white lg:flex-row'>
                        <div>
                            <h1 className='font-bold'>Shop</h1>
                            <p className='py-2 hover:underline hidden lg:block'> Gift cards</p>
                            <p className='py-2 hover:underline hidden lg:block'> Sitemap</p>
                            <p className='py-2 hover:underline hidden lg:block'> Etsy blog</p>
                            <p className='py-2 hover:underline hidden lg:block'>   Etsy United Kingdom</p>
                            <p className='py-2 hover:underline hidden lg:block'>Etsy Germany</p>
                            <p className='py-2 hover:underline hidden lg:block'> Etsy Canada</p>
                        </div>

                        <div>
                            <h1 className='font-bold'>Sell</h1>
                            <p className='py-2 hover:underline hidden lg:block'>Sell on Etsy</p>
                            <p className='py-2 hover:underline hidden lg:block'>Teams</p>
                            <p className='py-2 hover:underline hidden lg:block'>Forums</p>
                            <p className='py-2 hover:underline hidden lg:block'>Affiliates</p>
                        </div>

                        <div>
                            <h1 className='font-bold'>About</h1>
                            <p className='py-2 hover:underline hidden lg:block'>Etsy, Inc.</p>
                            <p className='py-2 hover:underline hidden lg:block'>Policies</p>
                            <p className='py-2 hover:underline hidden lg:block'>Investors</p>
                            <p className='py-2 hover:underline hidden lg:block'>Careers</p>
                            <p className='py-2 hover:underline hidden lg:block'>Press</p>
                            <p className='py-2 hover:underline hidden lg:block'>Impact</p>
                            <p className='py-2 hover:underline hidden lg:block'>Legal imprint</p>
                        </div>

                        <div>
                            <h1 className='font-bold'>Help</h1>
                            <p className='py-2 hover:underline hidden lg:block'>Help Center</p>
                            <p className='py-2 hover:underline hidden lg:block'>Trust and safety</p>
                            <p className='py-2 hover:underline hidden lg:block'>Privacy settings</p>

                            {/* social  */}
                            <div className='mt-12'>
                                <p className='border-2 border-white px-2 py-2 rounded-full text-center lg:px-4'>Download the Esty App</p>

                                <div className='flex space-x-8 mt-5 justify-center lg:space-x-4'>

                                <div className=''>
                                        <BsInstagram size={30}/>
                                    </div>

                                    <div className=''>
                                        <BsFacebook size={30}/>
                                    </div>

                                    <div className=''>
                                        <BsPinterest size={30}/>
                                    </div>

                                    <div className=''>
                                        <BsTwitter size={30}/>
                                    </div>

                                    <div className=''>
                                        <BsYoutube size={30}/>
                                    </div>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='bg-[#232347] py-4 px-4'>
                <div className='text-white mx-auto container flex space-y-2 flex-col justify-center items-center lg:justify-between text-xs'>

                    <div className='flex space-x-4 font-semibold'>
                        <span className=''><GiWorld size={20}/></span>
                        <p className='border-r-2 border-white px-2'>Nigeria</p>
                        <p className='border-r-2 border-white px-2'>English (US)</p>
                        <p >$ (USD)</p>
                    </div>

                    <div className='flex space-x-2 lg:space-x-4'>
                        <p> © 2022 Etsy, Inc.</p>
                        <p className='underline'>Terms of Use</p>
                        <p className='underline'>Privacy </p>
                        <p className='underline'>Interest-based ads</p>
                        <p className='underline'>Regions</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;
