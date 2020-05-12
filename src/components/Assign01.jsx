import React, {Component} from "react";
import {DatePicker} from "antd";
import UserInput from './UserInput.jsx';
import UserOutput from './UserOutput.jsx';
import STitle from './STitle.jsx'

class Assign01 extends Component{
    state = {
        FirstName: "first name",
        LastName: "last name"
      }
    
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
    
    render(){
        return (
            <div>
            <div>
                <STitle title="Assignment 01"></STitle>
            </div>
            <div>
                <DatePicker style={{ marginLeft: 8, marginBottom: 8 }} onChange= {this.showMyDate}/>
                <UserInput onChange= {this.passTheValue}></UserInput>
                <UserOutput p1= {this.state.FirstName} p2= {this.state.LastName}></UserOutput>
            </div>
            </div>
        );
    };

}

export default Assign01;