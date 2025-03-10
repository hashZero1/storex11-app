import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import { motion } from "framer-motion";
import { CategoryResult } from "./CategoryResult";

const categories = [
  "mens-watches",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

const CatergoryComponent = () => {
  const { category, selectItem, setSelectItem } = useContext(ApiContext);

  const handleItemClick = (item) => {
    setSelectItem(item);
  };

  return (
    <div className="w-11/12 mx-auto mt-20 ">
      <h1 className="text-4xl lg:text-6xl font-black text-gray-400 ml-14 mb-10">
        Product categories
      </h1>
      <div className="pb-4 mx-auto lg:w-11/12 flex overflow-x-scroll yes-scrollbar">
        {categories.map((dt) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={` ${
              selectItem
                ? "active:bg-blue-400 focus:bg-blue-700"
                : "bg-blue-200 "
            }
           bg-blue-300 bg-opacity-50 capitalize rounded-lg m-1  px-4 py-2 text-md lg:m-2 lg:px-5 lg:py-4 lg:text-xl hover:bg-blue-500 hover:text-white whitespace-nowrap transition-all shadow-md `}
            key={dt.id}
            onClick={() => {
              handleItemClick(dt);
            }}
          >
            {dt}
          </motion.button>
        ))}
      </div>
      <div>
        {category ? (
          <CategoryResult category={category} />
        ) : (
          <h1 className="text-3xl text-center mx-auto bg-red-200 py-4 px-10 m-4">
            ...Sorry Product is not available at the moment visit later
          </h1>
        )}
      </div>
    </div>
  );
};

export default CatergoryComponent;
