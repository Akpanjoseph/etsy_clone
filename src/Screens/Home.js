import React, { useState } from 'react';
import Discount from '../Components/Discount';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Category from '../Components/Category';
import Navbar from '../Components/Navbar';
import Gifts from '../Components/Gifts';
import About from '../Components/About';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';


// const menu_list=

const Home = () => {


    return (
        <div>
            <Header />

            <Navbar />

            <Hero />

            <Discount/>

            <Category/>

            <Gifts/>

            <About/>

            <ContactUs/>

            <Footer/>

        </div>
    );
}

export default Home;
