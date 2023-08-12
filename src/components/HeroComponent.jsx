import React from "react";
import NavComponent from "./NavComponent";
import Background from "../Assets/hero-bg.png";
import HeroBG from "../Assets/hero-image.png";

const handleScroll = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroComponent = () => {
  return (
    <section className="xl:w-4/5 m-auto h-[90vh]">
      <div className="xl:mx-10 xl:mt-5 flex flex-col justify-between lg:flex-row  ">
        <div className="mt-5 xl:mt-10 tracking-wider text-slate-800 w-11/12 m-auto">
          <h1 className="mt-[60px] text-4xl lg:mt-[50px] 2xl:mt-[150px] xl:text-7xl font-extrabold ">
            Welcome to,{" "}
            <span className="text-red-600 text-6xl xl:text-7xl uppercase">
              store-X11
            </span>
          </h1>
          <h2 className="mt-2 lg:mt-8 text-3xl lg:text-5xl font-bold capitalize">
            the only store you'll ever need...
          </h2>
          <button
            onClick={handleScroll}
            className="mt-5 mb-10 px-5 py-2 xl:mt-10 xl:mb-0 xl:ml-2 xl:px-12 xl:py-4 rounded-full text-xl text-white font-semibold bg-red-600 hover:bg-gray-200 hover:text-black transition-all"
          >
            Browse Products
          </button>
        </div>
        <div className="lg:mt-10 2xl:mt-20 w-11/12 xl:w-[70%]  m-auto">
          <img src={HeroBG} alt="heroimage" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
