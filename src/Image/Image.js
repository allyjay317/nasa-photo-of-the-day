import React from 'react'
import './image.css'

function Image(props){
    if(props.type ==="image"){
        return <img src={props.url} alt="NASA Photo of the Day"></img>
      }
    else if(props.type ==="video"){
        return (
          <iframe 
            src={`${props.url}&autoplay=1`}
            frameborder="0"
            allowfullscreen title="NASA Video of the Day"></iframe>
        )
      }
    return <></>
}

export default Image