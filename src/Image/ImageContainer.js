import React from 'react';
import "./image.css";
import { css, jsx} from '@emotion/core'
import Image from './Image';

/** @jsx jsx */

function ImageContainer(props){
    
    return(
    <div 
      css={css`
      font-family: 'Bebas Neue', cursive;
      position: relative;
      border: 1px solid black;
      width: 90%;
      margin-left: 5%;
    `}
      alt={`"${props.data.title}": by ${props.data.copyright}. Photo taken ${props.data.date}`}
    >
        <div css={css`
          position:absolute;
          z-index: -1;
          background-color: white;
          left: 0;
          top:0;
          width: 100%;
          height: 100%;
          opacity: .1;
        `}></div>
        <p css={css`
          font-size: 3rem;
        `}>
            {props.data.title}
        </p>
        <p css={css`
          font-size: 2rem;
        `}>
          {props.data.explanation}
        </p>
        <Image type={props.data.media_type} url={props.data.hdurl == undefined ? props.data.url : props.data.hdurl} />
      </div>
    )
}

export default ImageContainer