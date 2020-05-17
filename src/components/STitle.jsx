import React, {Component} from "react";
import Radium from 'radium';
import styled from 'styled-components';
const style = {
    color: "black",
    // this semantic is using Radium
    ":hover": {
        backgroundColor: "grey"
    }
};

// styled component will be using all plain css on its template, not the on like the css above
// backgroundColor vs background-color
const StyledTitle =styled.h1`
    color: black;
    &:hover {
        background-color: grey
    };
`;
class STitle extends Component{
    render(){
        return (
            <StyledTitle> {this.props.title} </StyledTitle>
        );
    };

}

export default Radium(STitle);