import { useQuery } from "react-query";
import axios from "axios";

const getUtils = async () => {
  const { data } = await axios.get("/utils");
  return data;
};

export default function useUtilities() {
  return useQuery("collegeAndSubjectUtilites", getUtils);
}
