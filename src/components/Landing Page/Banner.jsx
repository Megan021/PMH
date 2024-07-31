import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import FeaturedProducts from './FeaturedProducts';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 750,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 903,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <div className='lg:px-32 mt-40'>
      {/* FIRST BANNER */}
       <div className='md:flex justify-between'>

        <div className=' bg-[#EFE3E3] lg:flex rounded-lg lg:w-[60%] w-full'>
            <div className='lg:p-14 p-4 text-center md:text-left mt-28 '>
                <p className='text-red-600 mb-4'>USE CODE: <span className='font-semibold'>SALE35%</span></p>
                <h1 className='font-bold lg:text-5xl text-3xl   mb-4 lg:leading-[4rem] '>Heavy on Features Light on Prices</h1>
                <p className='mb-8 text-sm md:text-base'>AMAZING DISCOUNTS AND DEALS</p>
            <button className='px-5 py-3 font-semibold bg-[#0068C8] text-sm rounded-md text-white '>
                  SHOP NOW
                </button>
            </div>
            <div>
                <img src='images/banner-1.jpg' className='h-full  w-52 mx-auto md:mx  lg:w-[30rem] object-contain' />
            </div>
        </div>

        <div className='bg-[#D8D8EA] rounded-lg px-auto md:w-[35%] '>
            <div className='text-center mt-16 pt-8 md:pt-0'>
            <span className='bg-[red] rounded-r-md rounded-bl-md text-white px-4 text-center'>New Product</span>
            <h2 className='text-5xl text-center  w-[20rem] mx-auto my-8'>Controller like Never before</h2>
            <span className='text-blue-600 text-lg font-semibold'>RELEASE DATE & PRICE</span>
            <img src='images/banner-1,2.jpg' className='mx-auto' />
            </div>


        </div>
       </div>
         <FeaturedProducts/>
         {/* SECOND BANNER  */}
         <div className='my-8'>

         <Slider {...settings}>
  <div className='bg-green-950 relative h-[38rem] rounded-lg overflow-y-hidden'>
    <div className='container flex'>
      <div className='px-20 py-16 text-white mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center w-28 mb-8 font-semibold bg-red-600 px-4'>
          BIG SALE
        </div>
        <div className='my-4'>
          <h1 className='lg:text-6xl leading-normal text-white font-bold'>
            IPhone On Sale At Up to 25% Off
          </h1>
        </div>
        <p className='text text-xl'>BUY TOP PRODUCTS ON ECOMALL</p>
        <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 220,000</span>
        </p>
        <button className='bg-blue-600 px-10 rounded-md py-3'>SHOP NOW</button>
      </div>

      <div className='hidden md:block'>
        <img src='images/slide1-iphone.png' className='mt-8 ' />
      </div>
    </div>
  </div>

  <div className='bg-[#192D56] relative h-[38rem] rounded-lg overflow-y-hidden'>
    <div className='container lg:flex'>
      <div className='px-20 py-16 text-white mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center mb-8 font-semibold bg-red-600 px-1 md:w-36'>
          TODAY'S DEAL
        </div>
        <div className='my-4'>
          <h1 className='lg:text-6xl leading-normal w-[90%] text-white font-bold'>
            Best iPad Deals At a Glance
          </h1>
        </div>
        <p className='text text-xl'>FREE SHIPPING BY PMN</p>
        <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 49,000</span>
        </p>
        <button className='bg-blue-600 px-10 rounded-md py-3'>SHOP NOW</button>
      </div>

      <div  className='hidden md:block'>
        <img src='images/slide1-ipad.png' className='mb-32' />
      </div>
    </div>
  </div>

  <div className='bg-[#2D2D46] relative h-[38rem] rounded-lg overflow-y-hidden'>
    <div className='container flex'>
      <div className='px-20 py-16 text-white mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center mb-8 font-semibold bg-red-600 px-1 md:w-36'>
          WEEKEND DEAL
        </div>
        <div className='my-4'>
          <h1 className='lg:text-6xl leading-normal w-[90%] text-white font-bold'>
            All New For a Better You
          </h1>
        </div>
        <p className='text text-xl'>AMAZING DISCOUNTS AND DEALS</p>
        <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 49,000</span>
        </p>
        <button className='bg-blue-600 px-10 rounded-md py-3'>SHOP NOW</button>
      </div>

      <div className='hidden md:block'>
        <img src='images/ProductHighlight.jpeg' className='mt-10 object-cover hidden lg:block' />
      </div>
    </div>
  </div>
</Slider>

        </div>










         {/* <div className=''>
    <div className='bg-[black] h-[25rem] mt-[5rem] rounded-lg text-white'>
        <div className='flex gap-8 '>
          <div className='mt-[4rem] mx-16'>
           <p className='text-5xl font-semibold mb-8  '>Get 20% off on Summer  </p>  
           <p className='text-xl text-gray mt-3 leading-8 w-[50rem]'>Sign Up to our weekly Newsletter. So you can get all the updates about your newly clothes as well as special discounts upto 40% especially for you  </p>
           <div className='flex'>

           </div>
           <button className='px-16 py-3 my-[3rem] rounded-md bg-white text-black font-semibold'><div className='flex gap-2'>SIGN UP            <FaArrowRightLong className='text-black mt-1' /> </div>
           </button>
           </div>
           <div className=''>
          <img src='images/SummerSale.jpg' className=' mt-16 h-[20rem] rounded-lg hidden lg:block ' />
          </div>
        </div>
      </div>
    </div> */}
{/* <div className='flex gap-12 px-16 '>
  <div className='bg-[#F7F1F1] flex justify  gap-16 px-8 items-center w-1/2    '>
    <div className=''>
      <img src='/public/images/2ndBanner.png' className='w-full  h-full' />
    </div>
    <div className=' text-4xl mt-44 text-right font-bold'>
      <h2>Get 30% Off</h2>
      <h2>On Console</h2>

      <button className=' text-base font-normal text-right mt-4  underline '>SHOP NOW </button>
    </div>
  </div>
  <div className='bg-[#F7F1F1] flex justify-between px-8 items-center w-1/2   '>

    <div className=' text-4xl mt-48  font-bold'>
      <h2>Get 15% Off</h2>
      <h2>On Iphones</h2>

      <button className=' text-base text-left font-normal  mt-4  underline '>SHOP NOW </button>
    </div>
    <div className=''>
      <img src='images/slide1-iphone.png ' className='w-72 h-full' />
    </div>
  </div>
</div> */}
{/* <div className='absolute top-[235rem] left-[42rem] z-50 w-[20rem] mx-auto'>
  <div className=' border-[4px] border-white '>
    <div className='bg-transparent '>
      <div className='bg-white  p-4 m-4 text-center'>

      <h1 className='text-6xl font-bold mb-2'>SALE !</h1>
      <p className='text-gray-700 font-semibold'>HEAVY DISCOUNT</p>
      </div>
    </div>
  </div>
</div> */}


    </div>
  )
}

export default Banner
