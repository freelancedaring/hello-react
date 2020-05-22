import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import Radium from 'radium';
import Cockpit from './components/Cockpit'

class App extends Component {
  
  render(){
    return (
      <Cockpit></Cockpit>
    );
  }
}

export default Radium(App);
