import axios from "axios";
import { useQuery } from "react-query";

const getFiles = async (semester, subject, token ) => {
  const { data } = await axios.get(
    `/files?semester=${semester}&subject=${subject}`, {
      headers: {
        "authorization": token
      }
    }
  );

  return data;
};

export default function useFetchFiles(semester, subject, token ) {
  return useQuery(
    ["getSearchFiles", token],
    () => getFiles(semester, subject, token),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
}
