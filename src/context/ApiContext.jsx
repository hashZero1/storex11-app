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
  const [category, setCategory] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      console.log(response.data.products);
      setSearchProducts(response.data.products);
    } catch (e) {
      alert("Sorry, item is not available");
    }
  };

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
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
