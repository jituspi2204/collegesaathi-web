import axios from "axios";
import { useQuery } from "react-query";

const getMarksForSemesters = async (rollno) => {
  const { data } = await axios.get(`/semesters?rollno=${rollno}`);
  console.log("Calling get marks", data, rollno);

  return data;
};

export default function useMarks(rollno) {
  return useQuery("marksForSemesters", () => getMarksForSemesters(rollno), {
    refetchOnWindowFocus: false,
  });
}
