import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className='container mx-auto py-4 flex md:justify-evenly  px-2 space-x-2'>
            {/* logo */}
            <div id='logo'>
                <p className='text-red-500 text-4xl  font-serif'>Etsy</p>
            </div>

            {/* search box */}
            <div className='border-2 md:w-[70%] flex space-x-3 rounded-l-full rounded-r-full bg-gray-200 ' >
                <input type="search" className='w-[93%] h-full rounded-l-full outline-none px-4 bg-transparent focus:bg-white  ' placeholder='Search for anything' id='searchbar' />

                <div className='mt-1'>
                   <button type='submit'> <AiOutlineSearch size={25} /></button>
                </div>
            </div>


            <div className='mt-2' id='signup'>
                <p className='hidden md:block'>sign in </p>
                <AiOutlineUser className='md:hidden' size={30}/>
            </div>

            <div className='flex space-x-4 mt-2' id='cart-sect'>
                <AiOutlineHeart  size={30} className='hidden md:block'/>
                <AiOutlineShoppingCart size={30}/>
            </div>
        </header>
    );
}

export default Header;
