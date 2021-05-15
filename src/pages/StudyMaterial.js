import React, { useContext, useState } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import { SubjectListContext } from "../context/subjectListContext";
import useFetchFiles from "../hooks/useFetchFiles";
import { FiFileText, FiDownload, FiVideo } from "react-icons/fi";
import Loading from "../components/loading/Loading";

const StudyMaterial = () => {
  const [materialType, setMaterialType] = useState("notes");
  const [unit, setUnit] = useState("1");
  const [semester, setSemester] = useState("1");
  const [subject, setSubject] = useState("99113");
  const subjectListSemWise = useContext(SubjectListContext)['subjectListSemWise'];

  const { data, status, refetch } = useFetchFiles(
    semester,
    materialType,
    subject,
    unit
  );

  const materialTypeChangeHandler = (e) => {
    let material = "";

    if (e.target.value === "Lab Files") material = "labfiles";
    else if (e.target.value === "Assignments") material = "assignments";
    else if (e.target.value === "Question Papers") material = "papers";
    else if (e.target.value === "Videos") material = "videos";
    else material = "notes";

    setMaterialType(material);
  };

  const semesterChangeHandler = (e) => {
    let semesterChoosen = e.target.value.slice(-1);
    let firstSubjectCode = Object.keys(subjectListSemWise[semesterChoosen])[0];
    setSemester(semesterChoosen);
    setSubject(firstSubjectCode);
  };

  const subjectChangeHandler = (e) => {
    setSubject(e.target.value.slice(-5));
  };

  const unitChangeHandler = (e) => {
    setUnit(e.target.value.slice(-1));
  };

  const getFilesHandler = (e) => {
    e.preventDefault();

    console.log("get fies ", semester, materialType, subject, unit);
    refetch();
    console.log("searched files data", data);
  };

  const requestAdminHandler = (e) => {
    e.preventDefault();
    console.log(" TODO : Request Admin");
  };
  return (
    <div>
      <Header title="Search" />
      <SubHeading title="Search Study Material" />

      <form className="grid gap-4 md:gap-10 grid-cols-4 bg-gray-700 p-5 mb-8 lg:w-2/3 rounded">
        <div className="flex flex-col">
          <label htmlFor="materialType" className="text-xs">
            Material Type
          </label>
          <select
            id="materialType"
            onChange={(e) => materialTypeChangeHandler(e)}
            className="w-20 my-2 text-white rounded bg-gray-500"
          >
            <option>Notes</option>
            <option>Lab Files</option>
            <option>Assignments</option>
            <option>Question Papers</option>
            <option>Videos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="semester" className="text-xs">
            Semester
          </label>
          <select
            id="semester"
            onChange={(e) => semesterChangeHandler(e)}
            className="w-20 my-2 text-white rounded bg-gray-500"
          >
            <option>Sem - 1</option>
            <option>Sem - 2</option>
            <option>Sem - 3</option>
            <option>Sem - 4</option>
            <option>Sem - 5</option>
            <option>Sem - 6</option>
            <option>Sem - 7</option>
            <option>Sem - 8</option>
          </select>
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-xs">
            Subject
          </label>
          <select
            id="subject"
            onChange={(e) => subjectChangeHandler(e)}
            className="w-20 my-2 text-white rounded bg-gray-500"
          >
            {subjectListSemWise[semester] ? (
              Object.values(subjectListSemWise[semester]).map((sub) => {
                return <option key={sub.slice(-5)}>{sub}</option>;
              })
            ) : (
              <option>Choose Subject</option>
            )}
          </select>
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="unit" className="text-xs">
            Unit
          </label>
          <select
            id="unit"
            onChange={(e) => unitChangeHandler(e)}
            className="w-20 my-2 text-white rounded bg-gray-500"
          >
            <option>Unit 1</option>
            <option>Unit 2</option>
            <option>Unit 3</option>
            <option>Unit 4</option>
          </select>
        </div>
        <button
          onClick={(e) => getFilesHandler(e)}
          className="bg-yellow-400 text-black font-semibold rounded p-2 my-4 col-span-2"
        >
          Search
        </button>
        <button
          onClick={(e) => requestAdminHandler(e)}
          className="bg-green-300 text-black font-semibold rounded p-2 my-4 col-span-2"
        >
          Request Admin
        </button>
      </form>

      <div>
        {status === "loading" ? (
          <Loading />
        ) : status === "error" ? (
          <p>Encountered an error ! Please try again</p>
        ) : status === "success" ? (
          <>
            <SubHeading title="Search Results" />
            {data.files.length === 0 ? (
              <div> No files found !</div>
            ) : (
              data.files.map((file) => {
                return (
                  <div
                    key={file._id}
                    className="bg-gray-700 p-5 mb-8 lg:w-2/3 rounded"
                  >
                    <div className="flex justify-between">
                      <p className="font-semibold">
                        {subjectListSemWise[file.semester][file.subject]}
                      </p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex p-2">
                      <div>
                        {file.type === "videos" ? (
                          <FiVideo color="#FBBF24" size="80" />
                        ) : (
                          <FiFileText color="#FBBF24" size="80" />
                        )}
                      </div>
                      <div className="mx-5">
                        <p>{file.description}</p>
                        <p>
                          {file.type} | Unit - {file.unit}
                        </p>
                        <a href={file.url} target="_blank" rel="noreferrer">
                          <div className="flex w-max cursor-pointer bg-yellow-400 font-semibold text-black p-1 rounded">
                            {file.type === "videos" ? (
                              <FiVideo />
                            ) : (
                              <FiDownload />
                            )}
                            <button className="mx-2">
                              {file.type === "videos" ? "Watch" : "Download"}
                            </button>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default StudyMaterial;
