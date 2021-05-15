import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import Header from "../../components/header/Header";

export const Login = () => {
  const [userType, setUserType] = useState("");

  return (
    <div>
      <Header title="Login" />
      <section className="flex flex-col items-center">
        <p className="mb-12 mt-12 font-semibold text-2xl">
          Welcome to College Saathi 🎉
        </p>
        <div className="w-64">
          <p className="mb-2 text-xs">Identify yourself as : </p>
          <div
            className={`${
              userType === "student"
                ? "bg-yellow-400 bg-opacity-25 border-2 border-yellow-400"
                : "border-tranparent"
            } p-2 rounded hover:bg-gray-600 mb-2`}
          >
            <input
              id="student"
              type="radio"
              name="user-type"
              value="student"
              onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="student" className="m-5 cursor-pointer">
              Student
            </label>
          </div>
          <div
            className={`${
              userType === "faculty"
                ? "bg-yellow-400 bg-opacity-25 border-2 border-yellow-400"
                : "border-tranparent"
            } p-2 rounded hover:bg-gray-600`}
          >
            <input
              id="faculty"
              type="radio"
              name="user-type"
              value="faculty"
              onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="faculty" className="m-5 cursor-pointer">
              Faculty
            </label>
          </div>
        </div>
        <div className="mt-10 w-64 flex flex-col items-center">
          <div className="bg-yellow-400 rounded flex flex-row items-center cursor-pointer">
            <AiFillGoogleCircle color="black" size="30px" />
            <div className=" px-3 py-2 text-black"> Login with Google</div>
          </div>
          <p className="mt-2 text-xs">
            Not have an account?{" "}
            <span className="font-bold cursor-pointer">Register here</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
