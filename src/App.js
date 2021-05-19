import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import SubjectListProvider from "./context/subjectListContext";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Main from "./pages/Main";
import firebase from "./firebase_config";
import UserProvider from "./context/userContext";
import Loading from "./components/loading/Loading";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        // pauseOnFocusLoss
        draggable={false}
        // pauseOnHover
        closeButton={<></>}
        // className="w-full h-auto bg-yellow-400 text-center z-50 md:w-1/2 md:fixed md:left-1/4 rounded mt-4 p-4"
      />
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
