import React from "react";
import NavComponent from "./NavComponent";
import AllProductsComponent from "./AllProductsComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";
import CatergoryComponent from "./CatergoryComponent";
import SearchBar from "./SearchBar";

const RootComponent = () => {
  return (
    <section className="">
      <div className="bg-blue-300">
        <NavComponent />
        <HeroComponent />
      </div>
      <SearchBar />
      <AllProductsComponent />
      <CatergoryComponent />
      <FooterComponent />
    </section>
  );
};

export default RootComponent;
