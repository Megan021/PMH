import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [offScreenNav, setOffScreenNav] = useState(false);
  const [offScreenDeals, setOffScreenDeals] = useState(false);

  const toggleForm = () => {
    setOffScreenNav(!offScreenNav);
  }

  const toggleNav = () => {
    setOffScreenDeals(!offScreenDeals);
  }

  return (
    <div className='overflow-hidden'>
      <div className='py-2 px-4 sm:px-6 lg:px-32 bg-[#F5F3F2]'>
        <div className='container bg-[#F5F3F2]'>

          {/* TOP HEADER */}
          <div className='hidden lg:block'>

          <div className='flex justify-between   '>
            <ul className='flex gap-4 text-xs sm:text-sm text-[#333333]'>
              <li>CONTACT</li>
              <li>ADDRESS</li>
              <li>EMAIL</li>
            </ul>

            <ul className='flex gap-2 cursor-pointer' onClick={toggleNav}>
              <li className='text-red-950 font-medium'>Free shipping for orders over 2999</li>
              <IoIosArrowUp className={`mt-1 transform transition-transform ${offScreenDeals ? 'rotate-180' : ''}`} />
            </ul>
            <ul className='flex gap-2 sm:gap-5 text-sm sm:text-lg'>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaTwitter /></li>
              <li><FaYoutube /></li>
              <li className='cursor-pointer' onClick={toggleForm}><GiHamburgerMenu /></li>
            </ul>
          </div>
          </div>
        </div>
        {offScreenDeals && (
          <>
            <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={toggleNav}></div>
            <div className={`fixed container inset-x-0 top-0 bg-[#F1F1F0] border-b border-gray-200 p-4 transition-transform transform ${offScreenDeals ? 'translate-y-0' : '-translate-y-full'} duration-300 z-50`}>
              <div className="border border-gray-300"></div>
              <div className="px-4 sm:px-10">
                <img src='/images/Summer.jpg' alt="Category Sale" className="w-full sm:w-[25rem] 3xl:w-[50rem] mx-auto mb-8" />
                <p className='text-[#747574] font-semibold'>READY TO GET STARTED?</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
                <p className='font-semibold'>Daily Deals</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
                <p className='font-semibold'>Bundled Discounts</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
                <p className='font-semibold'>Promo Codes or Coupons</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
                <p className='font-semibold'>Holiday-Specific Discounts</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
                <p className='font-semibold'>Customer Loyalty Rewards</p>
                <div className="border border-t-1 w-full border-gray-300 my-4"></div>
              </div>
            </div>
          </>
        )}
        {offScreenNav && (
          <div className='fixed inset-0 bg-black opacity-50 z-50' onClick={toggleForm}></div>
        )}
        <div className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-8 transition-transform transform ${offScreenNav ? 'translate-x-0' : 'translate-x-full'} duration-300 z-50`}>
          <ul className='mx-auto'>
            <div className='flex justify-between'>
              <h1 className='text-lg font-semibold'>More Information</h1>
              <RxCross2 className='cursor-pointer' onClick={toggleForm} />
            </div>
            <hr className='border border-gray-200 my-4' />
            <li className='mb-6'>
              <a href='#'>Privacy Policy</a>
            </li>
            <li className='mb-6'>
              <a href='#'>Customer Support</a>
            </li>
            <li className='mb-6'>
              <a href='#'>Help</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-white mt-4 px-4 sm:px-6 lg:px-32'>
        <div className='container flex flex-col sm:flex-row py-4 justify-between items-center'>
          <div className='flex items-center mb-4 sm:mb-0'>
            <span className='flex font-semibold text-xl'>
              <div className='text-green-900'>P</div>
              <div className='text-blue-800'>M</div>
              <div className='text-green-900'>H</div>
            </span>
          </div>

          <div className='flex flex-col sm:flex-row items-center bg-gray-100 p-2 rounded-md'>
            <select className='bg-gray-100 rounded-l-md h-10 px-4 w-full sm:w-40 mb-2 sm:mb-0 sm:mr-2'>
              <option>All Category</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className='relative w-full sm:w-auto'>
              <input className='bg-gray-100 border-0 h-10 pl-4 pr-12 w-full sm:w-[24rem] focus:outline-none' placeholder='Search Products...' />
              <IoSearchOutline className='absolute top-3 right-4 text-xl text-gray-500 cursor-pointer' />
            </div>
          </div>

          <div className='flex gap-4 sm:gap-8 text-2xl mt-4 sm:mt-0'>
            <div><CiHeart /></div>
            <div><CiShoppingCart /></div>
            <div><CiUser /></div>
          </div>
        </div>
        <hr />
      </div>

      <div className='container hidden lg:block'>
        <ul className='flex flex-wrap gap-4 sm:gap-12 font-semibold my-3 px-4 sm:px-32'>
          <li>Home</li>
          <li>Ipad</li>
          <li>Store</li>
          <li>Mac</li>
          <li>Watch</li>
          <li>Case & Covers</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Screen Protector</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
