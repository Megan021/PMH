import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SecondBanner = () => {
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

    <div>
          
         {/* SECOND BANNER  */}
         <div className='mt-32 px-32'>

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
        <img src='images/LandingPage/slide1-iphone.png' className='mt-8 ' />
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
        <img src='images/LandingPage/slide1-ipad.png' className='mb-32' />
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
        <img src='images/LandingPage/ProductHighlight.jpeg' className='mt-10 object-cover hidden lg:block' />
      </div>
    </div>
  </div>
</Slider>

        </div>

      
    </div>
  )
}

export default SecondBanner
