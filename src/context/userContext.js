import React, { createContext, useState, useEffect } from "react";
import { loginPost, userDetail } from "../hooks/useLogin";
import firebase from "../firebase_config";
import Loading from "../components/loading/Loading";

export const UserContext = createContext();

const UserProvider = ({ firebaseUser, children }) => {
  const [auth, setAuth] = useState({ user: {}, token: "" });
  const [contextLoading, setContextLoading] = useState(true);

  useEffect(() => {
    if (firebaseUser) {
      // If we have firebase user present then we need to check whether that user
      // is present in our database or not
      verifyUserHandler();
    } else {
      // If firebase itself doesn't have that user then redirect to login
      setAuth({ user: {}, token: "" });
      setContextLoading(false);
    }
  }, [firebaseUser]);

  const getUserDetailsHandler = async (token) => {
    const data = await userDetail(token);
    if (data) {
      // yes
      // save user data to context api
      // console.log("Inside getUserDetailsHandler => UserContext",token);
      setAuth({ user: data.user, token });
      setContextLoading(false);
    } else {
      await loginHandler();
    }
  };

  const updateUser = (user) => {
    let newAuth = { ...auth };
    newAuth.user = user;
    setAuth(newAuth);
  }

  const verifyUserHandler = async () => {
    // console.log("Inside VerifyUserHandler => UserContext");
    setContextLoading(true);
    const token = localStorage.getItem("token_collegesaathi");
    // take token from local strograge
    if (token) {
      await getUserDetailsHandler(token);
    } else {
      await loginHandler();
    }
  };



  const loginHandler = async () => {
    // console.log("Inside loginHandler => UserContext");

    let { uid, email } = firebase.auth().currentUser;
    const data = await loginPost(email, uid);
    // console.log("loginHandler", data);
    if (data) {
      // yes
      let token = "Bearer " + data.token;
      localStorage.setItem("token_collegesaathi", token);
      // save user data to context api
      // save token too in context api
      setAuth({ user: data.user, token });
      setContextLoading(false);
    } else {
      // means user is not registered
      // redirect to register page
      setAuth({ user: {}, token: "" });
      setContextLoading(false);
    }
  };

  let value = {
    ...auth,
    firebaseUser,
    updateUser
  };

  return contextLoading ? (
    <Loading loadingText="Fetching User..." />
  ) : (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
