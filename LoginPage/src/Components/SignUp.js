import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from './toast';
import { validate } from './validate.js';
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const focusHandler = event => {
    setTouched({ ...touched, [event.target.name]: true })
  }
  const submitHandler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("ثبت نام با موفقیت انجام شد.", "success")
    } else {
      notify("ثبت نام با خطا مواجه شد.", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true
      });
    }
  }
  const contextClass = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };
  useEffect(() => {
    setErrors(validate(data))
  }, [data, touched]);
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col bg-white text-slate-800 p-5 rounded-lg">
      <p className="text-sky-800 font-bold text-xl my-3">ثبت نام</p>
      <form onSubmit={submitHandler}>
        <label>نام</label>
        <input
          className="mb-4"
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.name && touched.name && (
          <p className="bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
            {errors.name}
          </p>
        )}
        <label>ایمیل</label>
        <input
          className="mb-4 font-['Shabnam']"
          type="text"
          name="email"
          value={data.email}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && (
          <p className="bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
            {errors.email}
          </p>
        )}
        <label>کلمه عبور</label>
        <input
          className="mb-4"
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.password && touched.password && (
          <p className="font-['Shabnam'] bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
            {errors.password}
          </p>
        )}
        <label>تکرار کلمه عبور</label>
        <input
          className="mb-4"
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="font-['Shabnam'] bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
            {errors.confirmPassword}
          </p>
        )}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <p className="mr-3">پذیرفتن قوانین و مقررات وب سایت</p>
        </div>
        {errors.isAccepted && touched.isAccepted && (
          <p className="font-['Shabnam'] bg-red-200 text-red-500 text-sm p-2 rounded-lg border-r-4 border-r-red-700 border-solid">
            {errors.isAccepted}
          </p>
        )}
        <div className="flex justify-between items-center my-4">
          <a
            href="#"
            className="text-sky-700 transition-all ease-in-out duration-500 hover:text-sky-500"
          >
            ورود
          </a>
          <button
            className="px-4 py-2 bg-sky-700 transition-all ease-in-out duration-500 hover:bg-sky-500 rounded-lg text-white cursor-pointer"
            type="submit"
          >
            {" "}
            ثبت نام{" "}
          </button>
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

export default SignUp;
