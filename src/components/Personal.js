import React from 'react';
import Edit from "./buttons/Edit";
import editIcon from "../icons/edit.png";
import "../styles/Personal.css";

function Personal(props) {

    return (

        <div className="personalDiv">
            <div className="mainLabelDiv">
                <label className="mainLabel">Personal Info</label>
                <Edit handleEdit={props.handleEdit} icon={editIcon}/>
            </div>
            <hr className="mainHr"/>
            <div className="personalInfo">
                <div className="firstNameDiv f">
                    <label className="smLabel">First Name</label>
                    <p className="personalP">{props.firstName}</p>
                </div>
                <div className="lastNameDiv f">
                    <label className="smLabel">Last Name</label>
                    <p className="personalP">{props.lastName}</p>
                </div>
                <div className="addressDiv f">
                    <label className="smLabel">Adress</label>
                    <p className="personalP">{props.address}</p>
                </div>
                <div className="emailDiv f">
                    <label className="smLabel">Email</label>
                    <p className="personalP">{props.email}</p>
                </div>
                <div className="phoneDiv f">
                    <label className="smLabel">Phone</label>
                    <p className="personalP">{props.phone}</p>
                </div>
            </div>
        </div>

    )
}

export default Personal
