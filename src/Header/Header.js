import React from 'react';
import './Header.css';
import styled from 'styled-components';

const BebasFiveRem = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-size: 5rem;
`;

function Header(props){
    return (
        <header className={props.className}>
            <BebasFiveRem>NASA Photo of the Day</BebasFiveRem>
            
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

const StyledHeader = styled(Header)`
display: flex;
justify-content: space-around;
align-items: center;
`;

export default StyledHeader