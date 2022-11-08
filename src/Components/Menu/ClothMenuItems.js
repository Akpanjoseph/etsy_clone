import data from "../../data";


function WomenMenu() {
    return (
        <div className='flex space-x-[40%]   w-full'>
            <div>
                {
                    <>
                        <div className='my-4'>
                            <p className='font-bold'>Women's Clothing</p>
                            {data.Clothing.Women.items.map((item, index) => {
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
                <div className='my-4'>
                    <p className='font-bold'>Women's Shoes</p>
                    {data.Clothing.Women.others.map((item, index) => {
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

function MenMenu() {
    return (
        <div className='flex space-x-[40%]   w-full'>
            <div>
                {
                    <>
                        <div className='my-4'>
                            <p className='font-bold'>Men's Clothing</p>
                            {data.Clothing.Men.items.map((item, index) => {
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
                <div className='my-4'>
                    <p className='font-bold'>Men's Shoes</p>
                    {data.Clothing.Men.others.map((item, index) => {
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


function KidsMenu() {
    return (
        <div className='flex space-x-[40%]   w-full'>
            <div>
                {
                    <>
                        <div className='my-4'>
                            <p className='font-bold'>Baby Girl's Clothing</p>
                            {data.Clothing.Baby_kids.baby_girl.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='py-2'>{item}</p>
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className='my-4'>
                            <p className='font-bold'>Girl's Clothing</p>
                            {data.Clothing.Baby_kids.girls_cloth.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='py-2'>{item}</p>
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className='my-4'>
                            <p className='font-bold'>Baby Boy's Clothing</p>
                            {data.Clothing.Baby_kids.baby_boy.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='py-2'>{item}</p>
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className='my-4'>
                            <p className='font-bold'>Boy's Clothing</p>
                            {data.Clothing.Baby_kids.boys_cloth.map((item, index) => {
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
                <div className='my-4'>
                    <p className='font-bold'>Girl's Shoes</p>
                    {data.Clothing.Baby_kids.others.girls_shoes.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className='py-2'>{item}</p>
                            </div>
                        )
                    })
                    }
                </div>


                <div className='my-4'>
                    <p className='font-bold'>Boy's Shoes</p>
                    {data.Clothing.Baby_kids.others.boys_shoes.map((item, index) => {
                        return (
                            <div key={index}>
                                <p className='py-2'>{item}</p>
                            </div>
                        )
                    })
                    }
                </div>



                <div className='my-4 font-bold'>
                {data.Clothing.Baby_kids.others.others.map((item, index) => {
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


function BagsMenu() {
    return (
        <div className='flex space-x-[40%]   w-full'>
            <div>
                {
                    <>
                        <div className='my-4'>
                            <p className='font-bold'>Backpacks</p>
                        </div>


                        <div className='my-4'>
                            <p className='font-bold'>HandBags</p>
                            {data.Clothing.Bags_and_purse.handbags.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='py-2'>{item}</p>
                                    </div>
                                )
                            })
                            }
                        </div>

                        <div className='my-4'>
                            <p className='font-bold'>Diaper Bags</p>
                        </div>

                    </>
                }
            </div>


            <div>
                <div className='my-4 font-bold'>
                  
                    {data.Clothing.Bags_and_purse.others.map((item, index) => {
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


export { WomenMenu, MenMenu, KidsMenu,BagsMenu }