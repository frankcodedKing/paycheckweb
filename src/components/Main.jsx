import React from 'react';
import appMock1 from '../assets/appmock1.png';
import hand from '../assets/hand.png';
import { FaCheck } from 'react-icons/fa'
import { HiOutlineArrowCircleRight } from 'react-icons/hi'


function Main() {


    return (

        <div className='w-full bg-white'>



            {/* // SECTI0N one */}

            <div className='px-10 py-8 pt-8'>

                <h1 className='text-3xl font-bold sm:text-4xl'>
                    Our Offerings
                </h1>

                <p className="mt-4 text-gray-900">
                Paycheck is a remittance company that leverages Blockchain 
                Technology to provide digital financial solutions, foster the 
                digital economy and ultimately empower Nigerians through the e-naira.
                </p>
                
                <br />
                <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">
                    <div className='shadow-lg bg-gray-100  rounded-xl'>
                        <img
                            src={appMock1}
                            alt=""
                            className='w-[200px] mx-auto my-4 flex items-center justify-center'
                        />
                    </div>

                    <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
                        {/* <h1 className='ml-4 font-semibold text-xl py-4'>Seamless Currency Swaps </h1> */}

                        <ul>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> <p> <strong> Minimal transactions fees saving cost for your business</strong> <br /> Transaction fees are minimal and fixed regardless of the number of transactions you make per day. No additional costs.</p></li>

                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> <p> <strong>Fast transactions</strong> <br /> Send and receive payments from your loved ones and Business partners in the diaspora instantly. </p></li>

                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> <p> <strong>Secure and transparent transactions
                            </strong> <br /> Transactions are very secure and transparent as it is built on the Blockchain Technology.
                            </p></li>

                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> <p> <strong>Access your funds 24/7 by yourself
                            </strong> <br /> You have full control over your money. No system downtime. Have a seamless e-naira experience
                            </p></li>


                        </ul>

                        <div className="mx-auto mt-8">
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


                    </div>
                </div>
            </div>

            {/* // SECTI0N TWO */}

            <div className='w-full bg-white px-10 py-8'>

                <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">

                    <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
                        <h1 className='ml-4 font-semibold text-xl py-4'>With Paycheck, you can
                        </h1>
                        <ul>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Go cashless and digital</li>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Expand your business</li>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span>Participate in the digital economy with ease
                            </li>
                        </ul>
                    </div>

                    <div className='shadow-lg bg-gray-100 rounded-xl'>
                        <img src={appMock1} alt="" className='w-[200px] mx-auto my-4' />
                    </div>
                </div>
            </div>


            {/* // SECTION THREE */}

            <div className='w-full bg-white px-10 py-8'>

                <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">
                    <div className='shadow-lg bg-gray-100 rounded-xl'>
                        <img src={appMock1} alt="" className='w-[200px] mx-auto my-4' />
                    </div>

                    <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
                        {/* <h1 className='ml-4 font-semibold text-xl py-4'>Seamless Currency Swaps </h1> */}
                        <ul>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span>Set up your account with ease for free</li>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Access your account from anywhere in the world.
                            </li>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Receive payments from the diaspora
                            </li>
                            <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span>Verify payments with ease</li>


                        </ul>

                    </div>
                </div>
            </div>


            {/* DISCOVER AI */}
            {/* DISCOVER AI */}
            {/* DISCOVER AI */}

            <div class="w-full py-8 px-4 bg-white flex justify-center items-center">
                <div class="text-left bg-green-400 bg-gradient-to-b from-green-500
   to-green-950 rounded-xl w-[1000px] h-80 relative z-0">
                    <div class="italic text-bold bd-red-100 text-right font-serif">
                        <img src={hand} className='w-[500px]' style={{ display: 'inline' }} alt="" />

                    </div>
                    <div class="absolute inset-0 flex justify-center i
    tems-center z-10">

                        <div class="font-light my-auto text-white p-4 pr-24">
                            <h1 className='font-semibold text-2xl text-left py-2'>
                                Discover the possibilities of the E-naira </h1>
                            <p>
                                Interested in learning more?
                            </p>

                            <br />

                            <button>


                                <a href="/signup"
                                    className="block w-full rounded bg-white text-black px-6 py-3 text-sm font-medium  hover:scale-105 duration-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"

                                >
                                    <span className='flex items-center m-auto'> Join waitlist
                                        <i className='ml-2 mt-1'>
                                            <HiOutlineArrowCircleRight />
                                        </i>
                                    </span>
                                </a>

                            </button>
                        </div>
                    </div>
                </div>
            </div>





            {/* HAND HERE */}






            {/* HAND HERE */}


            {/* // SECTION FAQS */}

            <div className='' id='faqs'>

                <div className="max-w-[1240px] mx-auto">


                    <div className='my-auto flex flex-col md:px-8 justify-center'>
                        <h1 className='font-semibold text-xl py-2'>Frequently Asked Questions</h1>
                        <div className='text-left px-4 md:px-48'>
                            {/* <li className='flex shadow-sm p-4 py-6'>
                 
                  </li> */}

                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            What is Paycheck?
                                        </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        Paycheck is a digital solution created to solve the remittance challenges in Nigeria
                                        with the aim of helping you to send and receive money from the diaspora.
                                        Receiving money from the diaspora is a herculean task for Nigerians.
                                        Paycheck simplifies the remittance process and enables you to make and
                                        receive payments and transactions comfortably with lightning speed.
                                    </p>
                                </details>

                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            Is it a mobile app?
                                        </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        Yes, it is but a web version is available. For now, the mobile app is in its Beta version. Join our waitlist to know when it is released to the public.
                                    </p>
                                </details>

                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            How secure are transactions on Paycheck?                </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        Transactions are not only secure but transparent as it is built on the Blockchain Technology.

                                    </p>
                                </details>

                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            What can I do with Paycheck?
                                        </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        You can receive money from your loved ones, acquaintances, business partners and supporters/donors in the diaspora conveniently and without additional costs.
                                    </p>
                                </details>

                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            Where does e-naira fit in, in all of these?
                                        </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        The financial landscape is constantly evolving and adjusting to the needs of time.
                                        The need to go digital, cashless and global is very critical for individuals and businesses.
                                        In addition, the traditional payment systems have failed to provide this need sufficiently hence
                                        the need for digital currencies like the e-naira. The e-naira has the potential to change the way
                                        transactions are made in the economy. Not only does it address the challenges associated with traditional
                                        payment systems, it is the gateway to a future where financial transactions are secure,efficient and transparent.
                                        At Paycheck, we provide the technology that makes the whole process of using e-naira to make payments, send money abroad easy, fast and convenient.

                                    </p>
                                </details>

                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                    >
                                        <h2 className="font-medium">
                                            When will the app be launched?
                                        </h2>

                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                                        We are seriously working behind the scenes to launch the app soon. The unveiling will happen soon. Join our waitlist to get recent and authentic updates.
                                    </p>
                                </details>





                            </div>

                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

            <br />


        </div>
    )
}

export default Main