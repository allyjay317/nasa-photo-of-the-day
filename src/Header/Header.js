import React from 'react';
import './Header.css';
import { css, jsx} from '@emotion/core'

/** @jsx jsx */

function Header(props){
    return (
        <header css={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
        `}>
            <h1 css={css`
                font-family: 'Bebas Neue', cursive;
                font-size: 5rem;
            `}>
                NASA Photo of the Day
            </h1>
            
            <div>
                <p>View another date</p>
                <form onSubmit={props.submitHandler}>
                    <input type="date" onChange={props.changeHandler}></input>
                    <input type="submit"></input>
                </form>
            </div>
            
        </header>
    )
}


export default Header