import React from 'react';
import "./image.css";
import styled from 'styled-components'
import StyledImage from './Image';

const TransparentBackground = styled.div`
position:absolute;
z-index: -1;
background-color: white;
left: 0;
top:0;
width: 100%;
height: 100%;
opacity: .1;
`;

const ThreeRem = styled.p`
font-size: 3rem;
`;

const TwoRem = styled.p`
  font-size: 2rem;
`;

function ImageContainer(props){
    
    return(
    <div className = {props.className} alt={`"${props.data.title}": by ${props.data.copyright}. Photo taken ${props.data.date}`}>
        <TransparentBackground />
        <ThreeRem>{props.data.title}</ThreeRem>
        <TwoRem>{props.data.explanation}</TwoRem>
        <StyledImage type={props.data.media_type} url={props.data.hdurl == undefined ? props.data.url : props.data.hdurl} />
      </div>
    )
}

const StyledImageContainer = styled(ImageContainer)`
font-family: 'Bebas Neue', cursive;
position: relative;
border: 1px solid black;
width: 90%;
margin-left: 5%;
`;

export default StyledImageContainer