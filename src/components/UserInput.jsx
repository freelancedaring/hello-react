import React, {Component} from "react";
import { Input } from 'antd';

class UserInput extends Component{

    render(){
        return (
            <p>
                <Input placeholder="User Input" onChange = {this.props.onChange}></Input>
            </p>
        );
    };

}

export default UserInput;