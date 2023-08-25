import React, { memo, useContext } from "react";
import SearchComponent from "./SearchComponent";
import { ApiContext } from "../context/ApiContext";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { Drawer } from "vaul";
import { ToastContainer } from "react-toastify";
import DetailsPageComponent from "./DetailsPageComponent";

const AllProductsComponent = () => {
  const { allProduct } = useContext(ApiContext);
  const { addItemToCart, notify } = useContext(CartContext);
  console.log("all products re-render");
  return (
    <main className="w-11/12 mx-auto">
      <SearchComponent />
      <h1 className="text-3xl ml-14 mt-10 font-semibold" id="discover">
        Trending Products
      </h1>
      <section className="flex mt-5 flex-wrap justify-center">
        {allProduct?.map((dt) => (
          <motion.div whileHover={{ scale: 1.02 }} key={dt.id} className="p-2">
            <div className="max-w-sm m-2 lg:m-0 2xl:m-2 bg-opacity-50 bg-white rounded-lg shadow ">
              <div className="p-4 rounded-t-lg bg-white">
                <img
                  className="w-full h-48 object-contain"
                  src={dt.images[0]}
                  alt={dt.title}
                />
              </div>
              <div className="min-h-min p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  {dt.title}
                </h5>
                <p className="mb-3 h-[110px] font-normal text-gray-700 dark:text-gray-600">
                  {dt.description} the biggest enterprise technology
                  acquisitions of 2021 so far.
                </p>
                {/* <DetailsPageComponent product={dt} /> */}
                <div className="mx-3 my-2 pt-6 border-t-2 border-black border-opacity-20 flex justify-between ">
                  <p className="text-3xl text-gray-800">${dt.price} /-</p>
                  <button
                    onClick={() => {
                      addItemToCart(dt);
                      notify();
                    }}
                    className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-lg"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <ToastContainer />
      </section>
    </main>
  );
};

export default AllProductsComponent;
