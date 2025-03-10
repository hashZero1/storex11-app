import React from "react";
import heroAnim from "../Assets/heroAnim.json";
import Lottie from "lottie-react";

const handleScroll = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroComponent = () => {
  return (
    <section className="h-[90vh] m-10 ">
      <div className=" flex flex-col justify-evenly items-center lg:flex-row  ">
        <div className=" text-slate-800 lg:w-[50%]">
          <h1 className=" text-4xl  xl:text-7xl font-extrabold text-[#06172E] ">
            Welcome to,{" "}
            <span className="text-blue-700 text-6xl xl:text-7xl uppercase">
              store-X11
            </span>
          </h1>
          <h2 className="mt-2 lg:mt-8 tracking-wide text-3xl lg:text-2xl text-[#06172e9b]  capitalize">
            your go-to destination for all your needs! We're here to provide you
            with everything you require in one convenient place.
          </h2>
          <button
            onClick={handleScroll}
            className="mt-5 mb-10 px-5 py-2 xl:mt-10 xl:mb-0 xl:ml-2 xl:px-12 xl:py-4 rounded-full text-xl text-white font-semibold bg-blue-700 hover:bg-gray-800  transition-all"
          >
            Browse Products
          </button>
        </div>
        <div className="w-[50%]">
          <Lottie animationData={heroAnim} />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
