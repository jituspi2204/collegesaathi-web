import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AccountSettings from "./pages/AccountSettings";
import Notification from "./pages/Notification";
import Home from "./pages/Home/Home";
import ReportCard from "./pages/ReportCard";
import StudyMaterial from "./pages/StudyMaterial";
import SideNavBar from './components/sideNavBar/SideNavBar'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appLayout}>
      <Router>
        <SideNavBar />
        <div className={styles.mainScreen}>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/notifications' >
              <Notification/>
              </Route>
            <Route path='/study-material'>
              <StudyMaterial/>
            </Route>
            <Route path='/report-card' >
              <ReportCard/>
              </Route>
            <Route path='/account' >
              <AccountSettings/>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
