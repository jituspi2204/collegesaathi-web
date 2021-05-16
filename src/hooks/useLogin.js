import axios from "axios";
import { AiFillTrophy } from "react-icons/ai";
// import { useQuery } from 'react-query'

export const loginPost = async (email, uid) => {
  try {
    const { data } = await axios.post("/login", {
      email,
      uid,
    });

    return data;
  } catch (err) {
    // if(err.response.status === 401) return false
    return {};
  }
};

export const userDetail = async (token) => {
  try {
    let { data } = await axios({
      method: "GET",
      url: "/",
      headers: {
        authorization: token,
      },
    });

    return data;
  } catch (err) {
    // if(err.response.status === 401) return false
    return {};
  }
};
