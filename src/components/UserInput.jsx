import React from "react";
import { Input } from 'antd';
import "./UserInput.css"

// instead of doing it as a class component, we just make a functional component
// since we are not managing any state and use no lifecycle

const UserInput = (props) => {
    return (
        <div>
            <Input className="UserInput" placeholder="User Input" onChange = {props.onChange}></Input>
        </div>
    )
}

export default UserInput;