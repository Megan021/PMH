import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
              <hr className='border-spacing-0 border-gray-200 my-8  '/>
    <div className='container px-32 '>

       <div className='bg-[white]'>
        <div className='  '>
        <div className='flex justify-between pt-10 gap-12'>
            <div>
                <h1 className='font-semibold text-xl'>Subscribe to our Newsletter </h1>
<input placeholder='Enter your Email' className='bg-transparent border border-black p-1  mt-5 mb-3' />  
<p className='text-sm'> So you can get all the updates about your newly clothes<br/> as well as special discounts. </p>  
<div className='flex my-5 gap-6'>
    <h1>FOLLOW US</h1>
    <FaFacebookF /> 
    <FaInstagram /> 
    <FaXTwitter /> 
    <FaLinkedin /> 
</div>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>Info </h1>
                    <p className='text-gray-600  mt-2'>Terms of Service</p>
                    <p className='text-gray-600  mt-2'>Accessibility Statement</p>
                    <p className='text-gray-600  mt-2'>Cookie Policy</p>
                    <p className='text-gray-600  mt-2'>Contact Information</p>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>About Policies </h1>
                    <p className='text-gray-600  mt-2'>About Us</p>
                    <p className='text-gray-600  mt-2'>FAQ</p>
                    <p className='text-gray-600  mt-2'>Shipping Information</p>
                    <p className='text-gray-600  mt-2'>Customer Support</p>
                    </div>
                    <div className='hidden lg:block'>
                    <h1 className='font-semibold text-xl'>New Arrivals </h1>
                    <p className='text-gray-600  mt-2'>Best Sellers</p>
                    <p className='text-gray-600  mt-2'>Sale Items</p>
                    <p className='text-gray-600  mt-2'>Size Guide</p>
                    <p className='text-gray-600  mt-2'>Store Locator</p>
                    </div>
        </div>
        </div>
        <div className='lg:flex lg:container px-[2rem]  justify-between py-8' >
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
