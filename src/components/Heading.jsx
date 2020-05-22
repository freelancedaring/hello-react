import React from "react";

// instead of doing it as a class component, we just make a functional component
// since we are not managing any state and use no lifecycle
const Heading = (props) => {
    return (<h2>{props.hello}</h2>);
}

export default Heading;