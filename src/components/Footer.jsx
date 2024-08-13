import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className=' '>

       <div className=' bg-gradient-to-r px-0 from-[#131E24] to-[#2B201E] '>
        <div className='  text-white lg:container px-3 lg:px-0 3xl:px-32 '>
        <div className='lg:flex items-center  gap-20 py-20'>
            <div className='w-full'>
                <h1 className='font-bold lg:text-5xl text-3xl'>Subscribe our Newsletter and get all of our update
                </h1>

            </div>
            <div className='w-1/2 flex border bg-transparent lg:mt-0 mt-8 border-gray-400 rounded-full'>
  <input 
    className='rounded-full outline-none  px-5 bg-transparent 3xl:w-[99%] lg:w-[150%] w-[30rem] py-4 pr-16' 
    placeholder='Enter your Email' 
  />
  <button 
    className='  my-1  mr-1 bg-white rounded-full text-black px-4 py-2'
  >
    Submit
  </button>
</div>

            </div>
  <hr className='border border-gray-700'/>

        <div className='flex justify-between pt-10  pb-10'>

                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>Quick Links </h1>
                    <p className='text-white  mt-5 cursor-pointer'>Search</p>
                    <p className='text-white  mt-2 cursor-pointer'>Reviews</p>
                    <p className='text-white  mt-2 cursor-pointer'>About Us</p>
                    <p className='text-white  mt-2 cursor-pointer'>Privacy Policy</p>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>Info </h1>
                    <p className='text-white  mt-5 cursor-pointer'>Terms of Service</p>
                    <p className='text-white  mt-2 cursor-pointer'>Accessibility Statement</p>
                    <p className='text-white  mt-2 cursor-pointer'>Cookie Policy</p>
                    <p className='text-white  mt-2 cursor-pointer'>Contact Information</p>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>About Policies </h1>
                    <p className='text-white  mt-5 cursor-pointer'>About Us</p>
                    <p className='text-white  mt-2 cursor-pointer'>FAQ</p>
                    <p className='text-white  mt-2 cursor-pointer'>Shipping Information</p>
                    <p className='text-white  mt-2 cursor-pointer'>Customer Support</p>
                    <p className='text-white  mt-2 cursor-pointer'>Contact Us</p>
                    <p className='text-white  mt-2 cursor-pointer'>Private Policy</p>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>New Arrivals </h1>
                    <p className='text-white  mt-5 cursor-pointer'>Best Sellers</p>
                    <p className='text-white  mt-2 cursor-pointer'>Sale Items</p>
                    <p className='text-white  mt-2 cursor-pointer'>Size Guide</p>
                    <p className='text-white  mt-2 cursor-pointer'>Store Locator</p>
                    </div>
                    <div>
                    <h1 className='font-semibold text-xl'>Contact Info </h1>

                    <p className='text-sm mt-2'> 70 Washington Square South, New <br/> York, NY 10012, United States </p> 
                    <p className='mt-4'>+12345 678 910</p> 
                    <p>+12345 678 109</p> 
                    <div className='flex my-5 text-4xl gap-6'>
                    <FaFacebookF className='cursor-pointer  p-2 border  border-gray-400 rounded-full' /> 
                    <FaInstagram className='cursor-pointer p-2 border border-gray-400 rounded-full' /> 
                    <FaXTwitter className='cursor-pointer p-2 border border-gray-400 rounded-full' /> 
                    <FaLinkedin className='cursor-pointer p-2 border border-gray-400 rounded-full' /> 
            </div>
                                </div>
        </div>
        </div>
        <div className='lg:flex lg:container px-[2rem]  text-white justify-between py-8' >
            <div className='hidden lg:block' >

@2024 Ecommerce Collection. All Rights Reserved

Privacy Policy | Terms & Conditions

</div>
<div className=''>Designed & Developed By <span className='font-semibold lg:font-normal'>SysQube Technology</span>
    </div>
    </div>
    </div>
    </div>
    </>

  )
}

export default Footer
