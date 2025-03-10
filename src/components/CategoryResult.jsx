import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

export const CategoryResult = ({ category }) => {
  const { addItemToCart, notify } = useContext(CartContext);
  return (
    <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  items-center md:p-2">
      {category?.map((dt) => (
        <motion.div whileHover={{ scale: 1.02 }} key={dt.id} className="">
          <div className=" bg-gray-50 rounded-lg shadow ">
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
                {dt.description}
              </p>
              {/* <DetailsPageComponent product={dt} /> */}
              <div className="mx-3 my-2 pt-6 border-t-2 border-black border-opacity-20 flex justify-between ">
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
    </div>
  );
};
