import { CiFilter, CiSearch, CiHeart, CiCirclePlus } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [offScreenNav, setOffScreenNav] = useState(false);
  const [price, setPrice] = useState(550);
  const [description, setDescription] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filterRef = useRef(null);
  const descriptionToggle = () => {
    setDescription(!description);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPrice(value);
    onPriceChange(value);
  };

  const toggleForm = () => {
    setOffScreenNav(!offScreenNav);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOffScreenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProduct = (product) => {
    setSelectedProduct(product);
  };

  const shop = [
    {
      id: 1,
      image1: "/images/Shop/Product1.jpg",
      image2: "/images/Shop/Product1-2.jpg",
      price: "Rs 1,80000",
      newPrice: "Rs 16,000",
      name: "IPhone 15",
      category: "Mobile",
    },
    {
      id: 2,
      image1: "/images/Shop/Product2.jpg",
      image2: "/images/Shop/Product2-2.jpg",
      price: "Rs 28,000",
      newPrice: "Rs 16,000",
      name: "Smart Band Carbon",
      category: "Watch",
    },
    {
      id: 3,
      image1: "/images/Shop/Product3.jpg",
      image2: "/images/Shop/Product3-2.jpg",
      price: "Rs 40,000",
      newPrice: "Rs 16,000",
      name: "Wireless Loud H7i",
      category: "Music",
    },
    {
      id: 4,
      image1: "/images/Shop/Product4.jpg",
      image2: "/images/Shop/Product4-2.jpg",
      price: "Rs 8000",
      newPrice: "Rs 16,000",
      name: "IPhone 15 case",
      category: "Cover",
    },
    {
      id: 5,
      image1: "/images/Shop/Product5.jpg",
      image2: "/images/Shop/Product5.jpg",
      price: "Rs 8000",
      newPrice: "Rs 16,000",
      name: "IPhone 15 case",
      category: "Cover",
    },
    {
      id: 6,
      image1: "/images/Shop/Product6.jpg",
      image2: "/images/Shop/Product6.jpg",
      price: "Rs 8000",
      newPrice: "Rs 16,000",
      name: "Mouse 15 ",
      category: "Computer Hardware",
    },
  ];

  return (
    <>
      <div className="mt-12">
        {selectedProduct && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={() => setSelectedProduct(null)}
            ></div>
            <div className="fixed top-0 container inset-x-0 md:w-[50%] md:h-[70%] lg:top-[9rem] bg-white border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 z-30">
              <div className="lg:flex p-4">
                <div className="md:w-1/2 w-[58%] mx-auto">
                  <img
                    src={selectedProduct.image1}
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="mx-auto">
                  <h1>{selectedProduct.name}</h1>
                  <span className="text-gray-700 text-sm lg:my-8">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-semibold text-2xl my-4">
                    {selectedProduct.price}
                  </h3>
                  <hr className="border-gray-300 my-4" />
                  <h3 className="font-semibold text-xl my-2 mb-4">Color</h3>
                  <div className="flex gap-4 my-4">
                    <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-3 border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    <span className="my-4 hover:border-black bg-cyan-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    <span className="my-4 hover:border-black bg-red-300 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white my-4 w-[15.3rem] h-[4rem] text-[1.25rem] rounded-xl transition duration-300"
                  >
                    Add to Cart
                  </button>
                  <p className="text-gray-500 my-2 text-sm">
                    All terms and conditions available here.
                  </p>
                  <Link to="/productDetails">
                    <span className="text-blue-700">View Full Details</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {offScreenNav && (
          <div
            className="fixed inset-0 bg-white opacity-5 z-40"
            onClick={toggleForm}
          ></div>
        )}
        <div
          ref={filterRef}
          className={`fixed text-black top-[2.5rem] right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[25%] border border-gray-200 p-8 transition-transform transform duration-300 z-40 ${
            offScreenNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="mx-auto">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Filter</h1>
              <RxCross2 className="cursor-pointer" onClick={toggleForm} />
            </div>
            <hr className="border border-gray-200 text-black my-4" />
            {/* <div className="my-8 mt-8 flex gap-[18rem] cursor-pointer" onClick={descriptionToggle}>
              <h2 className="cursor-pointer text-base font-semibold">Description</h2>ads <CiCirclePlus/>
              <div className="text-2xl" >sadadsadsads </div>
              {description && (
                <div className="text-black ">
                  <ul className="list-disc ml-6 z-50 w-[22rem]">
                    <li className="mb-4">7.7-inch vibrant and crisp display.</li>
                    <li className="mb-4">12 GB RAM with Android 13.0 for seamless multitasking.</li>
                    <li className="mb-4">Advanced AI-enhanced photography with Night Sight and Portrait Mode.</li>
                    <li className="mb-4">Supports 5G for ultra-fast internet speeds.</li>
                    <li className="mb-4">Latest security updates, Google Assistant, and intelligent features.</li>
                  </ul>
                </div>
              )}
            </div> */}
            <div className="w-full max-w-md mx-auto my-4">
              {/* <div className="my-8 mt-8 flex gap-[18rem] cursor-pointer" onClick={descriptionToggle}>
              <h2 className="cursor-pointer text-base font-semibold">Description</h2> <CiCirclePlus/>
              <div className="text-2xl" > </div>
                <div className="text-black z-[999]">
                  <ul className="list-disc ml-6 w-[22rem]">
                    <li className="mb-4">7.7-inch vibrant and crisp display.</li>
                    <li className="mb-4">12 GB RAM with Android 13.0 for seamless multitasking.</li>
                    <li className="mb-4">Advanced AI-enhanced photography with Night Sight and Portrait Mode.</li>
                    <li className="mb-4">Supports 5G for ultra-fast internet speeds.</li>
                    <li className="mb-4">Latest security updates, Google Assistant, and intelligent features.</li>
                  </ul>
                </div>
            </div> */}
              <label
                htmlFor="price"
                className="block text-sm text-gray-700 lg:flex justify-between"
              >
                <h1 className="text-black font-semibold">Price</h1>
                <h1 className="text-black font-semibold">Rs {price}</h1>
              </label>
              <input
                type="range"
                id="price"
                min="0"
                max="1000"
                value={price}
                onChange={handleChange}
                className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, black ${
                    price / 10
                  }%, #EFEEEE ${price / 10}%)`,
                }}
              />
            </div>
            <div className="my-8 mt-8 flex gap-[18rem] cursor-pointer">
              <h2 className="cursor-pointer text-base font-semibold">
                Description
              </h2>{" "}
              <CiCirclePlus />
              <div className="text-2xl"> </div>
              <div className="text-black z-[999]">
                <ul className="list-disc ml-6 w-[22rem]">
                  <li className="mb-4">7.7-inch vibrant and crisp display.</li>
                  <li className="mb-4">
                    12 GB RAM with Android 13.0 for seamless multitasking.
                  </li>
                  <li className="mb-4">
                    Advanced AI-enhanced photography with Night Sight and
                    Portrait Mode.
                  </li>
                  <li className="mb-4">
                    Supports 5G for ultra-fast internet speeds.
                  </li>
                  <li className="mb-4">
                    Latest security updates, Google Assistant, and intelligent
                    features.
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>

        <section className="container">
          <div className="flex justify-between">
            <div
              className="text-4xl border cursor-pointer border-gray-400 rounded-full items-center px-8 py-1 flex"
              onClick={toggleForm}
            >
              <CiFilter className="cursor-pointer text-xl " />
              <span className="text-base font-semibold">Filter</span>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <div
                  className="border border-gray-400 flex gap-2 rounded-full p-3 font-semibold cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {selectedOption}
                  <MdOutlineKeyboardArrowDown className="mt-1" />
                </div>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="list-none p-2">
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick("Sort by Price")}
                      >
                        Sort by Price
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick("Sort by Category")}
                      >
                        Sort by Category
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleOptionClick("Sort by Brands")}
                      >
                        Sort by Brands
                      </li>
                    </ul>
                  </div>
                )}
              </div>{" "}
            </div>
          </div>
          <section className="grid grid-cols-4 gap-6 gap-y-0 container">
            {shop.map((product) => (
              <div className=" " key={product.id}>
                <div className="">
                  <CiSearch className="text-gray-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CiHeart className="text-gray-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="bg-white border duration-300 hover:shadow-xl shadow-md py-4 rounded-md relative group">
                  <img
                    src={product.image1}
                    className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                    alt="Product1"
                  />
                  <img
                    src={product.image2}
                    className="transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 mt-4 group-hover:opacity-100"
                    alt="Product1"
                  />

                  <div className="absolute top-8 right-5 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="border p-1 bg-white shadow-md curs border-gray-200 rounded-full">
                      <CiHeart className=" rounded-full  text-2xl text-gray-500 cursor-pointer" />
                    </div>
                    <div className="border p-1 bg-white shadow-md border-gray-200 rounded-full">
                      <PiEyeLight
                        className="rounded-full cursor-pointer text-2xl text-gray-500"
                        onClick={() => toggleProduct(product)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between px-4 mt-2">
                    <div>
                      <span className="text-gray-400 text-sm">
                        {product.category}
                      </span>
                      <h1 className="font-semibold my-1">{product.name}</h1>
                      <p className="font-semibold text-lg text-red-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <Link to="/productDetails">
                    <div className="cursor-pointer border-2 text-center font-semibold text-sm border-blue-700 p-2 mt-2 rounded-md mx-4 ">
                      VIEW DETAILS
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default Shop;
