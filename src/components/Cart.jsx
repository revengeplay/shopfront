import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <div>
      <AiOutlineShoppingCart className="text-[24px]" />
      <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-3 left-3 text-center leading-5">
        2
      </span>
    </div>
  );
};

export default Cart;
