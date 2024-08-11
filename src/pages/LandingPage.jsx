import { HiArrowSmRight } from "react-icons/hi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import ShopByBrand from "../components/Landing Page/ShopByBrand";
import BestSelling from "../components/Landing Page/BestSelling";
import Banner from "../components/Landing Page/Banner";
import JoinUs from "../components/Landing Page/JoinUs";
import FeaturedProducts from "../components/Landing Page/FeaturedProducts";
import SecondBanner from "../components/Landing Page/SecondBanner";
import '../Carousel.css'; // Adjust the path as needed
import { SlArrowRight } from "react-icons/sl";

import { SlArrowLeft } from "react-icons/sl";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-700 text-white rounded-full"
      onClick={onClick}
    >
      <SlArrowLeft className="text-2xl bg-transparent" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-700 text-white rounded-full"
      onClick={onClick}
    >
      <SlArrowRight className="text-2xl bg-transparent" />
    </div>
  );
};




const LandingPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 700,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
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
    <>
    <div className="   ">
               <Slider {...settings}>

        <div className='  bg-[rgb(235,235,235)] px-16 lg:px-0 h-[38rem]   '>
          <div className='lg:container 3xl:px-32'>
            <div className='md:flex justify-between items-center'>
              <div className='w-full py-16 md:w-[31rem] md:py-32'>
                <h1 className='lg:text-7xl text-4xl font-bold text-[#4B1338] relative z-10'>
                  Beats Wireless Headset
                </h1>
                <p className='text-gray-700 my-8'>
                  Provident torquent massa! Blanditiis exercitation id magnam repudiandae primis hendrerit curae possimus.
                </p>
                <button className='px-5 py-3 font-semibold bg-[#0068C8] text-sm rounded-sm text-white '>
                  SHOP NOW
                </button>
              </div>
                  <div className='lg:w-[40rem]'>
                <img src='images/LandingPage/landingPage-watches.png' className='w-full relative z-10' alt='iphones' />
              </div>



              <div className=''>
                <img src='images/LandingPage/Ellipse 1.svg' className='absolute hidden lg:block  top-[18rem] right-[14rem] opacity-15 w-40 ' alt='Ellipse' />
                <img src='images/LandingPage/Group 2.svg' className='absolute hidden lg:block right-[25rem] bottom-[5rem] w-40' alt='Group' />
                <img src='images/LandingPage/Subtract.svg' className='absolute  hidden lg:block left-[20rem] top-[19rem]  w-40 ' alt='Subtract' />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#EBEBEB]  px-16 lg:px-0   relative h-[38rem] overflow-y-hidden'>
    <div className='container 3xl:flex lg:flex   3xl:px-32'>
      <div className=' py-16 text-[#4B1338] mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center text-white w-28 mb-8 font-semibold bg-red-600 px-4'>
          BIG SALE
        </div>
        <div className='my-4  w-[31rem]'>
          <h1 className='lg:text-5xl leading-normal  text-[#4B1338]  font-bold'>
            IPhone On Sale At Up to 25% Off
          </h1>
        </div>
        <p className='text-gray-700 my-8 w-[31rem]'>
                  Provident torquent massa! Blanditiis exercitation id magnam repudiandae primis hendrerit curae possimus.
                </p>  
                      {/* <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 220,000</span>
        </p> */}
        <button className='px-5 py-3 font-semibold bg-[#0068C8] text-sm rounded-sm text-white '>
                  SHOP NOW
                </button>      </div>

      <div className=''>
        <img src='images/LandingPage/slide1-iphone.png' className='mt-8 ' />
      </div>
    </div>
  </div>

  <div className='bg-[#192D56] relative  px-16 lg:px-0    h-[38rem]  overflow-y-hidden'>
  <div className='container 3xl:flex lg:flex   3xl:px-32'>
      <div className=' py-16 text-[white] mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center text-white w-28 mb-8 font-semibold bg-red-600 px-4'>
          BIG SALE
        </div>
        <div className='my-4'>
          <h1 className='lg:text-5xl leading-normal w-[90%] text-white font-bold'>
            Best iPad Deals At a Glance
          </h1>
        </div>
        <p className='text text-xl'>FREE SHIPPING BY PMN</p>
        <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 49,000</span>
        </p>
        <button className='bg-blue-600 px-10 rounded-md py-3'>SHOP NOW</button>
      </div>

      <div  className=''>
        <img src='images/LandingPage/slide1-ipad.png' className='mb-32' />
      </div>
    </div>
  </div>

  <div className='bg-[#2D2D46] relative  px-16 lg:px-0   h-[38rem]  overflow-y-hidden'>
  <div className='container 3xl:flex lg:flex  3xl:px-32'>
      <div className=' py-16 text-[white] mt-12 md:w-1/2'>
        <div className='rounded-r-md text-center text-white w-28 mb-8 font-semibold bg-red-600 px-4'>
          BIG SALE
        </div>
        <div className='my-4'>
          <h1 className='lg:text-5xl leading-normal w-[90%] text-white font-bold'>
            All New For a Better You
          </h1>
        </div>
        <p className='text text-xl'>AMAZING DISCOUNTS AND DEALS</p>
        <p className='text-xl my-8'>
          From <span className='text-3xl text-yellow-400 animate-pulse'>Rs 49,000</span>
        </p>
        <button className='bg-blue-600 px-10 rounded-md py-3'>SHOP NOW</button>
      </div>

      <div className=''>
        <img src='images/LandingPage/ProductHighlight.jpeg' className='mt-10 object-cover' />
      </div>
    </div>
  </div>
        </Slider>


        <div className='hidden lg:block px-20 py-14'>
        <div className='container mx-auto flex justify-around md:gap-2 '>
          <div className='lg:flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <LiaShippingFastSolid className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Free Shipping</h1>
              <p>Standard shipping for orders</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <GoGift className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Support Gifts</h1>
              <p>

               The perfect gift idea
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <IoWalletOutline className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Money Guarantee</h1>
              <p>Within 30 days</p>
            </div>
          </div>
          
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <MdOutlineSupportAgent className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Online Support</h1>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className='flex items-center gap-4 md:hidden'>
            <div className='border border-gray-300 rounded-full p-2'>
              <RiMoneyRupeeCircleLine className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Flexible Payment</h1>
              <p>Multiple Credit Cards</p>
            </div>
          </div>

        </div>
      </div>
       
       <hr/>

        <div className="px-4 lg:px-0">
          <div className=" container  mt-24">
            <div className="md:grid grid-cols-3 grid-rows-2 gap-4">
              <div className="col-span-1 row-span-2 pt-8 bg-[#F7F1F1]">
                <div className="p-8">
                  <span className="text-[#4B1338] text-xl">20% Off on Sale!</span>
                  <h2 className="font-bold text-[#4B1338] text-[1.5rem] my-3">Digital Watch</h2>
                  <button className="text-red-800 text-xs font-semibold flex gap-1">
                    <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                  </button>
                </div>
                <img src="images/LandingPage//sub-banner-01.jpg" className="-mt-8" title="SubBanner1" alt="SubBanner1" />
              </div>
              <div className="col-span-1 row-span-1">
                <div className="bg-[#EAEFF5] py-8 flex justify-between">
                  <div className="p-8 w-full">
                    <span className="text-xl">Get 5% Discount</span>
                    <h2 className="font-bold text-[1.5rem] my-3 w-48">Wireless Airbuds</h2>
                    <button className="text-red-800 text-xs font-semibold flex gap-1">
                      <HiArrowSmRight className="mt-[0.1rem]" /> VIEW MORE
                    </button>
                  </div>
                  <img src="images/LandingPage/sub-banner-02.jpg" className="md:hidden lg:block" title="SubBanner2" alt="SubBanner2" />
                </div>
              </div>
              <div className="col-span-1 row-span-2  bg-[#EEF4F4]">
                <div className="p-8 text-center mt-5 ">
                  <span className="text-[#4B1338] text-xl">New Launches</span>
                  <h2 className="font-bold text-[#4B1338] text-[1.5rem] my-3">Pocket Camera</h2>
                  <button className="text-red-800 text-xs font-semibold flex justify-center mx-auto">
                    <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                  </button>
                </div>
                <img src="images/LandingPage/sub-banner-03.jpg" className="mt-4" title="SubBanner3" alt="SubBanner3" />
              </div>
              <div
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: 'url(images/LandingPage/sub-banner-04.jpg)' }}
                title="SubBanner4"
              >
                <div className="p-8 lg:ml-48 ml-40 md:ml-14 w-full">
                  <span className="text-xl">Get 15% Discount</span>
                  <h2 className="font-bold text-[1.5rem] my-3 w-48">Head Phones</h2>
                  <button className="text-red-800 text-xs font-semibold flex text-right gap-1">
                    <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0">
        <BestSelling/>
        <Banner/>
        <FeaturedProducts/>
        <ShopByBrand/>
        <SecondBanner/>
        <JoinUs/>

        </div>
        </div>
    </>
  );
};

export default LandingPage;
