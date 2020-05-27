import React from 'react';
import "./image.css";
import Image from './Image';

function ImageContainer(props){
    
    return(
    <div className="img-container" alt={`"${props.data.title}": by ${props.data.copyright}. Photo taken ${props.data.date}`}>
        <div className="transparent-background"></div>
        <h2>{props.data.title}</h2>
        <p>{props.data.explanation}</p>
        <Image type={props.data.media_type} url={props.data.hdurl == undefined ? props.data.url : props.data.hdurl} />
      </div>
    )
}

export default ImageContainer