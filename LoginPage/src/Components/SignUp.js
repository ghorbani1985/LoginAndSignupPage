import React, { useState, useEffect, useRef } from "react";

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
  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, []);
  return (
    <div className="w-1/3 flex flex-col bg-white text-slate-800 p-5 rounded-lg">
      <p className="text-sky-800 font-bold text-xl my-3">ثبت نام</p>
      <form>
        <label>نام</label>
        <input
          ref={inputName}
          className="mb-4"
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
        />
        <label>ایمیل</label>
        <input
          className="mb-4 font-['Shabnam']"
          type="text"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
        <label>کلمه عبور</label>
        <input
          className="mb-4"
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
        <label>تکرار کلمه عبور</label>
        <input
          className="mb-4"
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={changeHandler}
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
          />
          <p className="mr-3">پذیرفتن قوانین و مقررات وب سایت</p>
        </div>
        <div className="flex justify-between items-center">
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
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
