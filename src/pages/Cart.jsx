import React from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      {/* Wrapper */}
      <div className="p-[20px]">
        <div className=" font-light text-center">Your Bag</div>
        {/* top */}
        <div className="flex items-center justify-between p-[20px]">
          <div className="p-[10px] font-semibold cursor-pointer"> Continue</div>
          <div className="">
            <div className="underline cursor-pointer my-0 mx-[10px]">
              bag(2)
            </div>
            <div className="underline cursor-pointer my-0 mx-[10px]">
              wish(0)
            </div>
          </div>
          <button className="p-[10px] font-semibold cursor-pointer bg-black text-white">
            결제
          </button>
        </div>
        {/* top */}
        {/* bottom */}
        <div className="flex justify-between">
          <div className="w-3/4">
            {/* 상품 */}
            <div className="flex justify-between">
              <div className="w-1/2 flex">
                <img
                  className="w-[200px]"
                  src="https://lh3.googleusercontent.com/FkEOFSg0_CLISVX2mP1zc-P7-wQFBRvZ4p3gJ7zwPfj2ajVV-O_7PAv3I_vT9eKfvI8rfOkG-h00r59Ii3JD2issTs581YMbEGtLyjJJGBxU5GA_BmXDn3D2gqoNR77vUwwkWzG4EBwhXaPWukq2uoW1vhLiY8kU3191tpRLZiVttmQdYO6TLqkOon7q3qxByKaTSLV9NHD7NNGSIXWb7IgvNIxYqqGSI4o9WZIhbHm49FKWM1i1P7C04_veGZuh_qVwgxE254seXSev5LrO6447el7h5UUtl7Vo27zXSF05J3IMvQO3dHexZgTjsowpAbp5K7O6W3Cqut67hi_q-VNBA3R1JVk3WXuaY7wp59n8GssTv9gbIr-mGi6Y5UGd-kaUyB00H75Bb2TMcRE_0PN-trvXLxzyU-LyAY7e-N6jzwzt1LM6NkoUDR7vfhtZmTEVAxnA85rzHF2i-RIgbkFCs7JqX3BIwt5pkj1CJ2o4MwKdlF3rRXesXzB3RQ6R2UdsJZNYednVnEoW0oZpGcqQqafS7mC5wscvQnugy6eD_6hzdFoN9C6ng5qSvb7_Xt_m4ASk1qxwfDLVoSoWVlvpUOb0EDkta6I_uBJltL_6xhHGCnNtxmWg9ga0Pw5tNKf4wSbF4MqPDbVQWDqU0NwDimliwmmxoi5K6VSO4QG_cdOy6aiOUQNYUl-Xl2_SAxYCigulzawSvlB4M0NCSPTy_DHYdx3VaLkdR8zWth0mJXpXcGAXEcyu2yYFPHsQCJaaEDU9eJaSyWgQYRe0sOFb76NAcpYUcAmkB5Z4WAalQcZ7KiZeaW94RXc6wtHqRP_hZidNTjqVHnvuX0wZD-DZjfWgT_LB1frOuJGKlt0l6wjpxqU2dUzKux8U9exY47ezvwd-WsYOExtWm7mzIEPa3Bxtt7yeesTbuhvmTVuuUQbTJPmQga72uldz23-E7SGKBIR_ZxMbPW5mDYBWpqXyh0U-RqVtGR5mINmaAFcDPBgKuyALRrbn8oZcwHk2mQjZOv-S8UM-V9L1cg=w1455-h970-no?authuser=0"
                  alt=""
                />
                <div className="p-[20px] flex flex-col justify-around">
                  <div>
                    <b>프로덕트</b>프로덕트이름
                  </div>
                  <div>
                    <b>아이디</b>아이디이름
                  </div>
                  <div className="w-[20px] h-[20px] rounded-full bg-black"></div>
                  <div>
                    <b>사이즈</b>사이즈이름
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex items-center justify-center flex-col mb-[20px]">
                <div className="flex ">
                  <HiMinus className="my-auto" />
                  <div className="text-[24px] mx-2">2</div>
                  <HiPlus className="my-auto" />
                </div>
                <div className=" text-[30px] font-extralight">20</div>
              </div>
            </div>

            <hr className=" border-gray-400 my-2" />

            <div className="flex justify-between">
              <div className="w-1/2 flex">
                <img
                  className="w-[200px]"
                  src="https://lh3.googleusercontent.com/FkEOFSg0_CLISVX2mP1zc-P7-wQFBRvZ4p3gJ7zwPfj2ajVV-O_7PAv3I_vT9eKfvI8rfOkG-h00r59Ii3JD2issTs581YMbEGtLyjJJGBxU5GA_BmXDn3D2gqoNR77vUwwkWzG4EBwhXaPWukq2uoW1vhLiY8kU3191tpRLZiVttmQdYO6TLqkOon7q3qxByKaTSLV9NHD7NNGSIXWb7IgvNIxYqqGSI4o9WZIhbHm49FKWM1i1P7C04_veGZuh_qVwgxE254seXSev5LrO6447el7h5UUtl7Vo27zXSF05J3IMvQO3dHexZgTjsowpAbp5K7O6W3Cqut67hi_q-VNBA3R1JVk3WXuaY7wp59n8GssTv9gbIr-mGi6Y5UGd-kaUyB00H75Bb2TMcRE_0PN-trvXLxzyU-LyAY7e-N6jzwzt1LM6NkoUDR7vfhtZmTEVAxnA85rzHF2i-RIgbkFCs7JqX3BIwt5pkj1CJ2o4MwKdlF3rRXesXzB3RQ6R2UdsJZNYednVnEoW0oZpGcqQqafS7mC5wscvQnugy6eD_6hzdFoN9C6ng5qSvb7_Xt_m4ASk1qxwfDLVoSoWVlvpUOb0EDkta6I_uBJltL_6xhHGCnNtxmWg9ga0Pw5tNKf4wSbF4MqPDbVQWDqU0NwDimliwmmxoi5K6VSO4QG_cdOy6aiOUQNYUl-Xl2_SAxYCigulzawSvlB4M0NCSPTy_DHYdx3VaLkdR8zWth0mJXpXcGAXEcyu2yYFPHsQCJaaEDU9eJaSyWgQYRe0sOFb76NAcpYUcAmkB5Z4WAalQcZ7KiZeaW94RXc6wtHqRP_hZidNTjqVHnvuX0wZD-DZjfWgT_LB1frOuJGKlt0l6wjpxqU2dUzKux8U9exY47ezvwd-WsYOExtWm7mzIEPa3Bxtt7yeesTbuhvmTVuuUQbTJPmQga72uldz23-E7SGKBIR_ZxMbPW5mDYBWpqXyh0U-RqVtGR5mINmaAFcDPBgKuyALRrbn8oZcwHk2mQjZOv-S8UM-V9L1cg=w1455-h970-no?authuser=0"
                  alt=""
                />
                <div className="p-[20px] flex flex-col justify-around">
                  <div>
                    <b>프로덕트</b>다른거임
                  </div>
                  <div>
                    <b>아이디</b>아이디다름
                  </div>
                  <div className="w-[20px] h-[20px] rounded-full bg-black"></div>
                  <div>
                    <b>사이즈</b>사이즈다름
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex items-center justify-center flex-col mb-[20px]">
                <div className="flex ">
                  <HiMinus className="my-auto" />
                  <div className="text-[24px] mx-2">2</div>
                  <HiPlus className="my-auto" />
                </div>
                <div className=" text-[30px] font-extralight">20</div>
              </div>
            </div>

            {/* 상품 */}
          </div>
          <div className="w-1/4 border-[0.5px] border-solid border-gray-300 rounded-lg p-[20px]">
            <div className=" font-extralight">요약</div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>a</div>
              <div>20</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>b</div>
              <div>30</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>c</div>
              <div>40</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>dis</div>
              <div>-8</div>
            </div>
            <div className="my-[30px] mx-0 flex justify-between">
              <div>total</div>
              <div>90</div>
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
