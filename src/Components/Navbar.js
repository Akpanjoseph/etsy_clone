import React, { useState, } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineRight } from "react-icons/ai";


import { AccessoriesMenu, BagMenu, NecklacesMenu, RingsMenu, EarringMenu, BraceletsMenu, BodyJewelryMenu } from './Menu/AccessoriesMenuItems';

import { KidsMenu, MenMenu, WomenMenu, BagsMenu } from './Menu/ClothMenuItems';
import { HomeMenuItem } from './Menu/HomeDecorMenu';







const Navbar = () => {



    const [Jewelry, setJewelry] = useState(false)
    const [Clothing, setClothing] = useState(false)
    const [Home, setHome] = useState(false)
    const [Wedding, setWedding] = useState(false)
    const [Toys, setToys] = useState(false)
    const [Arts, setArts] = useState(false)
    const [Tools, setTools] = useState(false)
    const [currentSubMenu, setcurrentSubMenu] = useState()

    // currentSubMenu = <AccessoriesMenu/>



    function JewelryMenu() {
        setClothing(false)
        setHome(false)
        setWedding(false)
        setToys(false)
        setArts(false)
        setTools(false)
        setJewelry(true)
        setcurrentSubMenu(<AccessoriesMenu />)
    }
    function clothingMenu() {
        setJewelry(false)
        setHome(false)
        setArts(false)
        setWedding(false)
        setToys(false)
        setTools(false)
        setClothing(true)

    }
    function HomeMenu() {
        setJewelry(false)
        setClothing(false)
        setTools(false)
        setArts(false)
        setWedding(false)
        setToys(false)
        setHome(true)

    }
    function WeddingMenu() {
        setJewelry(false)
        setClothing(false)
        setTools(false)
        setArts(false)
        setHome(false)
        setToys(false)
        setWedding(true)


    }
    function ToysMenu() {
        setJewelry(false)
        setClothing(false)
        setTools(false)
        setArts(false)
        setWedding(false)
        setHome(false)
        setToys(true)


    }
    function ArtMenu() {
        setJewelry(false)
        setClothing(false)
        setTools(false)
        setWedding(false)
        setHome(false)
        setToys(false)
        setArts(true)

    }
    function ToolsMenu() {
        setJewelry(false)
        setClothing(false)
        setWedding(false)
        setHome(false)
        setToys(false)
        setArts(false)
        setTools(true)

    }

    return (
        <>
            <nav>
                <ul className=' justify-evenly hidden md:flex'>
                    <li onMouseOver={JewelryMenu} className='hover:border-b-2 border-black ' >Jewelry & Accessories</li>
                    <li onMouseOver={clothingMenu} className='hover:border-b-2 border-black '>Clothing & Shoes</li>
                    <li onMouseOver={HomeMenu} className='hover:border-b-2 border-black '>Home & Living</li>
                    <li onMouseOver={WeddingMenu} className='hover:border-b-2 border-black '>Wedding & Party</li>
                    <li onMouseOver={ToysMenu} className='hover:border-b-2 border-black '>Toys & Entertainment</li>
                    <li onMouseOver={ArtMenu} className='hover:border-b-2 border-black '>Art & Collectibles</li>
                    <li onMouseOver={ToolsMenu} className='hover:border-b-2 border-black '>Craft Supplies & Tools</li>
                    <li>Vintage</li>
                </ul>


                {/* Accessories */}
                {
                    Jewelry && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 ' onMouseLeave={()=>setJewelry(false)}>

                            {/* nav container */}
                            <div className='flex  space-x-4'>
                                {/* nav side 1 */}
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    {/* menu title */}
                                    <div className='my-2'>
                                        <p className='flex px-4'  >All Jewelry  & Accessories  <span className='pt-[6px] px-1'><BsArrowRight /></span> </p>
                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<AccessoriesMenu />)} >Accessories <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagMenu />)}>Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<NecklacesMenu />)} >Necklaces <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<RingsMenu />)} >Rings <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<EarringMenu />)} >Earrings <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BraceletsMenu />)}>Bracelets <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BodyJewelryMenu />)}>Body Jewelry <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>



                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }





                {/* Clothing */}

                {
                    Clothing && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setClothing(false)}>
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'> All Clothing & Shoes <span className='pt-[6px] px-1'><BsArrowRight /></span></p>
                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<WomenMenu />)} >Women's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Men's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Kids' & Baby <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagsMenu />)} >Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }


                {/* Home */}
                {
                    Home && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setHome(false)}>
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'>All Home & Living <span className='pt-[6px] px-1'><BsArrowRight /></span></p>
                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<HomeMenuItem/>)} >Home<span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Bath & Beauty <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Pet Supplies <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }


                {
                    Wedding && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setWedding(false)}>
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'>Wedding <span className='pt-[6px] px-1'><BsArrowRight /></span></p>

                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<WomenMenu />)} >Women's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Men's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Kids' & Baby <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagsMenu />)} >Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }


                {
                    Toys && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setToys(false)}>
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'>Toys <span className='pt-[6px] px-1'><BsArrowRight /></span></p>
                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<WomenMenu />)} >Women's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Men's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Kids' & Baby <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagsMenu />)} >Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }



                {
                    Arts && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setArts(false)}>
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'>Arts <span className='pt-[6px] px-1'><BsArrowRight /></span></p>

                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<WomenMenu />)} >Women's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Men's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Kids' & Baby <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagsMenu />)} >Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    Tools && (
                        <div className='bg-white shadow-md  py-4 w-[98%] z-[100] absolute mx-4 px-4' onMouseLeave={()=>setTools(false)} >
                            <div className='flex  space-x-4'>
                                <div className='w-[30%] border-r-2 border-gray-300 '>

                                    <div className='my-2'>
                                        <p className='flex'>Tools <span className='pt-[6px] px-1'><BsArrowRight /></span></p>

                                    </div>

                                    <div >
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<WomenMenu />)} >Women's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<MenMenu />)}>Men's <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<KidsMenu />)} >Kids' & Baby <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>

                                    <div>
                                        <p className='flex justify-between hover:bg-slate-300 py-3 w-full pl-4' onMouseOver={() => setcurrentSubMenu(<BagsMenu />)} >Bags & Purses <span className='pt-[6px] px-1'><AiOutlineRight /></span></p>
                                    </div>
                                </div>


                                {/* nav sub menu*/}
                                <div className='w-full'>
                                    {currentSubMenu}

                                </div>
                            </div>
                        </div>
                    )
                }
            </nav>



        </>
    );
}

export default Navbar;
