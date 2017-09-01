import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../index.css';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import Home from './main/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/home' component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
