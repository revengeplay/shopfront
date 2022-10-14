import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex flex-1 m-[3px] h-[70vh] relative">
      <img className="w-full h-full object-cover" src={item.img} alt="" />
      <div className="flex absolute w-full h-full items-center justify-center flex-col">
        <div className="text-white text-4xl font-extrabold mb-[20px]">
          {item.title}
        </div>
        <button className=" border-none p-[10px] bg-gray-300 cursor-pointer font-semibold">
          사라
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
