import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import uuid from "react-uuid";
import Checkout from "./CheckoutComponent";
import { motion as m } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

export const Cart = ({ toggle, handleToggle }) => {
  const { cartItems, deleteItemCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <m.aside
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-screen h-screen -top-10 -right-5 lg:h-[90vh] lg:top-10 lg:left-[45em] 2xl:left-[79em] z-20 overflow-y-scroll no-scrollbar"
    >
      <div className="relative">
        <div className="m-10 mt-10 p-4 left-0 absolute xl:mt-20 xl:absolute xl:-top-20 xl:left-[190px] xl:w-[400px] bg-blue-100  rounded-br-xl rounded-bl-xl transition-all shadow-md">
          <div className="absolute p-2 top-0 left-0 xl:-left-14 lg:bg-blue-100 bg-transparent  rounded-tl-xl rounded-bl-xl">
            <svg
              onClick={() => handleToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cursor-pointer text-black rounded-full w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {cartItems.length === 0 ? (
            <div className="mt-10 text-xl" key={uuid()}>
              <h1 className="p-2 mt-2 font-black text-xl text-gray-800">
                {currentUser ? (
                  <h1 className="text-2xl">{currentUser.displayName}</h1>
                ) : null}
                Your StoreX-11 Cart is empty.
              </h1>
              <p className="p-2 text-gray-800">
                Your shopping cart is waiting. Give it purpose – fill it with
                groceries, clothing, household supplies, electronics and more.
              </p>
            </div>
          ) : (
            <div className="pt-10 w-[74vw] xl:w-full">
              <div className="">
                <Checkout />
              </div>
              {cartItems.map((item) => {
                const { id, title, quantity, images, price } = item;
                const totalPrice = price * quantity;

                return (
                  <div
                    className="flex flex-col mx-2 my-4 p-2 bg-white shadow-md rounded-xl"
                    key={id}
                  >
                    <div className="flex">
                      <div className="m-4 w-64 object-contain">
                        <img
                          className="w-full rounded-xl object-fill"
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
                      <div class="flex flex-row bg-blue-700 rounded-xl ">
                        <button
                          onClick={() => addItemToCart(item)}
                          class=" bg-blue-700 text-white hover:text-blue-100 hover:bg-blue-400 w-12  rounded-l cursor-pointer"
                        >
                          <span class=" text-2xl ">+</span>
                        </button>
                        <span className="py-2 px-5 text-black font-semibold  bg-blue-100">
                          {quantity}
                        </span>
                        <button
                          onClick={() => removeItemToCart(item)}
                          class="bg-blue-700 text-white hover:text-blue-100 hover:bg-blue-400 w-12 rounded-r cursor-pointer"
                        >
                          <span class="text-2xl">-</span>
                        </button>
                      </div>
                      <button
                        onClick={() => deleteItemCart(item)}
                        className="px-5 bg-black text-white font-semibold hover:bg-gray-500  rounded-lg"
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
      </div>
    </m.aside>
  );
};

// motion.div initial={{y:"100%"}}
//          animate={{y:"0%"}}
//          transition={{duration:0.75, ease: "linear"}}
//          exit={{opacity:1}}
