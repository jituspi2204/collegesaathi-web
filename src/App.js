import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccountSettings from "./pages/AccountSettings";
import Notification from "./pages/Notification";
import Home from "./pages/Home/Home";
import Rank from "./pages/Rank";
import StudyMaterial from "./pages/StudyMaterial";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import SubjectListProvider from "./context/subjectListContext";
import useStudentDetails from "./hooks/useStudentDetails";
import Loading from "./components/loading/Loading";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {
  const { data, status } = useStudentDetails();

  return (
    // <div className="min-h-screen md:flex">
    <div className="">
      <SubjectListProvider>
        <Router>
          <SideNavBar />
          {status === "loading" ? (
            <Loading location="app" />
          ) : status === "error" ? (
            <p>Error while loading your app !</p>
          ) : (
            // <main className="p-10 lg:mx-36 w-screen">

    <ErrorBoundary>
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
</ErrorBoundary>
          )}
        </Router>
      </SubjectListProvider>
    </div>
  );
}

export default App;
