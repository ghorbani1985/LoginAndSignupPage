import React, { useState, useEffect } from "react";
import useTitle from './../Hooks/useTitle';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
import { notify } from "./toast";
import { validate } from "./validate.js";
import eye from "./../assets/images/svg/eye.svg";
import eyeSlash from "./../assets/images/svg/eyeSlash.svg";
const Login = () => {
  useTitle("ورود به حساب کاربری");
  const [data, setData] = useState({
    email: "",
    password: ""
  });
 const changeHandler = (event) => {
   setData({ ...data, [event.target.name]: event.target.value });
 };
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("ورود به حساب کاربری", "success");
    } else {
      notify("مقدار های وارد شده صحیح نمی باشد.", "error");
      setTouched({
        email: true,
        password: true
      });
    }
  };
  const contextClass = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };
  useEffect(() => {
    setErrors(validate(data , "login"));
  }, [data, touched]);
  /* show password */
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col bg-[#F6FBF9] text-sky-800 p-5 rounded-2xl shadow-lg z-10">
      <p className="text-sky-800 flex justify-center items-center font-bold text-2xl my-3">
        ورود به حساب کاربری
      </p>
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <label>ایمیل</label>
          <input
            className={
              errors.email && touched.email
                ? "focus:outline-red-300 focus:ring-red-500 font-['Shabnam']"
                : "focus:outline-green-300 focus:ring-green-500 font-['Shabnam']"
            }
            type="text"
            name="email"
            placeholder="لطفا ایمیل خود را وارد نمایید"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && (
            <p className="bg-red-200 mt-2 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
              {errors.email}
            </p>
          )}
        </div>
        <div className="my-4">
          <label>کلمه عبور</label>
          <div className="relative">
            <input
              className={
                errors.password && touched.password
                  ? "focus:outline-red-300 focus:ring-red-500 pl-9 font-['Shabnam']"
                  : "focus:outline-green-300 focus:ring-green-500 pl-9 font-['Shabnam']"
              }
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="لطفا کلمه عبور خود را وارد نمایید"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {passwordShown ? (
              <img
                src={eyeSlash}
                alt="eyeSlash"
                onClick={togglePassword}
                className="w-6 h-6 absolute top-[0.65rem] left-2"
              />
            ) : (
              <img
                src={eye}
                alt="eye"
                onClick={togglePassword}
                className="w-6 h-6 absolute top-[0.65rem] left-2"
              />
            )}
          </div>
          {errors.password && touched.password && (
            <p className="font-['Shabnam'] mt-2 bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
              {errors.password}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center my-4">
          <button
            className="px-6 py-2 bg-green-600 transition-all ease-in-out duration-500 hover:bg-green-800 rounded-lg text-white cursor-pointer"
            type="submit">
            ورود به حساب کاربری
          </button>
        </div>
        <div className="flex justify-center items-center my-4">
          <p> حساب کاربری ندارید؟ </p>
          <Link 
            to="/signup"
            className="text-sky-500 mr-2 transition-all ease-in-out duration-500 hover:text-sky-800">
            ثبت نام
          </Link>
        </div>
      </form>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
    </div>
  );
};

export default Login;
