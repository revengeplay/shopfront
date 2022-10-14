import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgShoppingCart, CgHeart } from "react-icons/cg";

const Product = ({ item }) => {
  return (
    <div className="flex flex-1 m-[5px] min-w-[280px] h-[350px] items-center justify-center bg-blue-50 relative">
      <div className="w-[200px] h-[200px] rounded-full bg-white absolute"></div>
      <img className=" h-3/4 z-20" src={item.img} alt="" />
      <div className="opacity-0 w-full h-full absolute bg-black z-30 flex justify-center items-center cursor-pointer hover:opacity-20">
        <CgShoppingCart className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-teal-100 hover:scale-110 " />
        <BiSearchAlt2 className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-teal-100 hover:scale-110" />
        <CgHeart className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-teal-100 hover:scale-110" />
      </div>
    </div>
  );
};

export default Product;
