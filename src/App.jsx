import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import AppBar from './components/AppBar';

function App() {

  // Application Logic *always comes before the return statement
  // Switches are like case statements
  
  return (
    
    <Router>
        <AppBar/>
        <Switch> 
            <Route exact path="/"><HomePage/></Route>
            <Route path="/login"><LoginPage/></Route>
            <Route path="/signup"><RegisterPage/></Route>
            <Route path="*"><PageNotFound/></Route>
        </Switch>
    </Router>
    
  );
}

export default App;
