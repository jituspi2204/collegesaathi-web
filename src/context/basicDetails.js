import React, { createContext } from "react";
import useStudentDetails from "../hooks/useStudentDetails";

export const BasicStudentDetailsContext = createContext(null);

const BasicStudentDetailsProvider = ({ children }) => {
  const { data } = useStudentDetails();

  let value = {};
  if (data && data.user) value = data.user;

  return (
    <BasicStudentDetailsContext.Provider value={value}>
      {children}
    </BasicStudentDetailsContext.Provider>
  );
};

export default BasicStudentDetailsProvider;
