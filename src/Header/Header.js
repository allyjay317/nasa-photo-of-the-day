import React, { useState } from 'react';
import './Header.css';

function Header(props){
    return (
        <header>
            
            <h1>NASA Photo of the Day</h1>
            
            <div className="date-picker">
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