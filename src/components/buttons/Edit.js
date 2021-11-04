import React from "react";

function Edit(props) {

    return (

        <button className="editBtn" id={props.id} onClick={props.handleEdit}>
            <img alt="edit" src={props.icon} id={props.id}></img>
        </button>

    )

}

export default Edit;