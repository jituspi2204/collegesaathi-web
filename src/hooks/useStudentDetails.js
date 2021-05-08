import { useQuery } from "react-query";
import axios from "axios";

const getStudentDetails = async () => {
  const { data } = await axios.get("/");

  return data;
};

export default function useStudentDetails() {
  return useQuery("studentDetails", getStudentDetails, {
    refetchOnWindowFocus: false,
  });
}
