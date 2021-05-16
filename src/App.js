import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import SubjectListProvider from "./context/subjectListContext";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Main from "./pages/Main";
import firebase from "./firebase_config";
import UserProvider from "./context/userContext";
import Loading from "./components/loading/Loading";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // firebase.auth().signOut()
    firebase.auth().onAuthStateChanged(async (user) => {
      // console.log("useEffect in APP.js=>user=>", user)
      setFirebaseUser(user);
      setAppLoading(false);
    });
  }, []);

  return appLoading ? (
    <Loading loadingText="Loading Application..." />
  ) : (
    <div>
      <UserProvider firebaseUser={firebaseUser}>
        <Router>
          <SideNavBar />
          <ErrorBoundary>
            <SubjectListProvider>
              <Main />
            </SubjectListProvider>
          </ErrorBoundary>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
