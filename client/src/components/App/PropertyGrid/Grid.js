import React, { Component } from 'react';

import Property from './Property';

class Grid extends Component {
  render() {
    const style = {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      property: {
        width: '150px',
        height: '150px'
      }
    };

    const allHomes = new Array(20).fill('test').map(home => 
      <Property data={home} style={style.property}/>
    );

    return (
      <div style={style.container}>
        {allHomes}
      </div>
    );
  }
}

export default Grid;