import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const search = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);
  return (
    <div>
      <Navbar />
      <div>Dresses</div>
      <div className="flex justify-between">
        <div className="flex m-[20px]">
          <div className=" text-lg font-semibold mr-[20px]">
            filter Products :
          </div>
          <select
            name="color"
            className=" border p-[10px] mr-[20px]"
            onChange={handleFilters}
          >
            <option disabled>color</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            name="size"
            className=" border p-[10px] mr-[20px]"
            onChange={handleFilters}
          >
            <option disabled>Size</option>
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
          <select
            className=" border p-[10px] mr-[20px]"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price(dasc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
