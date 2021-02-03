import React from 'react';
import Login from './Views/login/login';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import ViewBugs from './Views/Pages/viewBugs';
import Dashboard from './Views/Pages/Dashboard/dashboard';

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router>
      {
      !auth.loggedIn ? <Login /> : 
      <>
      <Sidebar />
      <Switch>
        <Route exact path="/view-bugs" component={ViewBugs} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;