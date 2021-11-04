import React from 'react';
import Delete from "./buttons/Delete";
import Edit from "./buttons/Edit";
import Add from "./buttons/Add";
import addIcon from "../icons/add.png";
import editIcon from "../icons/edit.png";
import deleteIcon from "../icons/delete.png";
import "../styles/Education.css";


function Education(props) {

    return (

        <div className="educationsDiv">
            <div className="mainLabelDiv">
                <label className="mainLabel">Education</label>
                <Add handleAdd={props.handleAdd} icon={addIcon}/>
            </div>
            <hr className="mainHr"/>
            {props.educationList.map(ed =>
            <div key={ed.id+1}>
                <div key={ed.id} className="educationDiv"> 
                    <div className="yearsDiv f">
                        <p>{ed.yearFrom}-{ed.yearTo}</p>
                    </div>
                    <div className="infoDiv">
                        <div className="schoolNameDiv f">
                            <p className="schoolName">{ed.schoolName}, {ed.location}</p>
                        </div>
                        <div className="degreeDiv f">
                            <p>Degree: {ed.degree}</p>
                        </div>
                        <div className="fieldDiv f">
                            <p>Field: {ed.field}</p>
                        </div>
                    </div>
                    <div className="buttonsDivEdu">
                        <Delete id={ed.id} handleDelete={props.handleDelete} icon={deleteIcon}/>
                        <Edit id={ed.id} handleEdit={props.handleEdit} icon={editIcon}/>
                    </div>
                </div>
                <hr />
                </div>
            )}
        </div>

    )
}

export default Education;