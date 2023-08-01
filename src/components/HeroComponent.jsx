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
    <section className="w-11/12 m-auto h-[90vh]">
      <div className="mt-10 flex flex-col lg:flex-row relative ">
        <div className="mt-10 tracking-wider z-20 text-slate-800 w-11/12 m-auto">
          <h1 className="mt-[60px] lg:mt-[150px] text-4xl lg:text-7xl font-extrabold ">
            Welcome to,{" "}
            <span className="text-red-600 uppercase">store-X11</span>
          </h1>
          <h2 className="mt-2 lg:mt-8 text-3xl lg:text-6xl font-bold capitalize">
            the only store you'll ever need...
          </h2>
          <button
            onClick={handleScroll}
            className="mt-10 ml-2 px-12 py-4 rounded-full text-xl text-white font-semibold bg-red-600 hover:bg-gray-200 hover:text-black"
          >
            Browse Products
          </button>
        </div>
        <div className="absolute top-60 left-[12em] lg:top-20 lg:left-[64em] lg:right-10 z-10">
          <img src={HeroBG} alt="heroimage" />
        </div>
        {/* <div className="absolute lg:-top-36">
          <img
            className="ml-24 h-[600px] opacity-90 lg:h-full lg:ml-[22em] lg:w-5/6 "
            src={Background}
            alt="bgimage"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroComponent;
