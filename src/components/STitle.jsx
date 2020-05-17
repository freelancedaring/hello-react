import React, {Component} from "react";
import Radium from 'radium';

const style = {
    color: "black",
    // this semantic is using Radium
    ":hover": {
        backgroundColor: "grey"
    }
};
class STitle extends Component{
    render(){
        return (
            <div>
                <h1 style={style}>{this.props.title}</h1>
            </div>
        );
    };

}

export default Radium(STitle);