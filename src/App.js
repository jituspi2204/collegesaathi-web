import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AccountSettings from "./pages/AccountSettings";
import Notification from "./pages/Notification";
import Home from "./pages/Home/Home";
import ReportCard from "./pages/ReportCard";
import StudyMaterial from "./pages/StudyMaterial";
import SideNavBar from './components/sideNavBar/SideNavBar'

function App() {
  return (
    <div className="min-h-screen md:flex">
      <Router>
        <SideNavBar />
        <main className="p-10 lg:mx-36 w-screen">
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/notifications' >
              <Notification/>
              </Route>
            <Route path='/search'>
              <StudyMaterial/>
            </Route>
            <Route path='/rank-list' >
              <ReportCard/>
              </Route>
            <Route path='/account' >
              <AccountSettings/>
              </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
