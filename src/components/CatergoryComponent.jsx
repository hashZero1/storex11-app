import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { CartContext } from "../context/CartContext";

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
  const { addItemToCart } = useContext(CartContext);

  const handleItemClick = (item) => {
    setSelectItem(item);
  };

  console.log(selectItem);
  return (
    <div className="w-11/12 mx-auto mt-20 ">
      <h1 className="text-3xl ml-14 mb-5 font-semibold">Product categories</h1>
      <div className="w-11/12 pb-4 mx-auto flex overflow-x-scroll yes-scrollbar">
        {categories.map((dt) => (
          <button
            className={` ${
              selectItem ? "active:bg-red-400 focus:bg-red-500" : "bg-red-200 "
            }
           bg-red-100 bg-opacity-50 capitalize rounded-lg m-2 px-5 py-4 text-2xl hover:bg-red-500 whitespace-nowrap transition-all shadow-md `}
            key={dt.id}
            onClick={() => {
              handleItemClick(dt);
            }}
          >
            {dt}
          </button>
        ))}
      </div>

      <div className="">
        {category ? (
          <>
            <div className="flex mt-10 flex-wrap justify-center">
              {category?.map((dt) => (
                <div key={dt.id} className="p-2">
                  <div className="max-w-sm  m-2 bg-opacity-50 bg-white rounded-lg shadow ">
                    <div className="p-4 rounded-t-lg bg-white">
                      <img
                        className=" w-full h-48 object-contain"
                        src={dt.images[0]}
                        alt=""
                      />
                    </div>

                    <div className="h-60 p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                        {dt.title}
                      </h5>

                      <p className="mb-3 h-[105px] font-normal text-gray-700 dark:text-gray-600">
                        {dt.description} the biggest enterprise technology
                        acquisitions of 2021 so far.
                      </p>

                      <button
                        onClick={() => addItemToCart(dt)}
                        className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white rounded-lg"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-3xl m-4">
            ...Sorry Product is not available(Double click any category)
          </h1>
        )}
      </div>
    </div>
  );
};

export default CatergoryComponent;
