import React from "react";
import "./style.css";
function Title(props){
    return(
        <div>
        <h4 className ="title">{props.children}</h4>
        

        </div>

    )
}
export default Title;
