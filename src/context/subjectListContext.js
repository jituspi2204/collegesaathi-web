import React, { createContext, useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import useUtilities from "../hooks/useUtilities";
import getSubjectsListSemWise from "../utils/getSubjectsListSemWise";

export const SubjectListContext = createContext();

const SubjectListProvider = ({ children }) => {
  const [subjectsListSemWise, setSubjectsListSemWise] = useState({});
  const { data, status } = useUtilities();

  useEffect(() => {
    if (status === "success") {
      setSubjectsListSemWise(getSubjectsListSemWise(data));
    }
  }, [status, data]);

  return status === "loading" ? (
    <Loading />
  ) : status === "error" ? (
    <div>Error...</div>
  ) : (
    <SubjectListContext.Provider value={subjectsListSemWise}>
      {children}
    </SubjectListContext.Provider>
  );
};

export default SubjectListProvider;
