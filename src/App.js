import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import SubjectListProvider from "./context/subjectListContext";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Main from "./pages/Main";

function App() {
  return (
    // <div className="min-h-screen md:flex">
    <div>
      <Router>
        <SideNavBar />
        <ErrorBoundary>
          <SubjectListProvider>
            <Main />
          </SubjectListProvider>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
