import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import SubHeading from "../components/subHeading/SubHeading";
import StudyMaterial from "./StudyMaterial";
import { useParams } from "react-router-dom";
import Result from "./Result";
import { UserContext } from "../context/userContext";
import { FiDownload, FiFileText } from "react-icons/fi";
import {
  AiFillEye,
  AiFillFilePdf,
  AiFillYoutube,
  AiOutlineFolderView,
} from "react-icons/ai";
import { SubjectListContext } from "../context/subjectListContext";
import { saveAs } from "file-saver";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Search = () => {
  const [searchType, setSearchType] = useState("result");
  const [user, changeUser] = useState({ reads: [], currentSemester: 1 });
  const parmas = useParams();
  const userDetails = useContext(UserContext);
  const [files, changeFiles] = useState([]);
  const [totalFiles, changeTotalFiles] = useState({});
  const [type, changeType] = useState("all");
  const subjectListSemWise = useContext(SubjectListContext)[
    "subjectListSemWise"
  ];

  useEffect(() => {
    // console.log(userDetails.user);
    let reads = userDetails.user.reads;
    let totalFiles = {
      notes: [],
      assigments: [],
      paper: [],
      labfiles: [],
      all: [],
      videos: [],
    };
    if (reads) {
      reads.forEach((item) => {
        if (item.subject == parmas.subject) {
          totalFiles[item.type].push(item);
          totalFiles["all"].push(item);
        }
      });
    }
    changeTotalFiles(totalFiles);
    changeUser(userDetails.user);
  }, [userDetails]);
    
  
  useEffect(() => {
    changeFiles(totalFiles[type]);
  }, [type,totalFiles]);

  const downloadHandler = (file) => {
    saveAs(file.url, file.filename);
  };
//   console.log(files);
  return (
    <div>
      <Header title="Home" />
      <div className="flex flex-col items-start justify-start lg:w-2/3">
        <div className="flex md:flex-row justify-between md:items-center w-full flex-col">
          <SubHeading
            title={
              subjectListSemWise[user.currentSemester]
                ? subjectListSemWise[user.currentSemester][parmas.subject]
                : ""
            }
          />
          <select
            id="type"
            className=" my-2 col-span-2 text-white rounded bg-gray-600 p-2 text-sm md:w-1/3 w-full"
            value={type}
            defaultValue="Select Type"
            onChange={(e) => changeType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="notes">Notes</option>
            <option value="videos">Videos</option>
            <option value="assigments">Assigments</option>
            <option value="papers">Papers</option>
            <option value="labfiles">Lab Files</option>
          </select>
        </div>
        <div className="flex flex-row justify-between items-center flex-wrap w-full">
          {files && files.length > 0 ? (
            files.map((file) => {
              return (
                <div
                  key={file._id}
                  className="bg-gray-700 p-2 mb-2 md:mb-4 rounded md:w-2s w-full min-h-100px"
                >
                  <div className="flex justify-between flex-row">
                    <p className="font-semibold capitalize">
                      {/* {subjectListSemWise[file.semester]
                      ? subjectListSemWise[file.semester][file.subject]
                      : "Loading..."} */}
                      {file.type} Unit - {file.unit}
                    </p>
                    <div className="flex flex-row w-1/6 justify-between items-center">
                      <FaCloudDownloadAlt size="20" color="white" />
                      <AiOutlineFolderView size="20" color="white" />
                    </div>
                    {/* <div className="w-6 h-6  bg-yellow-400 text-black rounded-full">
                <p className="text-center font-bold">1</p>
              </div> */}
                  </div>
                  <hr className="my-2" />
                  <div className="flex p-2">
                    <div>
                      {file.type === "videos" ? (
                        <AiFillYoutube color="#FBBF24" size="60" />
                      ) : (
                        <AiFillFilePdf color="#FBBF24" size="60" />
                      )}
                    </div>
                    <div className="mx-5 flex flex-col justify-center items-center">
                      <p className="text-sm">
                        {file.description.split("@")[0]}
                      </p>
                      <p className="text-xs font-semibold">
                        {file.description.split("@")[1]}
                      </p>

                      {/* {file.type === "videos" ? (
                      <a href={file.url} target="blank">
                        <div className="flex flex-row justify-between items-center w-max cursor-pointer bg-yellow-400 font-semibold text-black p-1 rounded">
                          <AiFillEye />
                          <div className="mx-2"> View</div>
                        </div>
                      </a>
                    ) : (
                      <div
                        className="flex flex-row justify-between items-center w-max cursor-pointer bg-yellow-400 font-semibold text-black p-1 rounded"
                        onClick={() => downloadHandler(file)}
                      >
                        <FiDownload />
                        <div className="mx-2"> Download</div>
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-sm">No file found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
