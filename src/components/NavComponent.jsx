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
import logo from "../Assets/logo.webp";

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
    <nav className=" mx-5 lg:mx-10 pt-10 ">
      <div className=" flex items-center justify-between relative">
        <div className="w-32 lg:w-44">
          <a href="/">
            <img src={logo} className="w-full" alt="Logo" />
          </a>
        </div>
        <div className="flex w-[46%] justify-evenly sm:w-[24%] lg:w-[12%] md:justify-between items-center">
          <div className="mr-[2px]">
            {currentUser ? (
              <UserProfile signOutHandler={signOutHandler} />
            ) : (
              <Link
                onClick={signInWithGoogle}
                className="px-5 py-2 text-sm xl:text-base xl:px-10 xl:py-2 rounded-lg text-white font-semibold bg-blue-700 hover:bg-gray-800 hover:text-white transition-all"
                to="/"
              >
                SignIn
              </Link>
            )}
          </div>
          <div className="relative">
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
                } px-2.5 w-16 h-9 items-center rounded-lg cursor-pointer flex justify-center hover:bg-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 p-1"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>

                <span className=" font-bold text-xl text-[#06172E]">
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
