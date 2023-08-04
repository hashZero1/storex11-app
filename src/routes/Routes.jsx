import React from "react";
import { Routes, Route } from "react-router-dom";
import RootComponent from "../components/AllProductsComponent";
import SearchResult from "../components/SearchResult";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<RootComponent />} />
      <Route path="/search/:id" element={<SearchResult />} />
    </Routes>
  );
};

export default Routers;
