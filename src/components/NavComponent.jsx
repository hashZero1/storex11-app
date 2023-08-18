import React, { useContext, useState } from "react";
import { Cart } from "./CartComponent";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signOutUser,
} from "../Firebase/Firebase.config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const NavComponent = () => {
  const [toggle, setToggle] = useState(true);
  const { cartItems } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (err) {
      alert("Error! (Login popup closed unexpectedly)");
    }
  };

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <nav className="lg:w-11/12 mx-auto">
      <div className="pt-10 max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://i.ibb.co/bPG5Y9K/logo-no-background.png"
            className="h-8 my-1 xl:h-10 xl:mr-3"
            alt="Logo"
          />
        </a>
        <div className="flex w-40 xl:w-56 justify-between">
          {currentUser ? (
            <UserProfile signOutHandler={signOutHandler} />
          ) : (
            <Link
              onClick={signInWithGoogle}
              className="px-5 py-2 text-sm xl:text-base xl:px-10 xl:py-2 rounded-lg text-white font-semibold bg-red-600 hover:bg-gray-200 hover:text-black transition-all"
              to="/"
            >
              SignIn
            </Link>
          )}
          <div>
            {toggle ? (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                onClick={() => setToggle(!toggle)}
                className={`${
                  cartItems.length
                    ? " bg-white"
                    : "ring-1 ring-gray-800 ring-inset"
                } px-2 rounded-lg cursor-pointer flex justify-center hover:bg-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="p-2 xl:p-1 w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="font-bold  mt-[5px] xl:mt-2 text-lg xl:text-xl cursor- ">
                  {cartItems.length}
                </span>
              </motion.div>
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
