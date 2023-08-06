import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { CartContext } from "../context/CartContext";

const categories = [
  "mens-watches",
  "skincare",
  "groceries",
  "home-decoration",
  "smartphones",
  "laptops",
  "furniture",
  "womens-dresses",
  "sunglasses",
];

const CatergoryComponent = () => {
  const { category, fetchCategory, selectItem, setSelectItem } =
    useContext(ApiContext);
  const { addItemToCart } = useContext(CartContext);

  const handleItemClick = (item) => {
    setSelectItem(item);
  };

  console.log(selectItem);
  return (
    <div className=" lg:mt-20 lg:ml-12">
      <h1 className="text-3xl mb-5 font-semibold">Product categories</h1>
      {categories.map((dt) => (
        <button
          className={` ${
            selectItem ? "active:bg-red-400 focus:bg-red-500" : "bg-red-200 "
          }
          bg-red-100 bg-opacity-50 capitalize rounded-lg m-2 px-5 py-3 text-2xl hover:bg-red-500 transition-all shadow-md `}
          key={dt.id}
          onClick={() => {
            handleItemClick(dt);
          }}
        >
          {dt}
        </button>
      ))}
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
                      {/* <a
                     href="#"
                     className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                   >
                     Details
                     <svg
                       className="w-3.5 h-3.5 ml-2"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 14 10"
                     >
                       <path
                         stroke="currentColor"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M1 5h12m0 0L9 1m4 4L9 9"
                       />
                     </svg>
                   </a> */}
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
