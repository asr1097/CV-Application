import React from "react";
import Submit from "../buttons/Submit";
import Cancel from "../buttons/Cancel";
import "../../styles/Education.css";

function EducationForm(props) {


    let handleSubmit;
    if(props.addNewEdu) {handleSubmit=props.handleNewSubmit}
    else {handleSubmit=props.handleSubmit}

    return (

        <div className="educationFormDiv formDiv">
            <form className="educationForm form">
                <input type="text" value={props.schoolName} onChange={props.handleS} required></input>
                <label className="formLabel">School</label>
                <div className="yearsFormDiv">
                    <input className="yearInput fromInput" type="text" value={props.yearFrom} onChange={props.handleYF} required></input>
                    -
                    <input className="yearInput toInput" type="text" value={props.yearTo} onChange={props.handleYT} required></input>
                    <label className="yearLabel fromLabel">From</label>
                    <label className="yearLabel toLabel">To</label>
                </div>
                <input type="text" value={props.degree} onChange={props.handleD} required></input>
                <label className="formLabel">Degree</label>
                <input type="text" value={props.field} onChange={props.handleF} required></input>
                <label className="formLabel">Field</label>
                <input type="text" value={props.location} onChange={props.handleL} required></input>
                <label className="formLabel">Location</label>
                <div className="formBtns">
                    <Submit handleSubmit={handleSubmit} />
                    <Cancel handleCancel={props.handleCancel}/>
                </div>
            </form>
        </div>

    )
}

export default EducationForm;