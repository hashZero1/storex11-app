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
    <section className="h-screen w-full p-4 lg:p-12 m-auto">
      <div className=" flex flex-col justify-evenly lg:flex-row items-center lg:justify-between">
        <div className="w-ful lg:w-[45%]">
          <div className="flex flex-wrap items-baseline">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#06172E] ">
              Welcome to,
            </h1>
            <h2 className="text-blue-700 text-5xl md:text-6xl xl:text-7xl font-black uppercase">
              store-X11
            </h2>
          </div>
          <p className="mt-2 lg:mt-5 tracking-wide text-lg lg:text-xl 2xl:text-2xl text-[#06172e9b]  capitalize">
            your one-stop shop for all your needs! We’re excited to have you
            here and can’t wait to help you find everything you’re looking for,
            all in one convenient place. Enjoy your visit!
          </p>
          <button
            onClick={handleScroll}
            className="rounded-xl mt-6 py-3 px-8 lg:px-10 lg:py-5 lg:mt-10 text-xl text-white font-semibold bg-blue-700 hover:bg-gray-800  transition-all"
          >
            Browse Products
          </button>
        </div>
        <div className="w-full lg:w-[52%]">
          <Lottie animationData={heroAnim} />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
