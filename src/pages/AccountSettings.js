import React, { useContext, useEffect, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import Tabs from "../components/tabs/Tabs";
import { UserContext } from "../context/userContext";

const AccountSettings = () => {
  const [user, setUser] = useState({});

  const userDetails = useContext(UserContext);

  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);

  return (
    <div>
      <Header title="Report Card" />

      <div className="flex flex-row justify-between items-center w-full lg:w-2/3">
        <SubHeading title="Basic Details" />
        <Link to="/rank-list">
          <FiTrendingUp size="20" />
        </Link>
      </div>
      <div className="grid grid-cols-2 bg-gray-700 p-5 lg:w-2/3  text-sm mb-8 rounded">
        <p>Name</p>
        <p className="font-medium">{user.name}</p>
        <p>Roll Number</p>
        <p className="font-medium">{user.rollno}</p>
        <p>Course</p>
        <p className="font-medium">{user.course}</p>
        <p>Percentage %</p>
        <p className="font-medium">{user.percentage}</p>
        <p>Marks (Obtained / total )</p>
        <p className="font-medium">
          {user.obtained} / {user.total}
        </p>
        <p>CGPA</p>
        <p className="font-medium">{user.cgpa}</p>
        <p>College</p>
        <p className="font-medium">{user.college}</p>
      </div>
      {user.rollno && <Tabs rollno={user.rollno} />}
    </div>
  );
};

export default AccountSettings;
