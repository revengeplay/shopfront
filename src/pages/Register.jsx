import React from "react";

const Register = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" w-[40%] p-[20px] bg-white">
        <div className=" font-light text-[24px]">계정등록</div>
        <div className="flex flex-wrap">
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border"
            type="text"
            placeholder="name"
          />
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border"
            type="text"
            placeholder="email"
          />
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border"
            type="text"
            placeholder="password"
          />
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border"
            type="text"
            placeholder="confirm password"
          />
        </div>
        <div className=" text-[12px] my-[20px] mx-0">~~~~~</div>
        <div className="flex justify-end items-end">
          <button className="w-[40%] py-[15px] px-[20px] bg-teal-500 text-white cursor-pointer">
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
