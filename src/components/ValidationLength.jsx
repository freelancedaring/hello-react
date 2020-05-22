import React from "react";

// props can be directly as a parameter for the body
const ValidationLength = (props) => {

    let message = (props.length > 5) ? "Too Long" : ((props.length < 5) ? "Too Short" : "Exact");
    return (
        <div>
            <p className="ValidationLength">{message}</p>
        </div>
    );

}

export default ValidationLength;