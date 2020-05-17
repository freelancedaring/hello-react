import React, {Component} from "react";
import { Input } from 'antd';
import "./UserInput.css"

class UserInput extends Component{

    render(){
        return (
            <div>
                <Input className="UserInput" placeholder="User Input" onChange = {this.props.onChange}></Input>
            </div>
        );
    };

}

export default UserInput;