import React, { useContext, useState, Fragment } from "react";
import { ApiContext } from "../context/ApiContext";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

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
  const { searchProducts } = useContext(ApiContext);
  const [selectedPerson, setSelectedPerson] = useState(product[0]);
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
      <h1 className="text-3xl font-semibold">Trending Products</h1>
      {/* <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input onChange={handleChange} />
        <Combobox.Options>
          {filteredProduct.map((person) => (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox> */}
      <Combobox value={query} onChange={handleChange}>
        <div className="relative w-full">
          <Combobox.Input
            className="w-11/12 text-lg bg-gray-100 rounded-full px-5 py-3"
            placeholder="Search products..."
            displayValue={query}
            onChange={handleChange}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredProduct.map((companies) => (
                <Combobox.Option
                  key={companies}
                  className={({ active }) =>
                    `relative bg-gray-100 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                  value={companies}
                >
                  {companies}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      {/* <form className="relative lg:w-2/4  bg-gray-100 m-4 py-2 px-4 border-2 border-gray-400 rounded-lg">
        <input
          className="focus:outline-0 text-lg lg:w-11/12 h-8 bg-gray-100 "
          value={value}
          onChange={handleChange}
          placeholder="search products..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute top-[12px] text-gray-400 left-[330px] lg:left-[50em] w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form> */}
    </section>
  );
};

export default SearchComponent;
