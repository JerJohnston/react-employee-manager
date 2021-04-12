// dev dependencies

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



import {AuthProvider} from './auth/AuthContext';

// child components

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import DashBoard from './pages/dashboard/DashBoard';
import AppBar from './components/AppBar';

function App() {

  // Application Logic *always comes before the return statement
  // Switches are like case statements
  
  return (

    <>
    <AuthProvider>
      <Router>
          <AppBar/>
          <Switch> 
              <Route exact path="/"><HomePage/></Route>
              <Route path="/login"><LoginPage/></Route>
              <Route path="/signup"><RegisterPage/></Route>
              <Route path="/dashboard"><DashBoard/></Route>
              <Route path="*"><PageNotFound/></Route>
          </Switch>
      </Router>
    </AuthProvider>
    </>

  );
}

export default App;
