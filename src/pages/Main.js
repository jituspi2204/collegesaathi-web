import React, { useContext, useEffect, useState } from "react";
import AccountSettings from "./AccountSettings";
import Notification from "./Notification";
import Home from "./Home/Home";
import Rank from "./Rank";
import Search from "./Search";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import GuardedRoute from "../routes/GauredRoutes";
import Login from "./login/Login";
import Settings from "./Settings";
import Register from "./Register";
import { UserContext } from "../context/userContext";
import FilesList from './FilesList'
import LOGO from "../assets/images/logo.png";

const Main = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();
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
        if (location.pathname === "/login" || location.pathname==='/register') history.push("/");
        else if (location.pathname === '/') history.push('/');
        else history.push(location.pathname);

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
    <main className="mt-2 p-2 md:mt-0 md:ml-32 lg:ml-52 sm:mg:24 pb-12 md:bp-2">
      <div className="fixed top-4 right-4 w-12 md:left-4">
        <img src={LOGO} className="w-full" />
        {/* <img src={APK} className="w-full" /> */}
      </div>
      <Switch>
        <GuardedRoute path="/" exact={true} valid={userDetails}>
          <Home />
        </GuardedRoute>
        <GuardedRoute
          path="/my-files/:subject"
          exact={true}
          valid={userDetails}
        >
          <FilesList />
        </GuardedRoute>

        <GuardedRoute path="/notifications" exact={true} valid={userDetails}>
          <Notification />
        </GuardedRoute>

        <GuardedRoute path="/account" exact={true} valid={userDetails}>
          <AccountSettings />
        </GuardedRoute>

        <GuardedRoute path="/rank-list" exact={true} valid={userDetails}>
          <Rank />
        </GuardedRoute>

        <GuardedRoute path="/search" exact={true} valid={userDetails}>
          <Search />
        </GuardedRoute>
        <GuardedRoute path="/settings" exact={true} valid={userDetails}>
          <Settings />
        </GuardedRoute>

        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        {/* <Route path="/development" component={Development} exact /> */}
      </Switch>
    </main>
  );
};

export default Main;
