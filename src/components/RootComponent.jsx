import React from "react";
import NavComponent from "./NavComponent";
import AllProductsComponent from "./AllProductsComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";
import CatergoryComponent from "./CatergoryComponent";

const RootComponent = () => {
  return (
    <section className="">
      <div className="bg-blue-300">
        <NavComponent />
        <HeroComponent />
      </div>

      <AllProductsComponent />
      <CatergoryComponent />
      <FooterComponent />
    </section>
  );
};

export default RootComponent;
