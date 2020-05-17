import React, {Component} from "react";
import './CharComponent.css';

// props can be directly as a parameter for the body
const CharComponent = (props) => {
        const style = {
            display: "inline-block",
            padding: "16px",
            "text-align": "center",
            margin: "16px",
            border: "1px solid black",
            "background-color": "green",
            color: "white"
        };
        if(props.data.length < 5){
            style["background-color"] = "yellow";
            style.color = "red";
        }
        if(props.data.length > 5){
            style["background-color"] = "red";
            style.color = "white";
        }
    return (
            //<p className="CharComponent" onClick= {props.onClick}>{props.data}</p>
            // this "style" attribute will add object style into the component
            <p style={style} onClick= {props.onClick}>{props.data}</p>
        );
};

export default CharComponent;