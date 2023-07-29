import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [allProduct, setProducts] = useState(null);
  const [searchProducts, setsearchProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const empty = [];

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=8"
      );
      console.log(response.data);
      setProducts(response.data.products);
    }
    fetchData();
  }, []);

  //for Search product
  const searchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${product}`
      );
      setProduct(response.data.products);
    } catch (e) {
      alert("sorry item is not available");
    }
  };

  //for categories
  const fetchCategory = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${selectItem || "mens-watches"}`
    );

    setCategory(response.data.products);
  };

  const value = {
    allProduct,
    product,
    setProduct,
    searchProduct,
    setsearchProducts,
    category,
    fetchCategory,
    selectItem,
    setSelectItem,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
