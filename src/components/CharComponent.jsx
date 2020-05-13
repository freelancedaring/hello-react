import React, {Component} from "react";
import './CharComponent.css';

class CharComponent extends Component{

    state = {

    }

    render(){
        return (
            <ul>
                <p className="CharComponent" onClick= {this.props.onClick}>{this.props.data}</p>
            </ul>
        );
    };

}

export default CharComponent;