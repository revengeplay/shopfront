import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Link to={`/products/${item.categories}`}>
      <div className="flex flex-1 m-[3px] h-[70vh] relative">
        <img className="w-full h-full object-cover" src={item.img} alt="" />
        <div className="flex absolute w-full h-full items-center justify-center flex-col top-0 left-0">
          <div className="text-white mb-[20px] font-bold text-3xl">
            {item.title}
          </div>
          <button className=" border-none p-[10px] bg-gray-300 cursor-pointer font-semibold">
            사러가기
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
