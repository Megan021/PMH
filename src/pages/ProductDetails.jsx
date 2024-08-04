import  { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CiCirclePlus } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnLight } from "react-icons/pi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [description, setDescription] = useState(false);
  const [systemSpecifications, setSystemSpecifications] = useState(false);

  const descriptionToggle = () => {
    setDescription(!description);
  };

  const specificationsToggle = () => {
    setSystemSpecifications(!systemSpecifications);
  };

  const images = {
    black: "/public/images/ProductDetails/ProductDetails.jpg",
    blue: "/public/images/ProductDetails/ProductDetails2.jpg",
    yellow: "/public/images/ProductDetails/ProductDetails4.jpg",
  };

  const [selectedColor, setSelectedColor] = useState("black");

  const changeColor = (color) => {
    setSelectedColor(color);
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
    <div className="page-container transition-opacity mt-16 duration-500">
      <div className="container px-32 mt-[2rem]">
          
        <div className="flex justify-between sm:px-0">
        <div>
          <div className="flex gap-[4rem]">
            <div className="gap-3 mt-8">
              {Object.keys(images).map((color, index) => (
                <img
                  key={index}
                  src={images[color]}
                  className={`w-16 my-3 sm:rounded-xl cursor-pointer transition duration-300 transform hover:scale-105 ${selectedColor === color ? 'border-2 border-black' : ''}`}
                  onClick={() => changeColor(color)}
                />
              ))}
            </div>

            <div>
              <div className="relative w-full">
                <img
                  src={images[selectedColor]}
                  className="w-[30rem] object-cover object-top mb-4 sm:rounded-xl"
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
          </div>
          <div className="mx-auto text-left mt-8">
           <h1 className="font-semibold mb-4 text-[1.5rem]">Customer Reviews</h1>
           <div className="bg-[#F7F9FB] px-6 py-4  gap-4 ">
            <div className="flex gap-8">
            <h2 className="text-3xl font-bold">4.92</h2>
            <div className="flex text-xl gap-1 mt-2 text-yellow-500">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            </div>
            <div className="pt-6 flex gap-6">

            <p className="text-sm ">Small</p>
            <div className="flex mt-1">
              <span className="bg-black rounded-l-full ml-9 w-8 h-2"/>
              <span className="bg-gray-300 rounded-r-full h-2 w-80"/>
            </div>
            <div>
              <span>4%</span>
            </div>

            </div>
            <div className="pt-3 flex gap-6">

            <p className="text-sm ">True to Size</p>
            <div className="flex mt-1">
              <span className="bg-black rounded-l-full  w-80 h-2"/>
              <span className="bg-gray-300 rounded-r-full h-2 w-7"/>
            </div>
            <div>
              <span>94%</span>
            </div>

            </div>
            <div className="pt-3 flex gap-6">

            <p className="text-sm ">Large</p>
            <div className="flex mt-1">
              <span className="bg-black rounded-l-full ml-9 w-4 h-2"/>
              <span className="bg-gray-300 rounded-r-full h-2 w-[20.9rem]"/>
            </div>
            <div>
              <span>2%</span>
            </div>

            </div>
   
           </div>
           <div className="my-8">
            <h3 className="text-lg font-semibold">All Reviews</h3>
            <hr className="my-4"/>
            <div className="flex justify-between">
            <div>
            <div className="flex gap-4">
              <h4 className='font-semibold text-sm'>User1</h4>
              <span className="text-sm text-gray-500">29 Jun,2024</span>
            </div>
            <div className="flex text-base gap-1 my-2 text-yellow-500">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="flex gap-8 my-4 w-full">
              <div className="flex gap-2"> 
            <span className="font-semibold text-gray-500">Overall Fit:</span>
            <span className=" text-gray-500"> True to size</span>

              </div>
              <div className="flex gap-2">
            <p className="font-semibold text-gray-500">Color:</p>
            <p className=" text-gray-500">  Multicolor</p>

              </div>
              <div className="flex gap-2">
            <p className="font-semibold text-gray-500">Size:</p>
            <p className=" text-gray-500">  M</p>

              </div>
            </div>
            <span className="my-8">The T-Shirt is very good quality, I am impressed by your product</span>
            </div>
            <div>
              <img src="/public/images/LandingPage/productDetails.webp" className="w-24 h-24 object-cover mt-8" />
            </div>
            </div>
            <hr className="my-12" />
            <div className="flex  justify-between">
            <div>
            <div className="flex gap-4">
              <h4 className='font-semibold text-sm'>User2</h4>
              <span className="text-sm text-gray-500">29 Jun, 2024</span>
            </div>
            <div className="flex text-base gap-1 my-2 text-yellow-500">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="flex gap-8 my-4 w-full">
              <div className="flex gap-2"> 
            <span className="font-semibold text-gray-500">Overall Fit:</span>
            <span className=" text-gray-500"> True to size</span>

              </div>
              <div className="flex gap-2">
            <p className="font-semibold text-gray-500">Color:</p>
            <p className=" text-gray-500">  Multicolor</p>

              </div>
              <div className="flex gap-2">
            <p className="font-semibold text-gray-500">Size:</p>
            <p className=" text-gray-500">  M</p>

              </div>
            </div>
            <span className="my-8">The T-Shirt is very good quality, I am impressed by your product</span>
            </div>
            <div>
              <img src="/public/images/LandingPage/productDetails2.webp" className="w-24 h-24 object-cover mt-8" />
            </div>
            </div>

           </div>
          </div>
            
          </div>
          <div className="w-1/3">
            <h1 className="text-sm font-medium ">Google Pixel 8 Pro</h1>
            <span className="text-xs text-gray-400 pb-2 ">SKU: sm2112103773394955
            </span>
            <p className="text-2xl font-bold pb-[1.5rem] pt-2">Rs 80,399</p>
            <hr className="text-gray-400" />
            <div className="pb-4 gap-8">
              <h3 className="font-semibold text-xl mt-[0.85rem]">Color</h3>

              <div className="flex gap-4 my-4">
                <span
                  className={`my-4 rounded-full cursor-pointer hover:border-black px-3 py-3 border border-gray-100 ${selectedColor === "black" ? 'border-black' : ''}`}
                  style={{ backgroundColor: 'black' }}
                  onClick={() => changeColor("black")}
                ></span>
                <span
                  className={`my-4 rounded-full cursor-pointer hover:border-black px-3 py-[0.1rem] border border-gray-100 ${selectedColor === "blue" ? 'border-black' : ''}`}
                  style={{ backgroundColor: '#00bcd4' }}
                  onClick={() => changeColor("blue")}
                ></span>
                <span
                  className={`my-4 rounded-full cursor-pointer hover:border-black px-3 py-[0.1rem] border border-gray-100 ${selectedColor === "yellow" ? 'border-black' : ''}`}
                  style={{ backgroundColor: '#ffeb3b' }}
                  onClick={() => changeColor("yellow")}
                ></span>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-black w-80 mb-4 text-white rounded-sm px-8 py-2 font-semibold text-lg"
              >
                Checkout
              </button>
              <CiHeart className="text-3xl mt-1" />
            </div>
            <hr />
            <div className="my-8 flex justify-between cursor-pointer" onClick={descriptionToggle}>
              <h2 className={`cursor-pointer text-lg `}> Description</h2>
              <CiCirclePlus className="text-2xl" />
            </div>
            {description && (
              <div>
                
                <div>
                   <ol className="list-disc ml-6">
                        <li  className="mb-4">7.7-inch vibrant and crisp display.</li>
                        <li  className="mb-4">12 GB RAM with Android 13.0 for seamless multitasking.</li>
                        <li  className="mb-4"> Advanced AI-enhanced photography with Night Sight and Portrait Mode.</li>
                        <li  className="mb-4">Supports 5G for ultra-fast internet speeds.</li>
                        <li  className="mb-4"> Latest security updates, Google Assistant, and intelligent features.</li>
                  </ol>
                 </div>
              </div>
            )}
            <div className="my-8 flex justify-between cursor-pointer" onClick={specificationsToggle}>
              <h2 className={`cursor-pointer text-lg `}> Specifications</h2>
              <CiCirclePlus className="text-2xl" />
            </div>
            {systemSpecifications && (
              <div>
                <div className="flex gap-32 my-8">
                  <ul className="font-semibold">
                    <li className="mb-4">Brand</li>
                    <li className="mb-4">Operating System</li>
                    <li className="mb-4">Memory</li>
                    <li className="mb-4">Screen Size</li>
                    <li className="mb-4">Resolution</li>
                    <li className="mb-4">Cellular Technology</li>
                  </ul>
                  <ul>
                    <li className="mb-4">Google</li>
                    <li className="mb-4">Android 13.0</li>
                    <li className="mb-4">12 GB</li>
                    <li className="mb-4">7.7 inches</li>
                    <li className="mb-4">1344 x 2992</li>
                    <li className="mb-4">5G</li>
                  </ul>
                </div>
              </div>
            )}
            <div className="bg-[#F7F9FB] p-4">
              <div>
                <div className="flex gap-3">
                  <CiDeliveryTruck className="text-xl text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Free Shipping</span>
                    <p className="text-gray-600 text-xs">
                      Free Express Shipping on orders over Rs 1200
                    </p>
                    <p className="text-gray-600 text-xs">
                      Estimated to be delivered in 1 week
                    </p>
                  </div>
                </div>
                <div className="flex my-4 gap-3">
                  <PiKeyReturnLight className="text-xl text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Returns</span>
                    <p className="text-gray-600 text-xs">
                      Items received within 30 days from the delivered date.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Items received unused, undamaged and in original package
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AiOutlineSecurityScan className="text-xl text-green-800 mt-1" />
                  <div className="">
                    <span className="font-semibold">Shopping Security</span>
                    <div className="flex text-xs gap-6 mt-2 p-2 bg-green-100">
                      <div className="flex gap-1 text-xs">
                        <span className="text-[0.55rem] mt-1">
                          <SiTicktick />
                        </span>
                        <span>Safe payments</span>
                      </div>
                      <div className="flex gap-1 text-xs">
                        <span className="text-[0.55rem] mt-1">
                          <SiTicktick />
                        </span>
                        <span>Secure Logistics</span>
                      </div>
                      <div className="flex gap-1 text-xs">
                        <span className="text-[0.55rem] mt-1">
                          <SiTicktick />
                        </span>
                        <span>Customer Service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
