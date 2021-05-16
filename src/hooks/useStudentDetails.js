import { useQuery } from "react-query";
import axios from "axios";

const getStudentDetails = async (token) => {
  const { data } = await axios.get("/", {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export default function useStudentDetails(token) {
  return useQuery("studentDetails", (token) => getStudentDetails(token), {
    refetchOnWindowFocus: false,
  });
}
