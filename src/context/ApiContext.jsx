import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [allProduct, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a valid product name.");
      setSearchProducts([]);
      return;
    }

    try {
      setError(""); // Clear any previous errors
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );

      if (response.data.products.length === 0) {
        setError("No products found with this name. Try another search.");
        setSearchProducts([]);
      } else {
        setSearchProducts(response.data.products);
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
      setSearchProducts([]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=8"
      );

      setProducts(response.data.products);
    }
    fetchData();
  }, []);

  //for categories
  const fetchCategory = useMemo(async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${selectItem || "mens-watches"}`
    );

    setCategory(response.data.products);
  }, [selectItem]);

  const value = {
    allProduct,
    searchQuery,
    setSearchQuery,
    handleSearch,
    searchProducts,
    setSearchProducts,
    category,
    fetchCategory,
    selectItem,
    setSelectItem,
    error,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
