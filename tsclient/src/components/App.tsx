import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route exact={true} path="/" component={LandingPage}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;