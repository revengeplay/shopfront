import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="p-[50px] flex">
        {/* img con */}
        <div className="flex flex-1">
          <img
            className="w-[90vh] h-full"
            src="https://lh3.googleusercontent.com/PYpPysjo8jS1_bsDxyfRjutxhzBwK5teVtQJFgcyQ3HwU18sluRfwUTQ6cdqc8y_C5Gjo3K180g4ndvaonNFMA_QieQZaXTiP9JYqQw5frGiqTri13_inNiPrLIbA0QOmElecHjqMa0k1Kqq4nUSda63JA8wUmL_4TIaKQRa5cjbvhgGzkyXeKh34T0Rzn1truT0qkx1exlZawVM_H4eCg0cnyDCGe4Zxx2s7SxzklKaum6Oq1ZYnxCqnzKKczUDLLghSTKzFO5iVumn-yyxzOqnDP1yYvVGwmAiQIvS-MqKvKgvkClhOEN7V90TpVhf6_gmyI0V0qs2j69lTeexaE7-gCZtO9I7Gq7vErhzpih1lUKXuld0-Er3iwNsXj0GOwyYDcCnSOFSo_lZYFX2vNBhYiedFZgeRRxrGqMBo0duQ89zMEPsgePKIUGE2gusBXslccxyvLr-5JHkGRlW-ETWfPt-qJUpn73WXoYH2PGnZdVpaH1BEp2JUo5W4wG3Wv1k6jseBnHFSq0YSKj0UZ42g0E1_9GO7iGhqGW5_RDAmaqLIIXL66HzDPgtewkt09h9jTlhHbfyeA1HvROFe0ExAcEzpWy3uQSHtSDUr26PIOtwB8uOP1dRTgyzGK4p8mDleykOKDK0_cT_TyDk3-lc_Y1MQXgN1sKldhq8WBRQul17Opbbw-J-sA4cnDIMVelz6EoBs3bTqNEC1FHZ3GxO0bLFnotQ-G0buROO4BkX31ffhWNf-FgsKHHZM6-ySJgjX8QoMllKNDWRCU_Gkn7TgoWuPjHuE7T5oZ6Nmy10zbG-CIcXlQWWN2h_NqxnMAcc9PbpeVBY8_Y76NMSvpmPirqg_f8nPk03IdQBQgENHq4TJX38jNmBQST6lgWFFXW3wAnR9w3W5T0quHZeEb1i559RqK9o7tPUqE0pgK0-YRYHhK9rx2r5jzkUY50cm6NC0LoLao4xQU56OWQL54S91TI6FQCoO7LV1EW0CgWcG_UUGIxTWzI2Tl32Vhb1NejZqD8lw8OtF63wsQ=w1913-h970-no?authuser=0"
            alt=""
          />
        </div>
        {/* info con */}
        <div className="flex flex-col flex-1 py-0 px-[50px] ">
          <div className="font-extralight">대충 제목</div>
          <div className=" my-[20px] mx-0">대충 상세설명</div>
          <div className=" font-thin text-4xl">20</div>
          {/* filter con */}
          <div className="w-1/2 my-[30px] mx-0 flex justify-between">
            <div className="flex items-center">
              <div className=" font-extralight text-[20px]">Color</div>
              <div className=" w-[20px] h-[20px] rounded-full my-0 mx-[5px] cursor-pointer bg-black" />
              <div className=" w-[20px] h-[20px] rounded-full my-0 mx-[5px] cursor-pointer bg-sky-900" />
              <div className=" w-[20px] h-[20px] rounded-full my-0 mx-[5px] cursor-pointer bg-gray-500" />
            </div>
            <div className="flex items-center">
              <div className=" font-extralight text-[20px]">Size</div>
              <div className="ml-[10px] p-[5px]">
                <div>XS</div>
                {/* <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option> */}
              </div>
            </div>
          </div>
          {/* add con */}
          <div className="w-1/2 flex items-center justify-between">
            <div className="flex items-center font-bold">
              <HiMinus size={30} />
              <div className="w-[30px] h-[30px] border rounded-xl flex items-center justify-center my-0 mx-[5px]">
                1
              </div>
              <HiPlus size={30} />
            </div>
            <button className="p-[15px] border-solid border-[2px] border-teal-500">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
