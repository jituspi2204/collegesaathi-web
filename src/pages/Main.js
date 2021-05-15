import React from "react";
import AccountSettings from "./AccountSettings";
import Notification from "./Notification";
import Home from "./Home/Home";
import Rank from "./Rank";
import StudyMaterial from "./StudyMaterial";
import { Route, Switch } from "react-router-dom";
import useStudentDetails from "../hooks/useStudentDetails";
import Loading from "../components/loading/Loading";

const Main = () => {
  const { data, status } = useStudentDetails();

  return status === "loading" ? (
    <Loading location="app" />
  ) : status === "error" ? (
    <p>Error while loading your app !</p>
  ) : (
    <main className="mt-24 p-4 md:mt-0 md:ml-32 lg:ml-52">
      <Switch>
        <Route path="/" exact>
          <Home user={data.user} />
        </Route>
        <Route path="/notifications">
          <Notification notifications={data.user.notifications} />
        </Route>
        <Route path="/search">
          <StudyMaterial />
        </Route>
        <Route path="/rank-list">
          <Rank user={data.user} />
        </Route>
        <Route path="/account">
          <AccountSettings user={data.user} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
