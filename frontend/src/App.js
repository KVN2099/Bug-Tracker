import React from 'react';
import Login from './Views/login/login';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router>
      {
      !auth.loggedIn ? <Login /> : 
      <>
      <Sidebar />
      </>
      }
    </Router>
  );
}

export default App;