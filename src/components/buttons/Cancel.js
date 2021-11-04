import React from "react";

function Cancel(props) {

    return (

        <button className="cancelBtn" id={props.id} onClick={props.handleCancel}>Cancel</button>

    )

}

export default Cancel;