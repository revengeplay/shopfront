import React from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      {/* Wrapper */}
      <div className="p-[20px]">
        <div className=" font-light text-center">Your Bag</div>
        {/* top */}
        <div className="flex items-center justify-between p-[20px]">
          <div className="p-[10px] font-semibold cursor-pointer"> Continue</div>

          <button className="p-[10px] font-semibold cursor-pointer bg-black text-white">
            결제
          </button>
        </div>
        {/* top */}
        {/* bottom */}
        <div className="flex justify-between">
          <div className="w-3/4">
            {/* 상품 */}
            {cart.products.map((product) => (
              <div className="flex justify-between">
                <div className="w-1/2 flex">
                  <img className="w-[200px]" src={product.img} alt="" />
                  <div className="p-[20px] flex flex-col justify-around">
                    <div>
                      <b>상품 </b>
                      {product.title}
                    </div>
                    <div>
                      <b>아이디 </b>
                      {product._id}
                    </div>
                  </div>
                </div>
                <div className="w-1/4 flex items-center justify-center flex-col mb-[20px]">
                  <div className="flex ">
                    <HiMinus className="my-auto" />
                    <div className="text-[24px] mx-2">{product.quantity}</div>
                    <HiPlus className="my-auto" />
                  </div>
                  <div className=" text-[30px] font-extralight">
                    {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            <hr className=" border-gray-400 my-2" />

            {/* 상품 */}
          </div>
          <div className="w-1/4 border-[0.5px] border-solid border-gray-300 rounded-lg p-[20px]">
            <div className=" font-extralight">요약</div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>Subtotal</div>
              <div>{cart.total}</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>~</div>
              <div>~</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>~</div>
              <div>~</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>~</div>
              <div>~</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>total</div>
              <div>{cart.total}</div>
            </div>
            <button className="w-full p-[10px] bg-black text-white">
              결제
            </button>
          </div>
        </div>
        {/* bottom */}
      </div>
    </div>
  );
};

export default Cart;
