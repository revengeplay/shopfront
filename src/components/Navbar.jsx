import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [search, setSearch] = useState(null);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" container mx-auto h-[70px]">
      <div className=" pl-[20px] pt-[10px] flex justify-between items-center ml-[25px]">
        {/* left */}
        <div className="flex-1 flex items-center">
          <div className="text-[14px] cursor-pointer ml-[25px]">검색</div>
          <div className=" border-[0.5px] border-solid border-gray-300 items-center flex ml-[25px] p-[5px]">
            <input
              className="border-none"
              type="text"
              name="searchkeyword"
              value={search}
              onChange={onChangeSearch}
            />
            <Link to={`/products/${setSearch}`}>
              <FiSearch className="text-gray-600" />
            </Link>
          </div>
        </div>

        {/* center */}
        <Link to="/">
          <div className="flex-1 text-center">
            <div className=" font-bold">SHOP.</div>
          </div>
        </Link>

        {/* right */}
        <div className="flex-1 flex items-center justify-end space-x-5">
          <Link to="/register">
            <div className="text-[14px] cursor-pointer">REGISTER</div>
          </Link>

          <Link to="/login">
            <div className="text-[14px] cursor-pointer">SIGN IN</div>
          </Link>

          <div className="text-[14px] cursor-pointer">
            <Link to="/cart">
              <div className="relative">
                <Cart />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
