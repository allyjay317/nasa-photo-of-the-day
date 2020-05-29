import React from "react";

function Footer(props){
    return <footer>Copyright {props.name != undefined ? props.name : "NASA"}</footer>
}

export default Footer;