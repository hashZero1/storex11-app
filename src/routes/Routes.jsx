import React from "react";
import { Routes, Route } from "react-router-dom";
import RootComponent from "../components/AllProductsComponent";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<RootComponent />} />
    </Routes>
  );
};

export default Routers;
