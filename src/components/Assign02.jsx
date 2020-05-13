import React, {Component} from "react";
import STitle from "./STitle.jsx";
import UserOutput from "./UserOutput.jsx";
import CharComponent from "./CharComponent.jsx";
import ValidationLength from "./ValidationLength.jsx";
import TextArea from "antd/lib/input/TextArea";

class Assign02 extends Component{
    delim = " "
    state = {
        textLength: 0,
        text : ""
    }

    splitter = () =>  {
        return this.state.text.split(this.delim)
    }
    countLength = (event) => {
        this.setState({
            textLength : event.target.value.length,
            text : event.target.value
        });
    }
    removeCurrentLetter = (index) => {
        let arr = this.splitter();
        console.log(arr[index]);
        let newText = "";
        arr.forEach( (el, idx) =>{
            if( idx !== index ){
                newText = newText + el +  this.delim
            }
        })
        this.setState({
            text : newText.trimRight()
        });

    }
    listOfCharComponent = () => {
        let tmpText = this.state.text;
        let split = this.splitter();
        console.log("["+tmpText+"]");
        console.log(split);
        let all = [];
        split.forEach((element, index) => {
            if(!(index === 0 && element === "")){
                all.push(
                    <CharComponent key={index} data={element} onClick={() => this.removeCurrentLetter(index)}/>
                );    
            }
        });
        return all;
    }

    
    render(){
        return (
            <div>
                <div>
                    <STitle title="Assignment 02"></STitle>
                </div>
                <div>
                    <UserOutput key="text_length" data={this.state.textLength}></UserOutput>
                </div>
                <div>
                    <TextArea rows={3} onChange={this.countLength}></TextArea>
                </div>
                <div>
                    <ValidationLength length={this.state.textLength}></ValidationLength>
                </div>
                <div>
                    {this.listOfCharComponent()}
                </div>
            </div>
        );
    };

}

export default Assign02;