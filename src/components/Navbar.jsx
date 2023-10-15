import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import Logo from "../assets/Rectangle.png";


const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav)
    }
    return (

        <div className=''>

            <div className='flex justify-between items-center bg-[#003300] p-8 w-full h-14 text-white'>
                {/* Put logo here in image tag */}
                <div>
                    <img src={Logo} alt="paycheck logo" className='w-32 h-10' />

                </div>


                <div className='hidden md:flex'>

                    <ul className='flex mx-auto'>
                        <li className='p-4'>Company</li>
                        <li className='p-4'>Products</li>
                        <li className='p-4'>FAQ</li>
                    </ul>

                </div>

                <div className='hidden md:flex'>

                    <button>

                        <a href="/signup"
                            className="block w-full rounded bg-green-600 px-6 py-3 text-sm font-medium text-white hover:scale-105 duration-100 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                        >
                            <span className='flex items-center m-auto'> Join waitlist
                                <i className='ml-2 mt-1'>
                                    <HiOutlineArrowCircleRight />
                                </i>
                            </span>
                        </a>

                    </button>

                </div>

                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}

                </div>

                <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#003300] ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <img src={Logo} alt="paycheck logo" className='w-32 h-10 m-4' />

                    <ul className='px-2'>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>Products</li>
                        <li className='p-4 border-b border-gray-600'>FAQ</li>
                        <li className='p-4 border-gray-600'>


                            <button>

                                <a href="/signup"
                                    className="block w-full rounded bg-green-600 px-6 py-3 text-sm font-medium text-white hover:scale-105 duration-100 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                                >
                                    <span className='flex items-center m-auto'> Join waitlist
                                        <i className='ml-2 mt-1'>
                                            <HiOutlineArrowCircleRight />
                                        </i>
                                    </span>
                                </a>

                            </button>

                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar