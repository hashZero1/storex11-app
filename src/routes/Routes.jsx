import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import OrderPlaced from "../components/OrderPlaced";
import RootComponent from "../components/RootComponent";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<RootComponent />} />
      <Route path="/search/:name" element={<SearchResult />} />
      <Route path="/order" element={<OrderPlaced />} />
    </Routes>
  );
};

export default Routers;
