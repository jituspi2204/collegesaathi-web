import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import Tabs from "../components/tabs/Tabs";
import { UserContext } from "../context/userContext";

const AccountSettings = () => {
  const [user, setUser ] = useState({})

  const userDetails = useContext(UserContext)

  useEffect(() => {
    setUser(userDetails.user)
  }, [userDetails])

  return (
    <div>
      <Header title="Your Account" />

      <SubHeading title="Basic Details" />
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
      { user.rollno && <Tabs rollno={user.rollno}/>}
    </div>
  );
};

export default AccountSettings;
