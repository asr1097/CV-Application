import React from "react";

function Add(props) {
    return (
        <button id={props.id} onClick={props.handleAdd}>
            <img alt="add" src={props.icon} id={props.id}></img>
        </button>
    )
}

export default Add;