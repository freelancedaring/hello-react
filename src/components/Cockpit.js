import React, { useEffect } from 'react';
import Heading from './Heading.jsx';
import Assign01 from './Assign01.jsx';
import Assign02 from './Assign02.jsx';
import {version} from "antd";
import "antd/dist/antd.css";
import logo from './../logo.svg';
import Radium, { StyleRoot } from 'radium';

const Cockpit = (props) =>  {  
    useEffect(() => {
        console.log("Cockpit useEffect()")
    });
    return (
        <StyleRoot>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Heading hello="Learn to React and do React!!!"></Heading>
                <h1>antd version: {version}</h1>
                </header>
                <Assign01></Assign01>
                <Assign02></Assign02>
            </div>
        </StyleRoot>
    );
}

export default Radium(Cockpit);
