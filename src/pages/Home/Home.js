import React, { useContext, useEffect, useState } from "react";
import { FiDownload, FiFileText } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { BsFileEarmarkPlus } from "react-icons/bs";
import Header from "../../components/header/Header";
import SubHeading from "../../components/subHeading/SubHeading";
import { SubjectListContext } from "../../context/subjectListContext";
import { UserContext } from "../../context/userContext";
import firebase from "../../firebase_config";
import { saveAs } from "file-saver";
import { useHistory } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState({
    reads: [],
    mySubjects: [],
    currentSemester: 1,
  });
  const history = useHistory();
  // Using Contexts
  const subjectListSemWise = useContext(SubjectListContext)[
    "subjectListSemWise"
  ];
  const userDetails = useContext(UserContext);
  const [subjectMap, changeSubjectMap] = useState({});
  useEffect(() => {
    // console.log("user photo url ", firebase.auth().currentUser.photoURL);
    setUser(userDetails.user);
    let user = userDetails.user;
    let userSubjects = user.mySubjects;
    let map = {};
    for (let i = 0; i < userSubjects.length; i++) {
      map[userSubjects[i]] = 0;
    }
    for (let i = 0; i < user.reads.length; i++) {
      map[user.reads[i].subject] += 1;
    }
    changeSubjectMap(map);
  }, [userDetails, subjectListSemWise]);


  // console.log("map", subjectListSemWise);
  let subjectBlock = user.mySubjects.map((subject, index) => {
    // console.log(subjectListSemWise[user.currentSemester]);
    let subjectName = subjectListSemWise[user.currentSemester][parseInt(subject)].split(
      "-"
    )[0];
    return (
      <div
        key={index}
        onClick={() => {
          history.push("/my-files/" + subject);
        }}
        className="flex flex-col justify-between items-center w-2s md:w-3s lg:w-4s my-1 bg-gray-700 p-1 rounded min-h-fix cursor-pointer group"
      >
        <p className="text-xl font-semibold group-hover:animate-bounce">
          {subject}
        </p>
        <p className="text-xs font-regular text-center group-hover:animate-bounce">
          {subjectName}
        </p>
        <div className="flex flex-row justify-center items-center group-hover:animate-bounce">
          <BsFileEarmarkPlus color="#ffc404" size={18} />
          <p className="text-sm font-bold text-yellow-400 mx-1">
            {" "}
            {subjectMap[subject]}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="max-w-full">
      <Header title="Home" />

      {/* <SubHeading title="Overview" />
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
      </div> */}

      <SubHeading title="My Study Material" />
      <div className="flex flex-row justify-between items-center w-full lg:w-5/6 flex-wrap">
        {subjectBlock}
      </div>
    </div>
  );
};

export default Home;

