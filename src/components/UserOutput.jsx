import React from "react";
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <p className="UserOutput">{props.data}</p>
        </div>
    );
}

export default UserOutput;