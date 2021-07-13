import React, { useState } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import StudyMaterial from "./StudyMaterial";
import Result from "./Result";
import WEBSITE from "../assets/images/website.svg";
import { Link } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";
const Search = () => {
  
  const [searchType, setSearchType] = useState("result");
  return (
    <div
      className="w-full flex flex-col justify-center items-center "
      style={{ height: "90vh" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center  lg:w-2/3 h-full ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center flex-start p-2">
          <Header title="Beta Version" />
          <h1 className="text-xl"> Under Development</h1>
          <p className="text-sm text-yellow-400 font-light">
            Few features of this application are still under development.</p>
          <Link className="cursor-pointer self-center" to="/">
            <p className="p-1 rounded-3xl bg-yellow-400 w-48 text-center my-4 text-black ">
              Go to Home Page
            </p>
          </Link>
          <p className="text-sm text-yellow-400 font-light ">
            To access all features of our application, you can download android
            APK
          </p>
          <a
            className="p-1 text-black rounded-3xl bg-yellow-400 w-48 text-center my-4 flex flex-row justify-center items-center cursor-pointer self-center"
            href="https://quiet-scrubland-22380.herokuapp.com/app/collegesaathiapp.apk"
          >
            <AiFillAndroid size="20" />
            <p className="">Download APK</p>
          </a>
        </div>
        <div className="w-full lg:w-1/2 order-1">
          <img src={WEBSITE} />
        </div>
      </div>
    </div>
  );
};

export default Search;
