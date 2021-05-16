import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import SubHeading from "../components/subHeading/SubHeading";
import { SubjectListContext } from "../context/subjectListContext";
import { UserContext } from "../context/userContext";
import useRankList from "../hooks/useRankList";

const Rank = () => {
  const [rankType, setRankType] = useState("college");
  const [ user, setUser ] = useState({})
  const [ token, setToken ] = useState('')
  const [rankNumber, setRankNumber] = useState("-1");


  // using react-query to fetch rank list
  const { data, status } = useRankList(user.rollno, rankType, token);

  // using contexts
  const userDetails = useContext(UserContext)
  const collegeList = useContext(SubjectListContext)["collegeList"];

  useEffect(() => {
    setUser(userDetails.user)
    setToken(userDetails.token)
  }, [userDetails])

  const changeRankListTypeHandler = (rankListType) => {
    setRankType(rankListType);
  };

  const getRankNumber = () => {
    if (data && data.students) {
      const foundStudent = data.students.find(
        (student) => student.rollno === user.rollno
      );
      return data.students.indexOf(foundStudent) + 1;
    }

    return -1;
  };

  return (
    <div>
      <Header title="Rank List" />
      {status === "loading" ? (
        <Loading loadingText="Fetching Rank list..." />
      ) : status === "error" ? (
        <p>Oops ! Something went wrong.</p>
      ) : (
        <>
          <div className="flex justify-between lg:w-3/4 ">
            <SubHeading title="Your Ranking" />
            <div className="flex px-2">
              <div
                onClick={() => changeRankListTypeHandler("college")}
                className="mr-2  cursor-pointer"
              >
                <p
                  className={`${
                    rankType === "college" &&
                    "bg-yellow-400 text-black font-semibold"
                  } px-2  rounded-md`}
                >
                  College
                </p>
              </div>
              <div
                onClick={() => changeRankListTypeHandler("university")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    rankType === "university" &&
                    "bg-yellow-400 text-black font-semibold"
                  } px-2  rounded-md`}
                >
                  University
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-700 p-5 lg:w-3/4  mb-8 rounded">
            <p className="font-semibold mb-2">
              {getRankNumber()}. {user.name} ({user.rollno}){" "}
            </p>
            <div className="grid grid-cols-2 ">
              <p>
                Percentage -{" "}
                <span className="font-semibold">{user.percentage}</span>
              </p>
              <p>
                CGPA - <span className="font-semibold">{user.cgpa}</span>
              </p>
            </div>
            <p>{user.college}</p>
          </div>

          <SubHeading title="Rank List" />
          {data.students.map((student, index) => {
            return (
              <div
                key={student._id}
                className="bg-gray-600 p-5 lg:w-3/4  mb-4 rounded"
              >
                <p className="font-semibold mb-2">
                  {index + 1}. {student.name} ({student.rollno}){" "}
                </p>
                <div className="grid grid-cols-2">
                  <p>
                    Percentage -{" "}
                    <span className="font-semibold">{student.percentage}</span>
                  </p>
                  <p>
                    CGPA - <span className="font-semibold">{student.cgpa}</span>
                  </p>
                </div>
                <p>{collegeList[student.rollno.slice(3, 6)]}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Rank;
