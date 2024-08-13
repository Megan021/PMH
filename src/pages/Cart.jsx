import React, { useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BsShop } from "react-icons/bs";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center lg:py-20 py-44">
        <img
          src="/images/emptycart.png"
          alt="empty cart"
          className="lg:w-[20%] w-[50%] mx-auto"
        />
        <h2 className="text-2xl py-5">No items in cart</h2>
        <Link to="/shop">
          <button className="p-3 px-6 bg-[#0D4C90] text-white rounded-xl flex items-center mx-auto gap-3"><BsShop /> Go to Shop</button>
        </Link>
      </div>
    );
  }

  const { price, quantity } = cartItems;

  const subtotal = price * quantity;

  const handleProceedToCheckout = () => {
    navigate("/shipping-info");
  };

  // const handleBackToProducts = () => {
  //   window.history.back();
  // };

  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.location.reload();
  };

  const handleQuantityChange = (index, increment) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];
    if (increment) {
      item.quantity += 1;
    } else {
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container py-12 px-4 lg:px-0">
      {/* <button
        onClick={handleBackToProducts}
        className="mb-4 flex items-center gap-2 rounded"
      >
        <TbArrowBackUp />
        Back
      </button> */}
      <h1 className="font-medium text-2xl mb-4">Cart Overview</h1>
      <div className="md:flex gap-8">
        <div className="lg:w-[70%]">
          {cartItems.map((item, index) => (
           <table className="min-w-full bg-white">
           <thead>
             <tr className="text-left">
               <th className="py-2 px-4 border-b">Product</th>
               <th className="py-2 px-4 border-b">Price</th>
               <th className="py-2 px-4 border-b">Quantity</th>
               <th className="py-2 px-4 border-b">Subtotal</th>
               <th className="py-2 px-4 border-b">Action</th>
             </tr>
           </thead>
           <tbody>
             {cartItems.map((item, index) => (
               <tr key={index}>
                 <td className="py-2 px-4 border-b">
                   <img
                     src={item?.image}
                     alt={item?.name}
                     className="inline-block w-20 mr-4"
                   />
                   <span>{item?.name}</span>
                 </td>
                 <td className="py-2 px-4 border-b">Rs. {item.price}</td>
                 <td className="py-2 px-4 border-b">
                  <div className="border p-2 flex justify-between rounded-lg">
                  <button onClick={() => handleQuantityChange(index, false)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleQuantityChange(index, true)}>+</button>
                  </div>
                  </td>
                 <td className="py-2 px-5 border-b">
                   Rs. {item.price * item.quantity}
                 </td>
                 <td className="py-2 px-6 border-b">
                   <button
                     onClick={() => handleDelete(index)}
                     className="text-red-600 p-1 text-xl rounded"
                   >
                     <MdDeleteOutline />
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
          ))}
        </div>

        <div className="md:w-[30%] mt-8 md:mt-0">
          <div className="border border-gray-300 shadow rounded p-5 px-7">
            <h2 className="font-medium text-xl mb-5">Order Summary</h2>
            <div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                <div>
                  <p>SubTotal:</p>
                </div>
                <div>
                  <p>
                    Rs.{" "}
                    {cartItems.reduce(
                      (acc, item) => acc + item?.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-2 mt-7">
                <div>
                  <p>Total:</p>
                </div>
                <div>
                  <p>
                    Rs.{" "}
                    {cartItems.reduce(
                      (acc, item) => acc + item?.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleProceedToCheckout}
                  className="p-3 bg-[#0D4C90] text-white rounded w-full border hover:border-[#0D4C90] hover:bg-transparent hover:text-[#0D4C90] duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
