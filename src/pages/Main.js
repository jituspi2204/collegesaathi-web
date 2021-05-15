import React from "react";
import AccountSettings from "./AccountSettings";
import Notification from "./Notification";
import Home from "./Home/Home";
import Rank from "./Rank";
import StudyMaterial from "./StudyMaterial";
import { Route, Switch } from "react-router-dom";
import useStudentDetails from "../hooks/useStudentDetails";
import Loading from "../components/loading/Loading";
import GuardedRoute from "../routes/GauredRoutes";
import Login from "./login/Login";
import Register from "./Register";

const Main = () => {
  const { data, status } = useStudentDetails();

  return status === "loading" ? (
    <Loading location="app" />
  ) : status === "error" ? (
    <p>Error while loading your app !</p>
  ) : (
    <main className="mt-24 p-4 md:mt-0 md:ml-32 lg:ml-52">
      <Switch>
          <GuardedRoute 
            path="/"
            exact={true}
            valid={true}
            >
          <Home user={data.user} />
          </GuardedRoute>
          <GuardedRoute 
            path="/notifications"
            exact={true}
            component={Notification}
            valid={true}
            >
          <Notification notifications={data.user.notifications} />
          </GuardedRoute>

          <GuardedRoute 
            path="/account"
            exact={true}
            component={AccountSettings}
            valid={true}
            >
          <AccountSettings user={data.user} />
          </GuardedRoute>

          <GuardedRoute 
            path="/rank-list"
            exact={true}
            component={Rank}
            valid={true}
            >
          <Rank user={data.user} />
                </GuardedRoute>
          <GuardedRoute 
            path="/search"
            exact={true}
            component={StudyMaterial}
            valid={true}
            >
          <StudyMaterial />
                </GuardedRoute>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
      </Switch>
    </main>
  );
};

export default Main;
