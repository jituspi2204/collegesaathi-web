import axios from "axios";
import { useQuery } from "react-query";

const getMarksForSemesters = async (rollno, token) => {
  const { data } = await axios.get(`/semesters?rollno=${rollno}`, {
    headers: {
      "authorization": token
    }
  });
  // console.log("Calling get marks", data, rollno);

  return data;
};

export default function useMarks(rollno, token) {
  return useQuery(["marksForSemesters", token, rollno], () => getMarksForSemesters(rollno, token), {
    refetchOnWindowFocus: false,
  });
}
