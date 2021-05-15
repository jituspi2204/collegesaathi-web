import axios from "axios";
import { useQuery } from "react-query";

const getRankList = async (rankListType, rollno) => {
  const batch = rollno.slice(-2);
  const collegeId = rollno.slice(3, 6);
  const course = rollno.slice(6, 9);

  const { data } = await axios.get(
    `/${rankListType}-rank?batch=20${batch}&collegeId=${collegeId}&course=${course}`
  );

  return data;
};

export default function useRankList(rollno, rankListType = "college") {
  return useQuery(["rankList", rankListType], () =>
    getRankList(rankListType, rollno)
  );
}
