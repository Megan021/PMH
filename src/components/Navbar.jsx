import React, { useState } from "react";
import Header from "./Header";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";

const Navbar = () => {
  const [offScreenNav, setOffScreenNav] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleNav = () => {
    setOffScreenNav(!offScreenNav);
  };

  const categories = [
    { name: "Phone Case", path: "/" },
    { name: "Screen Protector", path: "/" },
    { name: "Iphone", path: "/" },
    { name: "Ipad", path: "/" },
    { name: "Mac", path: "/" },
    { name: "Watch", path: "/" },
    { name: "Accessories", path: "/" },
  ];

  return (
    <>
      <Header />

      <div className="container py-3 flex justify-between items-center px-4 lg:px-0">
        <div>
        <Link to="/">
          <h2 className="uppercase font-semibold text-xl lg:text-2xl">Phm</h2>
          </Link>
        </div>

        <div className="hidden lg:flex bg-transparent border-2 border-[#0D4C90] rounded-md rounded-r-2xl">
          <input
            type="text"
            placeholder="Search..."
            className="p-1 lg:p-2 md:w-96 px-2 rounded-l-xl border-r border-[#0D4C90] focus:outline-none"
          />
          <button className="bg-[#0D4C90] rounded-r-xl">
            <IoIosSearch className="text-2xl text-white mx-3 " />
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-4 mb-1 text-xl">
          <Link>
            <IoMdHeartEmpty />
          </Link>
          <Link>
            <IoCartOutline />
          </Link>
          <Link>
            <FiUser />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNav} className="mt-1 text-xl">
            <RiMenu3Line />
          </button>
        </div>

        {offScreenNav && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-50"
            onClick={toggleNav}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-5 transition-transform transform ${
            offScreenNav ? "translate-x-0" : "translate-x-full"
          } duration-300 z-50`}
        >
          <ul>
            <div className="flex justify-between">
              <Link to="/">
                <h1 className="text-xl font-semibold">PHM</h1>
              </Link>
              <RxCross2
                className="cursor-pointer text-xl"
                onClick={toggleNav}
              />
            </div>
            <hr className="border border-gray-200 my-4" />
            <li className="mb-4">
              <Link onClick={toggleNav} className="flex gap-2" to="/">
                <IoHomeOutline />
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link onClick={toggleNav} className="flex gap-2" to="/shop">
                <IoStorefrontOutline />
                Shop
              </Link>
            </li>
            <li className="mb-6">
              <Link onClick={toggleNav} className="flex gap-2" to="/">
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

        <div className="lg:flex hidden gap-1 md:gap-5 text-xl">
          <Link>
            <IoMdHeartEmpty />
          </Link>
          <Link>
            <FiUser />
          </Link>
          <Link>
            <IoCartOutline />
          </Link>
        </div>
      </div>

      <div className="container px-4 pb-2">
        <div className="lg:hidden flex bg-transparent border border-gray-400 pr-2 rounded-xl">
          <button
            className="border-r px-2 border-gray-400 capitalize flex items-center gap-1"
            onClick={toggleDropdown}
          >
            category
            <IoIosArrowDown />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-full px-2 mr-2 rounded-l-xl border-r border-gray-400 focus:outline-none"
          />
          <button>
            <IoIosSearch className="text-2xl" />
          </button>
        </div>
        <AnimatePresence>
          {isDropdownVisible && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 bg-white border border-gray-400 rounded-xl shadow-lg z-10"
            >
              <ul className="py-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link to={category.path}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container lg:flex justify-between items-center pb-2 px-3 lg:px-0 hidden">
        <div>
          <Link to="/">
            <h2 className="flex items-center gap-1 cursor-pointer">
              <IoHomeOutline className="text-lg" />
              Home
            </h2>
          </Link>
        </div>

        <div>
          <ul className="lg:flex gap-7 hidden">
            <li className="cursor-pointer">Iphone</li>
            <li className="cursor-pointer">Ipad</li>
            <li className="cursor-pointer">Mac</li>
            <li className="cursor-pointer">Watch</li>
            <li className="cursor-pointer">Case</li>
            <li className="cursor-pointer">Accessories</li>
            <li className="cursor-pointer">Screen Protector</li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/shop">
          <button className="flex items-center gap-2 rounded-xl border border-[#0D4C90] text-[#0D4C90] p-2 px-6 hover:bg-[#0D4C90] hover:text-white duration-300"><IoStorefrontOutline className="text-lg" />Shop</button>
          </Link>
          <button className="p-2 px-6 bg-[#0D4C90] border border-[#0D4C90] text-white rounded-xl">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
