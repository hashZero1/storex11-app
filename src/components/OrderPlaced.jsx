import React from "react";
import delivery from "../Assets/delivery.gif";
import { Link } from "react-router-dom";
const OrderPlaced = () => {
  return (
    <div className="w-full md:h-[calc(100vh-210px)]  h-[calc(100vh-166px)] flex  flex-col items-center">
      <img className="md:h-[66%]" src={delivery} alt="orderplaced" />
      <h1 className="font-extrabold md:text-[2rem] text-center">
        Order Placed Successfully
      </h1>
      <Link
        to="/"
        type="button"
        className="bg-gradient-to-br from-orange-400 text-white mt-4 to-orange-500 w-100 md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
