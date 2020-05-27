import React, { useState } from 'react'
import './image.css'

function Image(props){
    if(props.type ==="image"){
        return <img src={props.url}></img>
      }
    else if(props.type ==="video"){
        return (
          <iframe 
            src={`${props.url}&autoplay=1`}
            frameborder="0"
            allowfullscreen></iframe>
        )
      }
    return <></>
}

export default Image