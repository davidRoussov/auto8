import React, { Component } from 'react';

import Property from './Property';


import prop1 from '../../../../public/temp/prop1.jpeg';
import prop2 from '../../../../public/temp/prop2.jpeg';
import prop3 from '../../../../public/temp/prop3.jpeg';
import prop4 from '../../../../public/temp/prop4.jpg';
import prop5 from '../../../../public/temp/prop5.jpeg';
import prop6 from '../../../../public/temp/prop6.jpeg';
import prop7 from '../../../../public/temp/prop7.jpeg';
import prop8 from '../../../../public/temp/prop8.jpeg';




class Grid extends Component {
  render() {
    const style = {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };

    const allHomes = [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8].map(home => 
      <Property data={home}/>
    );

    return (
      <div style={style.container}>
        {allHomes}
      </div>
    );
  }
}

export default Grid;