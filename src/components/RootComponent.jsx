import React from "react";
import NavComponent from "./NavComponent";
import AllProductsComponent from "./AllProductsComponent";
import FooterComponent from "./FooterComponent";
import HeroComponent from "./HeroComponent";
import CatergoryComponent from "./CatergoryComponent";

const RootComponent = () => {
  return (
    <section className="bg-gradient-to-r from-purple-200 via-red-300 to-orange-300 -z-40">
      <NavComponent />
      <HeroComponent />
      <AllProductsComponent />
      <CatergoryComponent />
      <FooterComponent />
    </section>
  );
};

export default RootComponent;
