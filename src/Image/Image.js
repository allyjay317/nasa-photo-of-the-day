import React from 'react'
import './image.css'
import { css, jsx} from '@emotion/core'

/** @jsx jsx */

function Image(props){
    if(props.type ==="image"){
        return <img css={css`
          width: 100%;
        `}
        src={props.url}
        alt="NASA Photo of the Day" />
      }
    else if(props.type ==="video"){
        return (
          <iframe 
            css={css`
              width:100%;
              height: 100vh;
            
            `}
            src={`${props.url}&autoplay=1`}
            frameborder="0"
            allowfullscreen title="NASA Video of the Day"></iframe>
        )
      }
    return <div>No Photo of the Day for this day</div>
}


export default Image