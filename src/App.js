import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.jsx';
import Assign01 from './components/Assign01.jsx';
import Assign02 from './components/Assign02.jsx';
import {version} from "antd";
import "antd/dist/antd.css";

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading hello="Learn to React and do React!!!"></Heading>
          <h1>antd version: {version}</h1>
        </header>
        <Assign01></Assign01>
        <Assign02></Assign02>
      </div>
    );
  }
}

export default App;
