import React, { Component } from 'react';

class Property extends Component {
  render() {
    const style = {
      container: {
        margin: '10px',
        padding: '10px',
        width: '400px',
        height: 'auto'
      },
      image: {
        maxWidth: '100%'
      }
    };

    return (
      <div style={style.container}>
        <img src={this.props.data} style={style.image} alt='property'/>
      </div>
    );
  }
}

export default Property;