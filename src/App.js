import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading.jsx';
import {Button, DatePicker, version} from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading hello="Learn to React and do React!!!"></Heading>
        <h1>antd version: {version}</h1>
      </header>
      <DatePicker style={{ marginLeft: 8, marginBottom: 8 }}/>
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>

    </div>
  );
}

export default App;
