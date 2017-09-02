import React, { Component } from 'react';

import MenuBar from './MenuBar';

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f9f9f9', height: '100vh'}}>
        <MenuBar/>
      </div>
    );
  }
}

export default Home;