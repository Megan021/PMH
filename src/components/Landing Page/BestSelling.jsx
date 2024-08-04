import {useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiShoppingCart   } from "react-icons/ci";

const BestSelling = () => {
  const [selectedProduct,setSelectedProduct] = useState(null)
  const toggleProduct = (product)=> {

    setSelectedProduct(product)
  }
 
  const products = [
    { id: 1, image: 'images/LandingPage/product1.webp', price: 'Rs 113,000.00', name: 'Samsung Z1', category: 'Mobile' },
    { id: 2, image: ' images/LandingPage/product2.webp', price: 'Rs 63,000.00', name: 'Air Buds', category: 'Music' },
    { id: 3, image: 'images/LandingPage/product3.webp', price: 'Rs 100,000.00', name: 'Samsung A4', category: 'Mobile' },
    { id: 4, image: 'images/LandingPage/product4.webp', price: 'Rs 10,000.00', name: 'X-box controller', category: 'Video Games' },
    { id: 5, image: 'images/LandingPage/product5.webp', price: 'Rs 10,000.00', name: 'G-Shock', category: 'Shoes' },
    { id: 6, image: 'images/LandingPage/product6.webp', price: 'Rs 120,000.00', name: 'Acer Nitro', category: 'Laptop' },
  ];
  
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1535,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 903,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
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
    <div>
      {selectedProduct && (
         <div className='fixed inset-0 bg-black opacity-50 z-30' onClick={() => setSelectedProduct(null)}></div>

      )}
      {selectedProduct && (
                    <div className={`fixed container inset-x-0 md:w-[50%] md:h-[70%] top-36 bg-[#F1F1F0] border-b border-gray-200 p-4 transition-transform transform ${selectedProduct ? 'translate-y-0' : '-translate-y-full'} duration-300 z-50`}>
                      <div className='lg:flex  p-4'>
                        <div className='md:w-1/2 w-[58%]  mx-auto'>
                          <img src={selectedProduct.image} className='' />
                        </div>
                        <div className='mx-auto'>
                         <h1 className=''>{selectedProduct.name}
                         </h1>
                         <span className='text-gray-700 text-sm my-8'>{selectedProduct.category}</span>
                         <h3 className='font-semibold text-2xl my-4'>{selectedProduct.price} </h3> 
                         <hr className='border-gray-300 my-4' />



                         <h3 className='font-semibold text-xl my-2 mb-4'>Color</h3>
                         <div className='flex gap-4 my-4'>
                          <span className='my-4  hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-3 border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-cyan-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-red-300 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>
                          <span className='my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100'></span>

                         </div>

                         {/* <h3 className='font-semibold text-xl my-2'>Color</h3>
                         <div className="flex pb-[3rem]">
                {["XS", "S", "M", "L", "XL"].map((Color) => (
                  <div
                    key={Color}
                    className={`border font-normal border-gray-300 px-[0.5rem] w-[3rem] text-center 
                      ${selectedColor === Color ? "border-black bg-gray-800 text-white" : "hover:border-black hover:bg-gray-100 hover:text-black"}
                      mr-2 transition duration-300`}
                    onClick={() => handleColorClick(Color)}
                  >
                    {Color}
                  </div>
                ))}
              </div> */}
              <button
                  type="submit"
                  className={`bg-[black] text-[white] my-4 w-[15.3rem] h-[4rem] text-[1.25rem] rounded-xl transition duration-300 
                  }`}
                 
                >
                  Add to Cart
                </button>    
                <p className='text-gray-500 my-2 text-sm'>All terms and conditions available here.</p>

                <a href='#' className='text-blue-700'>View Full Details </a>
                                </div>
                      </div>
                      </div>

      )}
      
          <div className='container mt-32'>
          <div className="flex justify-center mt-32">
            <hr className="w-1/4 mt-3" />
            <span className="mx-2">BEST SELLING PRODUCTS</span>
            <hr className="w-1/4 mt-3" />
          </div>
      <div className='mt-16  lg:w-full px-[0rem]'>
        <Slider {...settings}>
          {products.map((product) => (
            
          <div key={product.id} className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src={product.image} alt='Product 1' />
              <div className='flex justify-between '>

             <div className='bg-white  py-4'>
              <p className=' mx-5 py-1  bg-white  '>{product.price}</p>
              <p className='px-5'>{product.name} </p>
              <p className='text-gray-400 px-5'>{product.category}</p></div>
              <div onClick={()=> toggleProduct(product)} className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart   className='text-xl '/>

              </div>
              </div>
            </div>
       
          </div>
          ))}
          {/* <div className='px-2 flex'>
            <div className='hover:border hover:border-black'>
              <img src='images/LandingPage/product2.webp' alt='Product 2' />
              <div className='flex justify-between '>
              <div className='bg-white  py-4'>
              <p className=' mx-5 py-1  bg-white  '>Rs 63,000.00</p>
              <p className='px-5'>Airs Buds </p>
              <p className='text-gray-400 px-5'>Music</p></div>
              <div onClick={toggleProduct}  className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart  className='text-xl '/>

              </div>
              </div>
            </div>
          </div> */}
          {/* <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/LandingPage/product3.webp' alt='Product 3' />
              <div className='flex justify-between '>

              <div className='bg-white  py-4'>
              <p className=' mx-5 py-1  bg-white  '>Rs 100,000.00</p>
              <p className='px-5'>Samsung A4</p>
              <p className='text-gray-400 px-5'>Mobile</p></div>
              <div onClick={toggleProduct} className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart   className='text-xl '/>

              </div>
              </div>
            </div>
          </div> */}
          {/* <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/LandingPage/product4.webp' alt='Product 4' />
              <div className='flex justify-between '>

              <div className='bg-white  py-4'>
              <p className=' mx-5 py-1  bg-white  '>Rs 10,000.00</p>
              <p className='px-5'>X-box controller</p>
              <p className='text-gray-400 px-5'>Video Games</p></div>
              <div  onClick={toggleProduct} className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart  className='text-xl '/>

              </div>
              </div>
            </div>
          </div> */}
          {/* <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/LandingPage/product5.webp' alt='Product 5' />
              <div className='flex justify-between '>

              <div className='bg-white  py-4'>
              <p className=' mx-5 py-1  bg-white  '>Rs 10,000.00</p>
              <p className='px-5'>G-Shock</p>
              <p className='text-gray-400 px-5'>Shoes</p></div>
              <div onClick={toggleProduct}  className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart  className='text-xl '/>

              </div>
              </div>
            </div>
          </div> */}
          {/* <div className='px-2'>
            <div className='hover:border hover:border-black'>
                            <img src='images/LandingPage/product6.webp' alt='Product 6' />
                            <div className='flex justify-between '>

              <div className='bg-white text-black py-4'>
              <p className=' mx-5 py-1  bg-white text-black '>Rs 120,000.00</p>
              <p className='px-5'>Acer Nitro</p>
              <p className='text-gray-400 px-5'>Laptop</p>              </div>

              <div onClick={toggleProduct}  className= 'cursor-pointer border border-black p-2 rounded-full my-auto'>
              <CiShoppingCart  className='text-xl '/>

              </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default BestSelling
