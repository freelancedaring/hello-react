import React, {Component} from "react";

class ValidationLength extends Component{

    state = {
        length : 0
    }
    renderLengthValidation = (length) => {
        return (length > 5) ? "Too Long" : ((length < 5) ? "Too Short" : "Exact");
    }
    render(){
        return (
            <div>
                <p className="ValidationLength">{this.renderLengthValidation(this.props.length)}</p>
            </div>
        );
    };

}

export default ValidationLength;