import React, { createContext, useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import useUtilities from "../hooks/useUtilities";
import {
  getSubjectsListSemWise,
  getCollegeList,
} from "../utils/getSubjectsListSemWise";

export const SubjectListContext = createContext();

const SubjectListProvider = ({ children }) => {
  const [subjectListSemWise, setSubjectListSemWise] = useState({});
  const [collegeList, setCollegeList] = useState({});
  const { data, status } = useUtilities();

  useEffect(() => {
    if (status === "success") {
      setSubjectListSemWise(getSubjectsListSemWise(data));
      setCollegeList(getCollegeList(data));
    }
  }, [status, data]);

  const value = {
    subjectListSemWise,
    collegeList,
  };

  return status === "loading" ? (
    <Loading />
  ) : status === "error" ? (
    <div>Error...</div>
  ) : (
    <SubjectListContext.Provider value={value}>
      {children}
    </SubjectListContext.Provider>
  );
};

export default SubjectListProvider;
