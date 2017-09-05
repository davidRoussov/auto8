import React, { Component } from 'react';
import Grid from './PropertyGrid/Grid';

class PropertyGrid extends Component {
  render() {
    const style = {
      container: {
        padding: '20px'
      },
      grid: {
        width: '100%'
      }
    };

    return (
      <div style={style.container}>
        <h2>Properties</h2>
        <div style={style.grid}>
          <Grid/>
        </div>
      </div>
    );
  }
}

export default PropertyGrid;