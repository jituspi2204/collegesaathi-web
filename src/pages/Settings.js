import React, { useEffect, useState, useContext } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import StudyMaterial from "./StudyMaterial";
import Result from "./Result";
import firebase from "../firebase_config";
import { UserContext } from "../context/userContext";
import { IoMdList } from "react-icons/io";
import {
  AiOutlineQuestionCircle,
  AiOutlineInstagram,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiFeedbackFill } from "react-icons/ri";
import axios from "axios";
const Search = () => {
  const userDetails = useContext(UserContext);
  const [searchType, setSearchType] = useState("result");
  const [photoURL, changePhotoUrl] = useState("");
  const [user, changeUser] = useState({ mySubjects: [] });
  useEffect(() => {
    changePhotoUrl(firebase.auth().currentUser.photoURL);
  }, []);
  useEffect(() => {
    changeUser({ ...userDetails.user, token: userDetails.token });
  }, []);

  const semesterChangeHandler = (e) => {
    axios
      .get("/update/current-semester?semester=" + e.target.value, {
        headers: {
          authorization: user.token,
        },
      })
      .then((data) => {
        userDetails.updateUser(data.data.user);
        let newUser = { ...user, ...data.data.user };
        changeUser(newUser);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div>
      <Header title="Account Settings" />
      <div className="flex flex-col items-start justify-start lg:w-4/6">
        <section className="flex flex-col p-2 rounded w-full bg-gray-700 mb-1">
          <SubHeading title="Your Details" />
          <div className="flex flex-row justiy-between">
            <div className="mr-4">
              <img
                src={photoURL}
                className="w-18 h-18 text-sm rounded"
                alt="User Image"
              />
            </div>
            <div className="flex flex-col justify-start align-start flex-auto">
              <p className="capitalize text-sm font-medium mb-1">{user.name}</p>
              <p className="text-xs font-medium text-gray-400 mb-1">
                {user.rollno}
              </p>
              <p className="lowecase text-xs font-medium text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-2 rounded w-full bg-gray-700 mb-1">
          <SubHeading title="Current Semester" />
          <select
            id="semester"
            value={user.currentSemester ? user.currentSemester : "1"}
            onChange={(e) => semesterChangeHandler(e)}
            className=" my-2 col-span-2 text-white rounded bg-gray-600 p-2 text-sm"
          >
            <option value="1">Semester - 1</option>
            <option value="2">Semester - 2</option>
            <option value="3">Semester - 3</option>
            <option value="4">Semester - 4</option>
            <option value="5">Semester - 5</option>
            <option value="6">Semester - 6</option>
            <option value="7">Semester - 7</option>
            <option value="8">Semester - 8</option>
          </select>
        </section>
        <section className="flex flex-col p-2 rounded w-full bg-gray-700 mb-1">
          <SubHeading title="Settings" />
          <div className="flex flex-row justify-start p-2 hover:bg-gray-600 rounded">
            <IoMdList size={28} color="#ffc404" />
            <p className="text-sm font-medium mb-1 ml-4">Update My Subjects</p>
          </div>
        </section>
        <section className="flex flex-col p-2 rounded w-full bg-gray-700 mb-1">
          <SubHeading title="Connect With Us" />
          <div className="flex flex-row justify-start p-2 hover:bg-gray-600 rounded">
            <AiOutlineQuestionCircle size={28} color="#ffc404" />
            <p className="text-sm font-medium mb-1 ml-4">
              Have Query, Contact Us
            </p>
          </div>
          <a
            href="https://forms.gle/QHCHTDwJsm2m3TEY8"
            className="cursor-pointer"
          >
            <div className="flex flex-row justify-start p-2 hover:bg-gray-600 rounded">
              <RiFeedbackFill size={28} color="#ffc404" />
              <p className="text-sm font-medium mb-1 ml-4">
                Feedback and Suggestion
              </p>
            </div>
          </a>
          <div className="flex flex-row justify-start p-2 hover:bg-gray-600 rounded">
            <AiOutlineInstagram size={28} color="#ffc404" />
            <p className="text-sm font-normal mb-1 ml-4">
              Connect us on Instagram
            </p>
          </div>
        </section>
        <section
          className="flex flex-row p-2 rounded w-full bg-gray-700 hover:bg-gray-600 cursor-pointer"
          onClick={() => {
            firebase.auth().signOut();
            localStorage.removeItem("token_collegesaathi");
          }}
        >
          <AiOutlineLogout size={28} color="#ffc404" className="mr-4" />
          <SubHeading title="Logout" />
        </section>
        <p className="text-xs text-center my-4 w-full">
          For query mail us at <span className="text-sm text-yellow-400">collegesaathi.india@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Search;
