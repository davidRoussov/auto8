import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import '../index.css';
import LandingPage from './LandingPage/LandingPage';
import Login from './LandingPage/Login';
import Signup from './LandingPage/Signup';
import Home from './App/Home';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/about' component={LandingPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
