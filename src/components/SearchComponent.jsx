import React, { useContext, useState, Fragment } from "react";
import { ApiContext } from "../context/ApiContext";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";

const product = [
  "phone",
  "watches",
  "shoes",
  "iphone",
  "laptop",
  "home",
  "decoration",
  "cream",
];

const SearchComponent = () => {
  const { searchProducts, searchCategory, setsearchProducts } =
    useContext(ApiContext);
  const [query, setQuery] = useState("");

  const filteredProduct =
    query === ""
      ? product
      : product.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="lg:mt-20 lg:ml-12">
      <Combobox value={searchProducts} onChange={setsearchProducts}>
        <div className="relative mt-6 w-full">
          <Combobox.Input
            className=" w-4/6 text-2xl bg-white rounded-tl-lg rounded-bl-lg px-5 py-3"
            placeholder="Search products..."
            displayValue={query}
            onChange={handleChange}
          />
          <Link
            onClick={() => searchCategory()}
            to={`/search/:${searchProducts}`}
            className="px-5 py-3 bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white text-2xl rounded-tr-lg rounded-br-lg "
          >
            Search
          </Link>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery(query)}
          >
            <Combobox.Options className="mt-2">
              {filteredProduct.map((data) => (
                <Combobox.Option
                  onChange={() => setsearchProducts(data)}
                  key={data}
                  className={({ active }) =>
                    `relative text-lg px-5 py-2 w-4/6 capitalize bg-gray-100 ${
                      active
                        ? "bg-red-500 cursor-pointer text-white"
                        : "text-gray-900"
                    }`
                  }
                  value={data}
                >
                  {data}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div>
        <SearchResult searchProduct={searchProducts} />
      </div>
    </section>
  );
};

export default SearchComponent;
