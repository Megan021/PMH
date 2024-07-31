import React, { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
//   const [count, setCount] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const navigate = useNavigate();

  const images = [
    "images/LandingPage/ProductDetails.jpg",
    // "images/LandingPage/ProductDetails2.jpg",
    "images/LandingPage/ProductDetails3.jpg",
    "images/LandingPage/ProductDetails4.jpg",
 
  ];


  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
      <div className="page-container transition-opacity duration-500">
        <div className="container  px-32 mt-[2rem]">
          <div className="flex gap-[12rem] sm:px-0">
            <div>
              <div className="relative w-full">
                <img
                  src={images[currentImageIndex]}
                  className=" sm:h-[45rem]  object-cover object-top w-[70rem] mb-4 sm:rounded-xl"
                />
                <button
                  onClick={previousImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 transition duration-300 hover:bg-gray-300"
                >
                  <HiOutlineChevronLeft className="text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 transition duration-300 hover:bg-gray-300"
                >
                  <HiOutlineChevronRight className="text-gray-700" />
                </button>
              </div>
     
            </div>
            <div className=" mt-[2rem]">
              <h1 className="font-semibold pb-[2rem]">HOME / THE SHOP</h1>
              <p className="text-2xl pb-2 ">Google Pixel 8 Pro</p>
              <p className="text-2xl pb-[1.5rem]">Rs 80,399</p>
              <p className="font-normal text-[0.85rem] justify-normal leading-[1.5rem] pb-[1rem]">
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>
              <div className="flex pb-4 gap-8">
                
              <h3 className='font-semibold text-xl mt-[0.85rem] '>Color</h3>
                         {/* <div className='flex gap-4'>
                          <span className='my-4  hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-3 border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-cyan-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-red-300 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-red-600 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>
              </div> */}
                       <div className="flex gap-3 mt-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-16 sm:rounded-xl cursor-pointer transition duration-300 transform hover:scale-105"
                    onClick={() => changeImage(index)}
                  />
                ))}
              </div>
              </div>
              <h2>

               System Specifications
              </h2>
              <div className="flex gap-32 my-8">
              <ul className="font-semibold "> 
                <li className='mb-4'>Brand</li>
                <li className='mb-4'>Operating System</li>
                <li className='mb-4'>Memory</li>
                <li className='mb-4'>Screen Size</li>
                <li className='mb-4'>Resolution</li>
                <li className='mb-4'>Cellular Technology</li>
              </ul>
              <ul className=""> 
                <li className='mb-4'>Google</li>
                <li className='mb-4'>Andriod 13.0</li>
                <li className='mb-4'>12 GB</li>
                <li className='mb-4'>7.7 inches</li>
                <li className='mb-4'>1344 x 2992</li>
                <li className='mb-4'>5G</li>
              </ul>
              </div>

              <div className="flex sm:mb-0 mb-2">
                {/* <div className="border font-normal border-gray-300 p-5 flex mr-4 rounded-xl transition duration-300">
                  <div
                    onClick={() => setCount(Math.max(1, count - 1))}
                    className="mr-5 cursor-pointer"
                  >
                    -
                  </div>
                  <div>{count}</div>
                  <div onClick={() => setCount(count + 1)} className="ml-5 cursor-pointer">
                    +
                  </div>
                </div> */}
                <button
                  type="submit"
                  className={'bg-[black] text-[white] w-[15.3rem] h-[4rem] text-[1.25rem] rounded-xl transition duration-300 '}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetails;