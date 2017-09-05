import React, { Component } from 'react';

class Property extends Component {
  render() {
    const style = {
      container: {
        backgroundColor: '#ecf0f1',
        margin: '10px',
        borderRadius: '4px',
        padding: '10px'
      }
    };

    return (
      <div style={style.container}>
        <p>this is a property</p>
      </div>
    );
  }
}

export default Property;