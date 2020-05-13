import React, {Component} from "react";
import './UserOutput.css';

class UserOutput extends Component{

    render(){
        return (
            <div>
                <p className="UserOutput">{this.props.data}</p>
            </div>
        );
    };

}

export default UserOutput;