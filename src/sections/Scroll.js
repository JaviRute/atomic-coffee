//this component lets me show the nav bar always on top while you scroll down through the rest of the page
import React from "react";

const Scroll = (props) => {
    return (
        //We return a div with the props.children, which is basically everything except for the navbar
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll