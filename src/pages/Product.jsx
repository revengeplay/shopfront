import React, { useEffect, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <div>
      <Navbar />
      <div className="p-[50px] flex">
        {/* img con */}
        <div className="flex flex-1">
          <img className="w-[90vh] h-full" src={product.img} alt="" />
        </div>
        {/* info con */}
        <div className="flex flex-col flex-1 py-0 px-[50px] ">
          <div className="font-extralight">{product.title}</div>
          <div className=" my-[20px] mx-0">{product.desc}</div>
          <div className=" font-thin text-4xl">{product.price}</div>

          {/* add con */}
          <div className="w-1/2 flex items-center justify-between">
            <div className="flex items-center font-bold">
              <HiMinus size={30} onClick={() => handleQuantity("dec")} />
              <div className="w-[30px] h-[30px] border rounded-xl flex items-center justify-center my-0 mx-[5px]">
                {quantity}
              </div>
              <HiPlus size={30} onClick={() => handleQuantity("inc")} />
            </div>
            <button
              className="p-[15px] border-solid border-[2px] border-teal-500"
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
