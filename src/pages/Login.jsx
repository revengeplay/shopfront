import React from "react";

const Login = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" w-[30%] p-[20px] bg-white">
        <div className=" font-light text-[24px]">로그인</div>
        <div className="flex flex-col">
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border "
            type="text"
            placeholder="email"
          />
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border "
            type="text"
            placeholder="password"
          />
        </div>
        <div className="flex justify-between mt-1 text-sm font-thin underline text-blue-500">
          <div>회원 등록</div>
          <div>이메일/비밀번호 찾기</div>
        </div>
        <div className="flex justify-end items-end">
          <button className="w-[35%] py-[15px] px-[20px] mt-1 bg-teal-500 text-white cursor-pointer">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
