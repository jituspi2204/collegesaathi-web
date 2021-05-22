import React, { useState } from "react";
import {
  AiFillAndroid,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import firebase from "../../firebase_config";
import BG_4 from "../../assets/images/bg_4.svg";
export const Login = () => {
  const [userType, setUserType] = useState("");

  const loginHandler = () => {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(googleProvider)
      .then((data) => {})
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <Header title="Login" />
      <div className="flex flex-row items-center justify-center bg-gray-700 rounded lg:w-5/6 flex-wrap">
        <section className="flex flex-col items-center lg:w-1/2 p-8">
          <img src={BG_4} />
        </section>
        <section className="flex flex-col items-center lg:w-1/2 p-8 rounded">
          <p className="mb-4 mt-12 font-bold text-md w-64">
            To continue, login with google
          </p>
          <div className="w-64">
            <p className="mb-2 text-xs">Identify yourself as : </p>
            <div
              className={`${
                userType === "student"
                  ? "bg-yellow-400 bg-opacity-25 border-2 border-yellow-400"
                  : "border-tranparent"
              } p-2 rounded hover:bg-gray-600 mb-2 bg-gray-500`}
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
              } p-2 rounded hover:bg-gray-600 bg-gray-500`}
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
            <div
              onClick={loginHandler}
              className="bg-yellow-400 rounded flex flex-row items-center cursor-pointer w-full justify-center mb-4"
            >
              <AiFillGoogleCircle color="black" size="30px" />
              <div className=" px-3 py-2 text-black"> Login with Google</div>
            </div>

            <a
              href="https://quiet-scrubland-22380.herokuapp.com/app/collegesaathiapp.apk"
              className="bg-yellow-400 rounded flex flex-row items-center cursor-pointer w-full justify-center"
            >
              <AiFillAndroid color="black" size="30px" />
              <div className=" px-3 py-2 text-black"> Download APK</div>
            </a>
          </div>
        </section>
        <h1 className="text-sm font-normal my-4 text-center w-full">
          Designed and Developed by
          <a href="https://www.linkedin.com/in/jitendra-sharma-3262ba203/" target="_blank" rel="noreferrer" >
          <span className="text-yellow-400 font-semibold mx-1 cursor-pointer">
            Jitendra Sharma 
          </span>
          </a>
          &&
          <a href="https://ankitvashisht12.github.io/" target="_blank" rel="noreferrer">
          <span className="text-yellow-400 font-semibold ml-1 cursor-pointer">
            Ankit Vashisht
          </span>
          </a>

        </h1>
        <div className="flex flex-row justify-center items-center my-1">
          <p className="text-xs">Connect with us on </p>

          <a
            className="cursor-pointer mx-2"
            href="https://www.instagram.com/collegesaathi"
            target="blank"
          >
            <AiFillInstagram size="24" className="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
