import React, {Component} from "react";
import './UserOutput.css';
import { Input } from 'antd';

const { TextArea } = Input;

class UserOutput extends Component{

    render(){
        return (
            <div>
                <TextArea rows={3} value={this.props.p1}></TextArea>
                <TextArea className="UserOutput" rows={3} value={this.props.p2}></TextArea>
            </div>
        );
    };

}

export default UserOutput;