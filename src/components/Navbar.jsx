import React from "react";
import { FiSearch } from "react-icons/fi";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className=" container mx-auto h-[60px]">
      <div className=" pl-[20px] pt-[10px] flex justify-between items-center ml-[25px]">
        {/* left */}
        <div className="flex-1 flex items-center">
          <div className="text-[14px] cursor-pointer ml-[25px]">EN</div>
          <div className=" border-[0.5px] border-solid border-gray-300 items-center flex ml-[25px] p-[5px]">
            <input className="border-none" type="text" />
            <FiSearch className="text-gray-600" />
          </div>
        </div>

        {/* center */}
        <div className="flex-1 text-center">
          <div className=" font-bold">SHOP.</div>
        </div>

        {/* right */}
        <div className="flex-1 flex items-center justify-end space-x-5">
          <div className="text-[14px] cursor-pointer">REGISTER</div>
          <div className="text-[14px] cursor-pointer">SIGN IN</div>
          <div className="text-[14px] cursor-pointer">
            <div className="relative">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
