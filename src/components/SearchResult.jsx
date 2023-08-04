import React, { memo, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, useSearchParams } from "react-router-dom";

const SearchResult = ({ searchProduct }) => {
  // const { id } = useSearchParams();
  // const searchDetails = searchProduct.find((pd) => pd.id === parseInt(id));
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      {searchProduct ? (
        <section>
          <h1 className="text-3xl ml-14 mt-10 font-semibold" id="discover">
            Search Result
          </h1>

          <div className="flex mt-5 flex-wrap justify-center">
            {searchProduct.products?.map((dt) => (
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
                      className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-lg"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SearchResult;
