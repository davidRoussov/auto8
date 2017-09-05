import React, { Component } from 'react';

import MenuBar from './MenuBar';
import AppFooter from '../AppFooter';
import PropertyGrid from './PropertyGrid';

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f9f9f9', height: '100vh'}}>
        <MenuBar/>
        <PropertyGrid/>
        <AppFooter/>
      </div>
    );
  }
}

export default Home;