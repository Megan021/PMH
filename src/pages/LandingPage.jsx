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
const LandingPage = () => {

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className='  bg-[#EBEBEB] lg:px-32 px-4 '>
          <div className='container '>
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


        <div className='hidden lg:block px-32   py-20'>
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

        <div>
          <div className=" px-32 mt-32">
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

        <BestSelling/>
        <Banner/>
        <FeaturedProducts/>
        <ShopByBrand/>
        <SecondBanner/>
        <JoinUs/>
      </div>
  
    </>
  );
};

export default LandingPage;
