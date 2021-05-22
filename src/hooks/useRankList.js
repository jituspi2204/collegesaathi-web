import axios from "axios";
import { useQuery } from "react-query";

const getRankList = async (rankListType, rollno, token, semester) => {
  const batch = rollno.slice(-2);
  const collegeId = rollno.slice(3, 6);
  const course = rollno.slice(6, 9);
  let url = `/${rankListType}-rank?batch=20${batch}&collegeId=${collegeId}&course=${course}`;
  if (semester) {
    url += `&semester=${semester}`;
  }
  const { data } = await axios.get(url, {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export default function useRankList(rollno, rankListType = "college", token,semester) {
  return useQuery(["rankList", rankListType, token, rollno,semester], () =>
    getRankList(rankListType, rollno, token,semester)
  );
}
