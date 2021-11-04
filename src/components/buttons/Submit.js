import React from "react";

function Submit(props) {

    return (

        <button className="submitBtn" id={props.id} onClick={props.handleSubmit}>Submit</button>

    )
}

export default Submit;