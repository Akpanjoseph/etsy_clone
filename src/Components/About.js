import React from 'react';

const About = () => {
    return (
        <div className='bg-[#fdebd2] '>
            <div className=' container mx-auto py-20'>

                <div className='text-center' >
                    <p className='text-5xl pb-2'>What is Etsy?</p>
                    <p className='underline'>Read our wonderfully weird story</p>
                </div>


                <div className='flex flex-col mt-10 justify-between px-2 lg:space-x-4 w-full text-lg lg:flex-row'>

                    <div className='w-[100%] text-center lg:text-left lg:w-[40%]'>
                        <p className='font-bold text-3xl my-4'>A community doing good</p>
                        <p>
                            Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.

                            <abbr title="Your purchases on Etsy in 2020 generated nearly $4 billion in income for small businesses.
We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.
We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030."> Here are some of the ways we’re making a positive impact, together.</abbr>

                        </p>
                    </div>

                    <div className='w-[100%] text-center lg:text-left lg:w-[40%]'>
                        <p className='font-bold text-3xl my-4'>Support independent creators</p>
                        <p>
                            There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                        </p>
                    </div>

                    <div className='w-[100%] text-center lg:text-left lg:w-[40%]'>
                        <p className='font-bold text-3xl my-4'>Peace of mind</p>
                        <p>
                            Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                        </p>
                    </div>
                </div>


                <div className='text-center mt-20 font-bold text-2xl'>
                    <p>Have a question? Well, we’ve got some answers.</p>

                    <button className='border-2 rounded-full px-8 py-3 my-4 border-black hover:shadow-lg'>Go to Help Center</button>

                </div>

            </div>


        </div>
    );
}

export default About;
