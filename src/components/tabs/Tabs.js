import React, { useContext, useEffect, useState } from "react";
import SubHeading from "../subHeading/SubHeading";
import useMarks from "../../hooks/useMarks";
import filterPaperIDs from "../../utils/filterPaperIDs";
import { SubjectListContext } from "../../context/subjectListContext";
import getSubjectsList from "../../utils/getSubjectsList";

const Tabs = ({ rollno }) => {
  const [toggleView, setToggleView] = useState(0);
  const [semester, setSemester] = useState(null);
  const [semesters, setSemesters] = useState([]);
  const [pprIds, setPprIds] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // Using react-query to fetch data
  const { data, status, error } = useMarks(rollno);

  // using Subject List Context
  const subjectsListSemWise = useContext(SubjectListContext);

  const toggleViewHandler = (index) => {
    setToggleView(index);
  };

  useEffect(() => {
    if (status === "success") {
      let semester = data.semesters.filter(
        (sem) => sem.semester === toggleView + 1
      )[0];
      let pprIds = filterPaperIDs(semester);

      console.log("USE EFFECT", semesters, toggleView, pprIds)
      setSemesters(data.semesters);
      setSemester(semester);
      setPprIds(pprIds);

      setSubjects(
        getSubjectsList(pprIds, subjectsListSemWise, semester, toggleView + 1)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data, toggleView]);

  console.log("Subjects ", subjects);
  console.log("ppr id", pprIds);

  const tabItems = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];

  const tabItemJsx = tabItems.map((tab, index) => {
    return (
      <div
        key={`${index}+${tab}`}
        onClick={() => toggleViewHandler(index)}
        className={`${
          toggleView === index ? "bg-yellow-400 font-semibold" : "bg-gray-50 "
        } text-black cursor-pointer w-max p-1 text-xs rounded-md mr-2`}
      >
        <p>{tab}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="flex mb-2">{tabItemJsx}</div>

      <div>
        { status === "success" && semester ? (
          <>
        <SubHeading title="Semester Summary" />
          <div className="grid grid-cols-2 bg-gray-700 p-5 lg:w-2/3   mb-4 rounded">
            <p>Obtained / Total </p>
            <p>
              {semester.obtained} / {semester.total}
            </p>
            <p> SGPA </p>
            <p> {semester.sgpa} </p>
            <p> Percentage </p>
            <p> {semester.percentage} % </p>
            <p> Total Credits </p>
            <p> {semester.credit} </p>
          </div>

        <SubHeading title="Subjects" />
        {subjects.map((subject) => {
          return (
            <div
              key={subject.pId}
              className="bg-gray-700 p-5 lg:w-2/3  mb-4 rounded"
            >
              <p className="font-bold mb-1">{subject.title}</p>
              <hr className="mb-3" />
              <div className="grid grid-cols-2  px-2">
                <p>Internal</p>
                <p>{subject.internal}</p>
                <p>External</p>
                <p>{subject.external}</p>
                <p>Total</p>
                <p>{subject.total}</p>
                <p>Credits</p>
                <p>{subject.credit}</p>
              </div>
            </div>
          );
        })}
          </>
        ) : status === "loading" ? (<p>Loading...</p>) 
        : (<p>No data available</p>) 
        }

      </div>
    </div>
  );
};

export default Tabs;
