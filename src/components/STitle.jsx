import React, {Component} from "react";

class STitle extends Component{
    state = {
    }
        
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    };

}

export default STitle;