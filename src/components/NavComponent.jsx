import React from "react";

const NavComponent = () => {
  return (
    <nav className="">
      <div className="pt-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://i.ibb.co/bPG5Y9K/logo-no-background.png"
            className="h-10 mr-3"
            alt="Logo"
          />
        </a>
        <div className="px-10 py-2 rounded-3xl text-white font-semibold bg-red-600 hover:bg-gray-200 hover:text-black">
          <button>Sign IN</button>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
