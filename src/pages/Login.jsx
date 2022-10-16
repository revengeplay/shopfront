import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  // const login = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         username: username,
  //         password: password,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       console.log("로그인");
  //       window.alert("로그인됨");
  //       navigate(-1);
  //     })
  //     .catch((err) => {
  //       window.alert("로그인실패");
  //       console.log(err);
  //     });
  // };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (user) {
      navigate(-1);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" w-[30%] p-[20px] bg-white">
        <div className=" font-light text-[24px]">로그인</div>
        <div className="flex flex-col">
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border "
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex flex:1 min-w-[40%] mt-[20px] mr-[10px] mb-0 ml-0 p-[10px] border "
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-1 text-sm font-thin underline text-blue-500">
          <div>회원 등록</div>
          <div>아이디/비밀번호 찾기</div>
        </div>
        <div className="flex justify-end items-end">
          <button
            className="w-[35%] py-[15px] px-[20px] mt-1 bg-teal-500 text-white cursor-pointer disabled:bg-green-500 disabled:cursor-not-allowed disabled:bg-green-500"
            // onClick={login}
            onClick={handleClick}
            disabled={isFetching}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
