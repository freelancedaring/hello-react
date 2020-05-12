import React, {Component} from "react";
import { Input } from 'antd';

class UserInput extends Component{

    render(){
        return (
            <div>
                <Input placeholder="User Input" onChange = {this.props.onChange}></Input>
            </div>
        );
    };

}

export default UserInput;