import React, {useState} from "react"
import "../styles/Header.css";


function Header(props) {



    return (
        <header>
            My HEADER
            <button className={ props.buttonName } onClick={props.handleClick}>{ props.buttonName }, clicked: { props.count } times</button>
        </header>
    )
}


export default Header;