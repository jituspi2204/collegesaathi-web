import axios from "axios";
import { useQuery } from "react-query";

const getFiles = async (semester, type, subject, unit) => {
  const { data } = await axios.get(
    `/files?semester=${semester}&type=${type}&subject=${subject}&unit=${unit}`
  );

  return data;
};

export default function useFetchFiles(semester, type, subject, unit) {
  return useQuery(
    "getSearchFiles",
    () => getFiles(semester, type, subject, unit),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
}
