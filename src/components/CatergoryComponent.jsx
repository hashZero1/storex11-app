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
    <div className=" mt-20 lg:w-[90%] 2xl:max-w-[102rem] mx-auto px-2 2xl:px-0">
      <div>
        <h1 className="text-4xl lg:text-6xl font-black text-gray-400  mb-10">
          Product categories
        </h1>
        <div className="pb-4 mx-auto flex overflow-x-scroll yes-scrollbar">
          {categories.map((dt) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={` ${
                selectItem
                  ? "active:bg-blue-400 focus:bg-blue-700"
                  : "bg-blue-200 "
              }
           bg-white shadow-md  capitalize rounded-lg m-1  px-4 py-2 text-md lg:mx-2 lg:px-5 lg:py-4 lg:text-xl hover:bg-blue-500 hover:text-white whitespace-nowrap transition-all `}
              key={dt.id}
              onClick={() => {
                handleItemClick(dt);
              }}
            >
              {dt}
            </motion.button>
          ))}
        </div>
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
