import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
// import "./CartComponentStyles.scss";
import uuid from "react-uuid";
// import Checkout from "./CheckoutComponent";
import { motion as m } from "framer-motion";

export const Cart = ({ toggle, handleToggle }) => {
  const { cartItems, deleteItemCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="flex flex-col z-50 relative"
    >
      <div className="w-11/12">
        <svg
          onClick={() => handleToggle(!toggle)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" cursor-pointer text-red-600 w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="m-10 p-4 absolute top-2 -left-[25em] w-[400px] bg-red-100 bg-opacity-90 rounded-lg transition-all shadow-md">
        {cartItems.length === 0 ? (
          <div className="text-lg" key={uuid()}>
            <h1 className="p-2 mt-2 font-semibold text-xl">
              Your StoreX-11 Cart is empty.
            </h1>
            <p className="p-2">
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
            </p>
          </div>
        ) : (
          <div className="">
            <h1 className="m-2 text-xl ">Shopping Cart</h1>
            {cartItems.map((item) => {
              const { id, title, quantity, images, price } = item;
              const totalPrice = price * quantity;

              return (
                <div className="flex flex-col mx-2 my-4 p-2 " key={id}>
                  <div className="flex">
                    <div className="m-4 w-64 object-contain">
                      <img
                        className="w-full rounded-lg h-40 object-fill"
                        src={images[0]}
                        alt={images}
                      />
                    </div>
                    <div className="mt-5 w-72">
                      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                      <p className="mb-1">Eligible for FREE Shipping</p>
                      <b>₹{totalPrice}</b>
                    </div>
                  </div>
                  <div className="m-4 flex justify-evenly">
                    <div class="flex flex-row bg-red-600 rounded-xl ">
                      <button
                        onClick={() => addItemToCart(item)}
                        class=" bg-red-600 text-white hover:text-red-700 hover:bg-gray-100 w-12 rounded-l cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                      <span className="py-2 px-5 text-black font-semibold  bg-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => removeItemToCart(item)}
                        class="bg-red-600 text-white hover:text-red-700 hover:bg-gray-100 w-12 rounded-r cursor-pointer"
                      >
                        <span class="m-auto text-2xl font-thin">-</span>
                      </button>
                    </div>
                    <button
                      onClick={() => deleteItemCart(item)}
                      className="px-5 bg-black text-white font-semibold hover:bg-gray-100 hover:text-black rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <Checkout /> */}
    </div>
  );
};

// motion.div initial={{y:"100%"}}
//          animate={{y:"0%"}}
//          transition={{duration:0.75, ease: "linear"}}
//          exit={{opacity:1}}
