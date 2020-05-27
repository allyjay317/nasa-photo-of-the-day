import React from "react";
import "./Footer.css";

function Footer(props){
    return <footer>Copyright {props.name != undefined ? props.name : "NASA"}</footer>
}

export default Footer;