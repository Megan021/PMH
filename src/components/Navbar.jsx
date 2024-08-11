import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";

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
    <div className='overflow-hidden '>
      <div className=' bg-black text-white py-2 px-4 sm:px-6 lg:px-32 '>
        <div className='container '>

          {/* TOP HEADER */}
          <div className=''>
            <div className='flex justify-between items-center'>
              <ul className='flex gap-4 lg:text-xs text-[0.7rem] ]'>
                <li>CONTACT</li>
                <li>ADDRESS</li>
                <li>EMAIL</li>
              </ul>

              <ul className='flex gap-2 cursor-pointer ' onClick={toggleNav}>
                <li className=' font-medium animate-pulse hidden lg:block'>Free shipping for orders over 2999</li>
                <IoIosArrowUp className={`lg:mt-1 transform transition-transform ${offScreenDeals ? 'rotate-180' : ''}`} />
              </ul>
              <ul className='flex gap-2 sm:gap-5 text-sm sm:text-lg'>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
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
              <div className="px-4 sm:px-10 text-black">

                <img src='images/LandingPage/Summer.jpg' alt="Category Sale" className="w-full mt-4 sm:w-[25rem] 3xl:w-[50rem] mx-auto mb-8" />
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
          <div className='fixed  inset-0 bg-black opacity-50 z-50' onClick={toggleForm}></div>
        )}
        <div className={`fixed top-0 text-black right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-8 transition-transform transform ${offScreenNav ? 'translate-x-0' : 'translate-x-full'} duration-300 z-50`}>
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
      
      <hr/>

      {/* Second Section */}
      <div className='bg-white px-4 sm:px-6 lg:px-32'>
        <div className='container flex  sm:flex-row py-4 justify-between items-center'>
          <div className='flex items-center sm:mb-0'>
            <Link to='/'>
            <span className='flex font-semibold lg:text-xl cursor-pointer'>
              <div className='text-green-900'>P</div>
              <div className='text-blue-800'>M</div>
              <div className='text-green-900'>H</div>
            </span>
            
            </Link>
          </div>

          <div className='flex flex-col sm:flex-row items-center bg-gray-50 border-2 border-blue-800   rounded-md'>
            <select className='bg-gray-50 hidden lg:block rounded-l-md h-10 px-4 w-full sm:w-40 mb-4 sm:mb-0 outline-none sm:mr-2'>
              <option className='bg-gray-50 hidden border border-none outline-none lg:block rounded-l-md h-10 px-4 w-full sm:w-40 mb-4 sm:mb-0 sm:mr-2' >All Category</option>
              <option className='bg-gray-50 hidden border border-none  outline-none lg:block rounded-l-md h-10 px-4 w-full sm:w-40 mb-4 sm:mb-0 sm:mr-2'>Option 1</option>
              <option className='bg-gray-50 hidden border border-none outline-none  lg:block rounded-l-md h-10 px-4 w-full sm:w-40 mb-4 sm:mb-0 sm:mr-2 '>Option 2</option>
              <option className='bg-gray-50 hidden border border-none outline-none  lg:block rounded-l-md h-10 px-4 w-full sm:w-40 mb-4 sm:mb-0 sm:mr-2'>Option 3</option>
            </select>
            <div className='border border-gray-200 h-8 mx-4' />
            <div className='flex w-full sm:w-auto'>
              <input className=' bg-gray-50 border-0 h-10 pl-4 w-full sm:w-[24rem] focus:outline-none' placeholder='Search Products...' />
             <button className='bg-blue-700'>
              <IoSearchOutline className=' text-xl text-white   bg-blue-700 mx-3  cursor-pointer' />
             </button>
            </div>
          </div>

          <div className='flex gap-4 sm:gap-8 md:text-2xl text-xl md:mt-4 sm:mt-0'>
            <div><CiHeart /></div>
            <div><CiShoppingCart /></div>
            <div><CiUser /></div>
          </div>
        </div>
      </div>
        <hr />


      {/* Third Sectiom */}
      <section className='container'>
      <div className='hidden  md:block  bg-white lg:flex justify-between items-center'>
        <Link to='/'>
        {/* <div className='flex gap-2'>
          <h1 className='font-semibold'>Home</h1>
          <IoHomeOutline className=' text-xl'/>
        </div> */}

        </Link>
        <ul className='flex container justify-center gap-4 sm:gap-12 font-semibold my-3 px-4 '>
          <li>Home</li>
          <Link to='/shop'>

          <li>Shop</li>
          </Link>
          <li>Ipad</li>
          <li>Mac</li>
          <li>Watch</li>
          <li>Cases</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Screen Protector</li>
        </ul>
      </div>
      </section>
    </div>
  );
}

export default Navbar;
