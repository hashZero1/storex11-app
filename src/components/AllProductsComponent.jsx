import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import HeroComponent from "./HeroComponent";
import SearchComponent from "./SearchComponent";
import CatergoryComponent from "./CatergoryComponent";
import UserDetailsForm from "./FormComponent";

const AllProductsComponent = () => {
  const { allProduct } = useContext(ApiContext);
  return (
    <main className="w-11/12 mx-auto">
      <>
        <HeroComponent />
        <SearchComponent />
      </>

      <section className="flex mt-5 flex-wrap justify-center">
        {allProduct?.map((dt) => (
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
                <a
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
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <CatergoryComponent />
    </main>
  );
};

export default AllProductsComponent;
