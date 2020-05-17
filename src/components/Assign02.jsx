import React, { Component } from "react";
import STitle from "./STitle.jsx";
import UserOutput from "./UserOutput.jsx";
import CharComponent from "./CharComponent.jsx";
import ValidationLength from "./ValidationLength.jsx";
import TextArea from "antd/lib/input/TextArea";
import { GlobalStyle } from './GlobalVars.jsx'
import Radium, { StyleRoot } from 'radium';

class Assign02 extends Component {
    delim = " "
    state = {
        textLength: 0,
        text: ""
    }

    splitter = () => {
        return this.state.text.split(this.delim)
    }
    countLength = (event) => {
        this.setState({
            textLength: event.target.value.length,
            text: event.target.value
        });
    }
    removeCurrentLetter = (index) => {
        let arr = this.splitter();
        arr.splice(index, 1)
        let newText = arr.join(this.delim)
        this.setState({
            text: newText.trimRight()
        });

    }
    listOfCharComponent = () => {
        let split = this.splitter();
        return split.map((element, index) => {
            if (!(element === "" && index === 0)) {
                return <CharComponent key={index} data={element} onClick={() => this.removeCurrentLetter(index)} />;
            }
        });
    }


    render() {
        return (
            <StyleRoot>
                <div style={GlobalStyle}>
                    <div>
                        <STitle title="Assignment 02"></STitle>
                    </div>
                    <div>
                        <UserOutput key="text_length" data={this.state.textLength}></UserOutput>
                    </div>
                    <div>
                        <TextArea rows={3} onChange={this.countLength} value={this.state.text}></TextArea>
                    </div>
                    <div>
                        <ValidationLength length={this.state.text.split(this.delim).length}></ValidationLength>
                    </div>
                    <div>
                        {this.listOfCharComponent()}
                    </div>
                </div>
            </StyleRoot>
        );
    };

}

export default Radium(Assign02);