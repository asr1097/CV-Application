import React from "react";

function Delete(props) {

    return (

        <button className="delBtn" id={props.id} onClick={props.handleDelete}>
            <img alt="delete" src={props.icon} id={props.id}></img>
        </button>

    )

}

export default Delete;