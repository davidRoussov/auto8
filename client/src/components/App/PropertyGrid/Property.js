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
      },
      caption: {
        backgroundColor: '#ecf0f1',
        padding: '10px'
      }
    };

    return (
      <div style={style.container}>
        <img src={this.props.data} style={style.image} alt='property'/>
        <div style={style.caption}>
          <p>This is a home. Please book me!</p>
        </div>
      </div>
    );
  }
}

export default Property;