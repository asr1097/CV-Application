import React from "react";
import Submit from "../buttons/Submit";
import Cancel from "../buttons/Cancel";
import "../../styles/Personal.css";

function PersonalForm(props) {

    return (

        <div className="personalFormDiv formDiv">
            <form className="personalForm form">
                <input type="text" value={props.firstNameF} onChange={props.handleFN} required></input>
                <label className="formLabel">First Name</label>
                <input type="text" value={props.lastNameF} onChange={props.handleLN} required></input>
                <label className="formLabel">Last Name</label>
                <input type="text" value={props.addressF} onChange={props.handleA} required></input>
                <label className="formLabel">Address</label>
                <input type="email" value={props.emailF} onChange={props.handleE} required></input>
                <label className="formLabel">Email</label>
                <input type="text" value={props.phoneF} onChange={props.handleP} required></input>
                <label className="formLabel">Phone</label>
                <div className="formBtns">
                    <Submit handleSubmit={props.handleSubmit} />
                    <Cancel handleCancel={props.handleCancel} />
                </div>
            </form>
        </div>

    )
}

export default PersonalForm;