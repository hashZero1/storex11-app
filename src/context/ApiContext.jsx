import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [allProduct, setProducts] = useState(null);
  const [searchProducts, setsearchProducts] = useState([]);
  const [category, setCategory] = useState(null);

  const [selectItem, setSelectItem] = useState(null);

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
  const searchCategory = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchProducts}`
      );
      console.log(response.data);
      setsearchProducts(response.data);
    } catch (e) {
      alert("sorry item is not available");
    }
  };

  //for categories
  const fetchCategory = useMemo(async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${selectItem || "mens-watches"}`
    );

    setCategory(response.data.products);
  }, [selectItem]);

  const value = {
    allProduct,
    searchCategory,
    searchProducts,
    setsearchProducts,
    category,
    fetchCategory,
    selectItem,
    setSelectItem,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
