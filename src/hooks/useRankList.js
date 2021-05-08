import axios from "axios";
import { useQuery } from "react-query";

const getRankList = async (rankListType) => {
  const { data } = await axios.get(
    `/${rankListType}-rank?semester=1&batch=2017&collegeId=150&course=027`
  );

  return data;
};

export default function useRankList(rankListType = "college") {
  return useQuery(["rankList", rankListType], () => getRankList(rankListType));
}
