import React from "react";
import "./style.css";

function FriendCard(props){
    return(
        <div className ="card">
<div className="img-container" key={props.id} onClick ={handleClick}>
<img id ={props.id}
src={props.image}
alt ={props.name}
/>

</div>
        </div>
    );
}

export default FriendCard;