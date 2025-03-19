import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { ApiContext } from "../context/ApiContext";
import SearchBar from "./SearchBar";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import notFound from "../Assets/not-found.gif";

const SearchResult = () => {
  const { addItemToCart, notify } = useContext(CartContext);
  const { searchProducts, error } = useContext(ApiContext);

  return (
    <div>
      <div className="mb-20">
        <NavComponent />
      </div>
      <main className=" lg:w-[90%] 2xl:max-w-[102rem] mx-auto px-2 2xl:px-0">
        <div>
          <h1
            className="text-4xl lg:text-6xl font-black text-gray-400  mt-10 "
            id="discover"
          >
            Search Results
          </h1>
        </div>
        <SearchBar />
        {searchProducts.length !== 0 ? (
          <section className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-4 items-center md:p-2 ">
            {searchProducts?.map((dt) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={dt.id}
                className=" bg-white rounded-lg w-full"
              >
                <div className="  bg-gray-50 rounded-lg shadow-md ">
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
                    <p className=" h-[110px] font-normal text-gray-700 dark:text-gray-600">
                      {dt.description.slice(0, 150) + "..."}
                    </p>
                    <hr className="py-2" />
                    <div className="mx-3 my-2 border-black border-opacity-20 flex justify-between ">
                      <p className="text-3xl text-gray-800">${dt.price} /-</p>
                      <button
                        onClick={() => {
                          addItemToCart(dt);
                          notify();
                        }}
                        className="px-4 py-2 bg-blue-700 text-white font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-lg"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        ) : (
          <div className="h-[80vh] mt-12 lg:mt-32 flex flex-col justify-center items-center">
            <h1 className="text-2xl lg:text-4xl font-black text-gray-400">
              {error}
            </h1>
            <div className="w-[90%] md:w-[60%] lg:w-[40%] mx-auto mt-10">
              <img className="w-full" src={notFound} alt="not-available" />
            </div>
          </div>
        )}
      </main>
      <FooterComponent />
    </div>
  );
};

export default SearchResult;
