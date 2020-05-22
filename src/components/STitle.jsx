import React from "react";
import Radium from 'radium';
import styled from 'styled-components';
// styled component will be using all plain css on its template, not the on like the css above
// backgroundColor vs background-color
const StyledTitle =styled.h1`
    color: black;
    &:hover {
        background-color: grey
    };
    `;
// instead of doing it as a class component, we just make a functional component
// since we are not managing any state and use no lifecycle

const STitle = (props) => {
    return (
        <StyledTitle> {props.title} </StyledTitle>
    )
}

export default Radium(STitle);