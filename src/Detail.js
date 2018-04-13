import React, { Component } from 'react';
import './css/Detail.css';
import test from './images/test.jpg';

class Detail extends Component{
  render(){
    return(
      <div>
      <img className = 'eiei' src={test} />
      </div>
    );
  }
}
export default Detail;
