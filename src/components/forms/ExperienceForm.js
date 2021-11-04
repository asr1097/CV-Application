import React from "react";
import Submit from "../buttons/Submit";
import Cancel from "../buttons/Cancel";
import "../../styles/Experience.css";

function ExperienceForm(props) {

    let handleSubmit;
    if(props.addNewExp) {handleSubmit = props.handleNewSubmit}
    else{handleSubmit = props.handleSubmit}

    return (

        <div className="experienceFormDiv formDiv">
        <form className="experienceForm form">
            <input type="text" value={props.title} onChange={props.handleT} required></input>
            <label className="formLabel">Title</label>
            <input type="text" value={props.company} onChange={props.handleC} required></input>
            <label className="formLabel">Company</label>
            <div className="yearsFormDiv">
                <input className="yearInput fromInput" type="text" value={props.yearFrom} onChange={props.handleYF} required></input>
                -
                <input className="yearInput toInput" type="text" value={props.yearTo} onChange={props.handleYT} required></input>
                <label className="yearLabel fromLabel">From</label>
                <label className="yearLabel toLabel">To</label>
            </div>
            <input type="text" value={props.location} onChange={props.handleL} required></input>
            <label className="formLabel">Location</label>
            <input type="text" value={props.description} onChange={props.handleD} required></input>
            <label className="formLabel">Job Description</label>
            <div className="formBtns">
                <Submit handleSubmit={handleSubmit} />
                <Cancel handleCancel={props.handleCancel}/>
            </div>
        </form>
    </div>

    )

}

export default ExperienceForm;