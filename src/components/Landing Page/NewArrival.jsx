import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
// import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const NewArrival = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("64 GB");

  const toggleProduct = (product) => {
    setSelectedProduct(product);
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const newProducts = [
    {
      id: 4,
      image1: "images/LandingPage/featuredProduct4-1.jpg",
      image2: "images/LandingPage/featuredProduct4-2.jpg",
      price: "Rs 8000",
      name: "IPhone 15 case",
      category: "Cover",
    },
    {
      id: 2,
      image1: "images/LandingPage/featuredProduct2-1.jpg",
      image2: "images/LandingPage/featuredProduct2-2.jpg",
      price: "Rs 28,000",
      newPrice: "Rs 16,000",
      name: "Smart Band Carbon",
      category: "Watch",
    },
    {
      id: 1,
      image1: "images/LandingPage/featuredProduct-1.jpg",
      image2: "images/LandingPage/featuredProduct-2.jpg",
      price: "Rs 1,80000",
      name: "IPhone 15",
      category: "Mobile",
    },
    {
      id: 3,
      image1: "images/LandingPage/featuredProduct3-1.jpg",
      image2: "images/LandingPage/featuredProduct3-2.jpg",
      price: "Rs 40,000",
      name: "Wireless Loud H7i",
      category: "Music",
    },
  ];

  return (
    <>
      {selectedProduct && (
        <>
          <div
            className="fixed  inset-0 bg-black opacity-50 z-30"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="fixed top-0 container inset-x-0 md:w-[50%] md:h-[70%]  lg:top-36 bg-[#F1F1F0] border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 z-50">
            <div className="lg:flex p-4 relative">
              <div className="md:w-1/2 w-[58%] mx-auto">
                <img src={selectedProduct.image1} alt={selectedProduct.name} />
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
                <h3 className="font-semibold text-xl">Color</h3>
                <div className="flex gap-4 mb-4 ">
                  <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-3 border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                  <span className="my-4 hover:border-black bg-cyan-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                  <span className="my-4 hover:border-black bg-red-300 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                  <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                </div>
                <span className="mr-[3rem] text-[1.2rem] font-semibold text-xl mt-[0.85rem]">
                  SIZES
                </span>
                <div className="flex pb-5">
                  {["64 GB", "128 GB", "256 GB", "512 GB"].map((size) => (
                    <div
                      key={size}
                      className={`cursor-pointer font-semibold border rounded-lg px-3 mt-2 py-1  text-center ${
                        selectedSize === size
                          ? " border-2 border-blue-600"
                          : "hover:border hover:border-blue-500 border-gray-500 text-gray-600 hover:text-black "
                      } mr-2 transition duration-300`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
                <p className="text-gray-500 my-2 text-xs">
                  All terms and conditions available here.
                </p>
                <Link to="/productDetails">
                  <span className="text-blue-700 text-sm">
                    View Full Details
                  </span>
                </Link>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 text-xl"><IoCloseSharp /></button>
            </div>
          </div>
        </>
      )}
      <div className="container 3xl:px-32 md:mx-auto mt-24 ">
        <h1 className="font-bold lg:text-center text-xl my-7">New Arrival</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-5">
          {newProducts.map((product) => (
            <div className="" key={product.id}>
              <div className="bg-white hover:shadow-xl shadow-md py-4 rounded-md relative group">
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
                <div className="flex justify-between px-4 mt-2">
                  <div>
                    <p className="font-semibold line-clamp-1">{product.name}</p>
                    <p className="font-semibold ">{product.price}</p>
                  </div>

                  <div
                    onClick={() => toggleProduct(product)}
                    className="mt-2 text-xl cursor-pointer border border-black p-2 rounded-full my-auto"
                  >
                    <CiShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrival;
