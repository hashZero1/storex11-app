import React, { useContext, useState } from "react";
import CartContainer, { Cart } from "./CartComponent";
import { CartContext } from "../context/CartContext";

const NavComponent = () => {
  const [toggle, setToggle] = useState(true);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="">
      <div className="pt-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://i.ibb.co/bPG5Y9K/logo-no-background.png"
            className="h-10 mr-3"
            alt="Logo"
          />
        </a>
        <div className="flex w-80 justify-evenly">
          <button className="px-10 py-2 rounded-3xl text-white font-semibold bg-red-600 hover:bg-gray-200 hover:text-black">
            Sign IN
          </button>
          <div>
            {toggle ? (
              <div
                onClick={() => setToggle(!toggle)}
                className=" flex justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="font-bold p-2 text-lg cursor-pointer">
                  {cartItems.length}
                </span>
              </div>
            ) : (
              <Cart toggle={toggle} handleToggle={setToggle} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
