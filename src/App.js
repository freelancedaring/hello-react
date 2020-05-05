import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading.jsx';
import UserInput from './components/UserInput.jsx';
import UserOutput from './components/UserOutput.jsx';
import {Button, DatePicker, version} from "antd";
import "antd/dist/antd.css";

class App extends Component {
  showMyDate = (event) => {
    console.log("Helloo.. ");
    console.log(event);
  }
  
  passTheValue = (event) => {
    let originalVal = event.target.value 
    let val = originalVal.split(" ")

    this.setState ({
      FirstName : val[0],
      LastName : val.length > 1 ? originalVal.substring(val[0].length+1) : ""
    });
  }
  
  state = {
    FirstName: "first name",
    LastName: "last name"
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading hello="Learn to React and do React!!!"></Heading>
          <h1>antd version: {version}</h1>
        </header>
        <DatePicker style={{ marginLeft: 8, marginBottom: 8 }} onChange= {this.showMyDate}/>
        <UserInput onChange= {this.passTheValue}></UserInput>
        <UserOutput p1= {this.state.FirstName} p2= {this.state.LastName}></UserOutput>
      </div>
    );
  }
}

export default App;
