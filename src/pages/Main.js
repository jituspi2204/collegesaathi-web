import React, { useContext, useEffect, useState } from "react";
import AccountSettings from "./AccountSettings";
import Notification from "./Notification";
import Home from "./Home/Home";
import Rank from "./Rank";
import StudyMaterial from "./StudyMaterial";
import { Route, Switch, useHistory } from "react-router-dom";
import useStudentDetails from "../hooks/useStudentDetails";
import Loading from "../components/loading/Loading";
import GuardedRoute from "../routes/GauredRoutes";
import Login from "./login/Login";
import Register from "./Register";
import { UserContext } from "../context/userContext";

const Main = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState({});

  // using userContext
  const userDetails = useContext(UserContext);

  useEffect(() => {
    setUser(userDetails.user);

    if (userDetails.firebaseUser) {
      if (userDetails.user) {
        // If firebase user is present ( ie. user is present in firbase db )
        // and user is present in our db too then redirect to home page
        setIsLoggedIn(true);
        history.push("/");
      } else {
        // If firebase user is present but he/she not present in our db then
        // we'll redirect to register page
        setIsRegistered(true);
        setIsLoggedIn(false);
        history.push("/register");
      }
    } else {
      // If firebase user is not present then user needs to login first.
      // for that we'll redirect to login
      setIsLoggedIn(false);
      setIsRegistered(false);
      history.push("/login");
    }
  }, [userDetails]);

  return (
    <main className="mt-24 p-4 md:mt-0 md:ml-32 lg:ml-52">
      <Switch>
        <GuardedRoute path="/" exact={true} valid={userDetails}>
          <Home />
        </GuardedRoute>

        <GuardedRoute path="/notifications" exact={true} valid={userDetails}>
          <Notification/>
        </GuardedRoute>

        <GuardedRoute path="/account" exact={true} valid={userDetails}>
          <AccountSettings  />
        </GuardedRoute>

        <GuardedRoute path="/rank-list" exact={true} valid={userDetails}>
          <Rank />
        </GuardedRoute>

        <GuardedRoute path="/search" exact={true} valid={userDetails}>
          <StudyMaterial />
        </GuardedRoute>

        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </main>
  );
};

export default Main;
