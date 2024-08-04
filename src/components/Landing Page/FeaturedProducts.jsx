import {useState} from 'react'
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { CiShoppingCart   } from "react-icons/ci";

const FeaturedProducts = () => {

  return (
    <div className='container md:mx-auto mt-32 px-32 '>
    <h1 className='font-bold text-center text-xl mt-16'>FEATURED PRODUCTS</h1>
    <div className='lg:block md:block hidden'>
    <ul className='flex justify-center py-9 mb-2 lg:gap-[8rem] md:gap-16 '>
      <li>All</li>
      <li>PHONE CASE</li>
      <li>SCREEN PROTECTOR</li>
      <li>LENS PROTECTOR</li>
    </ul>
    </div>
    <div className='sm:flex  gap-8 '>
      <div className='lg:w-[21rem] md:w-[21rem] md:lg:w-[21rem] relative group mb-[2rem]   '   >
        <img src='images/LandingPage/featuredProduct-2.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='Product1' />
        <img src='images/LandingPage/featuredProduct-2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 lg:w-[21rem] md:w-[21rem]  group-hover:opacity-100' alt='Product1' />
        <div className='flex justify-between'>
          <div>
        <p className='font-semibold mt-2'>IPhone 15</p>
        <p className='font-semibold  my-2'>Rs 1,80000</p>
        <div className='flex gap-1'>
          <AiFillStar className='text-yellow-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
        </div>
          <CiShoppingCart/>
          </div>
        </div>
        
      </div>
      <div className='lg:w-[21rem] md:w-[21rem] relative group '  >
        <img src='images/LandingPage/featuredProduct2-1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt="Product2" />
        <img src='images/LandingPage/featuredProduct2-2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 lg:w-[21rem] md:w-[21rem] group-hover:opacity-100' alt="Product2" />
        <p className='font-semibold mt-2'> Smart Band Carbon</p>
        <p className='font-semibold  my-2'>Rs 28,000</p>
        <div className='flex gap-1'>
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
        </div>
      </div>
      <div className='lg:w-[21rem] md:w-[21rem] relative group'  >
        <img src='images/LandingPage/featuredProduct3-1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='Product3' />
        <img src='images/LandingPage/featuredProduct3-2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 lg:w-[21rem] md:w-[21rem] group-hover:opacity-100' alt='Product3' />
        <p className='font-semibold mt-2'>Wireless Loud H7i</p>
        <div className='flex items-center gap-2  my-2'>
          <p className='font-semibold text-gray-400 line-through'>Rs 40,000</p>
          <p className='font-semibold text-red-500'>Rs 28,000</p>
        </div>
        <div className='flex gap-1 mt-2'>
          <AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
        </div>
        {/* <p className='text-gray-400 mb-4'>0 reviews</p> */}
      </div>
      <div className='lg:w-[21rem] md:w-[21rem] relative group'  >
        <img src='images/LandingPage/featuredProduct4-1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='In The Clouds Wrap Cardigans' />
        <img src='images/LandingPage/featuredProduct4-2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 lg:w-[21rem] md:w-[21rem] group-hover:opacity-100' alt='In The Clouds Wrap Cardigans' />
        <p className='font-semibold mt-2'>Iphone 15 Case</p>
        <p className='font-semibold my-3 '>Rs 8000</p>
        <div className='flex gap-1'>
          <AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' />
          <AiFillStar className='text-yellow-400' />
          <CiStar className='text-gray-400' />
          <CiStar className='text-gray-400' />
        </div>
      </div>
    </div>
  </div>
);
};

export default FeaturedProducts
