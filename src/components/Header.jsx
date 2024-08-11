import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLocationOutline, IoChevronDown, IoHomeOutline, IoStorefrontOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-black text-white px-4 lg:px-0">
        <div className="container  py-2 flex justify-between items-center">
        <div className="cursor-pointer">
            <Link to="sale" smooth={true} offset={-20}>
            <p className="flex items-center gap-2">30% OFF SALE <IoChevronDown className="text-xl" /></p>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <ul className="flex gap-5">
              <li className="flex items-center gap-2">
                <BsTelephone />
                +980124567
              </li>
              <li className="flex items-center gap-2">
                <GoMail />
                info@example.com
              </li>
              <li className="flex items-center gap-2">
                <IoLocationOutline />
                kathmandu, Nepal
              </li>
            </ul>
          </div>

          

          <div>
            <ul className="flex gap-6 text-lg ">
              <li>
                <FaFacebook />
              </li>
              <li>
                <RiInstagramFill />
              </li>
              <li>
                <FaTwitter />
              </li>
              <button onClick={toggleMenu} className="hidden lg:block">
                <RiMenu3Fill />
              </button>
            </ul>
          </div>
        </div>
      </div>

      {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-50"
            onClick={toggleMenu}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-5 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } duration-300 z-50`}
        >
          <ul>
            <div className="flex justify-between">
              <Link to="/">
                <h1 className="text-xl font-semibold">PHM</h1>
              </Link>
              <RxCross2
                className="cursor-pointer text-xl"
                onClick={toggleMenu}
              />
            </div>
            <hr className="border border-gray-200 my-4" />
            <li className="mb-4">
              <Link onClick={toggleMenu} className="flex gap-2" to="/">
                <IoHomeOutline />
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link onClick={toggleMenu} className="flex gap-2" to="/shop">
                <IoStorefrontOutline />
                Shop
              </Link>
            </li>
            <li className="mb-6">
              <Link onClick={toggleMenu} className="flex gap-2" to="/">
                <BsTelephone />
                Contact
              </Link>
            </li>
            <hr className="border border-gray-200 my-4" />
          </ul>

          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-xl font-medium pb-3">More Links</h2>
            <ul className="leading-9 text-lg">
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>Customer Support</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="text-lg">
            <ul className="leading-10">
              <li className="flex items-center gap-2">
                <BsTelephone />
                +980124567
              </li>
              <li className="flex items-center gap-2">
                <GoMail />
                info@example.com
              </li>
              <li className="flex items-center gap-2">
                <IoLocationOutline />
                kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default Header;
