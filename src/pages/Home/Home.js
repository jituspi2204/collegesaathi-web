import React, { useContext, useEffect, useState } from "react";
import { FiDownload, FiFileText } from "react-icons/fi";
import Header from "../../components/header/Header";
import SubHeading from "../../components/subHeading/SubHeading";
import { SubjectListContext } from "../../context/subjectListContext";
import { UserContext } from "../../context/userContext";
import firebase from "../../firebase_config";

const Home = () => {
  const [user, setUser] = useState({ reads: [] });

  // Using Contexts
  const subjectListSemWise = useContext(SubjectListContext)[
    "subjectListSemWise"
  ];
  const userDetails = useContext(UserContext);

  useEffect(() => {
    // console.log("user photo url ", firebase.auth().currentUser.photoURL);
    setUser(userDetails.user);
  }, [userDetails]);

  return (
    <div className="max-w-full">
      <Header title="Home" />

      <SubHeading title="Overview" />
      <div className="grid grid-cols-2 bg-gray-700 p-5 lg:w-2/3   mb-8 rounded">
        <p>Name</p>
        <p className="font-semibold">{user.name}</p>
        <p>Roll Number</p>
        <p className="font-semibold">{user.rollno}</p>
        <p>Course</p>
        <p className="font-semibold">{user.course}</p>
        <p>Percentage %</p>
        <p className="font-semibold">{user.percentage}</p>
        <p>Marks (Obtained / total )</p>
        <p className="font-semibold">
          {user.obtained} / {user.total}
        </p>
        <p>CGPA</p>
        <p className="font-semibold">{user.cgpa}</p>
        <p>College</p>
        <p className="font-semibold">{user.college}</p>
      </div>

      <SubHeading title="My Files" />
      {user.reads.map((file) => {
        return (
          <div
            key={file.name}
            className="bg-gray-700 p-5 mb-8 lg:w-2/3 rounded"
          >
            <div className="flex justify-between">
              <p className="font-semibold">
                {subjectListSemWise[file.semester]
                  ? subjectListSemWise[file.semester][file.subject]
                  : "Loading..."}
              </p>
              {/* <div className="w-6 h-6  bg-yellow-400 text-black rounded-full">
                <p className="text-center font-bold">1</p>
              </div> */}
            </div>
            <hr className="my-2" />
            <div className="flex p-2">
              <div>
                <FiFileText color="#FBBF24" size="80" />
              </div>
              <div className="mx-5">
                <p>{file.subject}</p>
                <p>
                  {file.type} | Semster - {file.semester}{" "}
                </p>
                <a href={file.url}>
                  <div className="flex w-max cursor-pointer bg-yellow-400 font-semibold text-black p-1 rounded">
                    <FiDownload />
                    <div className="mx-2"> Download</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
