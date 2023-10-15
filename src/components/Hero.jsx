import React from 'react'
import appMock from '../assets/appmock.png'
import vector from '../assets/Vector.svg'
import { motion } from 'framer-motion';

const Hero = () => {
  return (


    <div className='text-white text-center p-10 h-[450px] bg-[#003300] overflow-hidden'>
  <h2 className='font-semibold text-4xl md:text-6xl md:px-3 sm:text-3xl font-cabinet-grotesk'>
    Do More with <span className="inline-block ml-[-5px]">
      E-naira 
      <img src={vector} alt="" className='mx-auto w-[150px] ' /> 
      </span>
  </h2>

  <p className='sm:mx-4 text-md py-5 font-extralight text-gray-100 md:mx-11 leading-8'>
  Receive money from the diaspora conveniently, and swiftly  </p>

  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >  
{/* <motion.div
    initial={{ scale: 0, y: 100 }}
    animate={{ scale: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  > */}
    {/* md:w-52 md:h-82 */}
    <img src={appMock} className="mx-auto w-[350px] mt-2 md:mt-6" alt="hero image" />
  </motion.div>
</div>

    // CUT HERE
   
  )
}

export default Hero