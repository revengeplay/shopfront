import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div>Dresses</div>
      <div className="flex justify-between">
        <div className="flex m-[20px]">
          <div className=" text-lg font-semibold mr-[20px]">
            filter Products :
          </div>
          <select className=" border p-[10px] mr-[20px]">
            <option disabled selected>
              color
            </option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className=" border p-[10px] mr-[20px]">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="flex m-[20px]">
          <div className=" text-lg font-semibold mr-[20px]">
            Sort Products :
          </div>
          <select className=" border p-[10px] mr-[20px]">
            <option selected>Newest</option>
            <option>Price(asc)</option>
            <option>Price(dasc)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductList;
