import React from 'react'
import './image.css'
import styled from 'styled-components'



function Image(props){
    if(props.type ==="image"){
        return <img className={props.className} src={props.url} alt="NASA Photo of the Day"></img>
      }
    else if(props.type ==="video"){
        return (
          <iframe 
            className={props.className}
            src={`${props.url}&autoplay=1`}
            frameborder="0"
            allowfullscreen title="NASA Video of the Day"></iframe>
        )
      }
    return <></>
}

const StyledImage = styled(Image)`
  width: 100%;
  height: ${props => props.type === "video" ? "100vh" : "auto"};
`;

export default StyledImage