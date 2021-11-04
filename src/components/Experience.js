import React from 'react';
import Delete from "./buttons/Delete";
import Edit from "./buttons/Edit";
import Add from "./buttons/Add";
import addIcon from "../icons/add.png";
import deleteIcon from "../icons/delete.png";
import editIcon from "../icons/edit.png";

function Experience(props) {

    return (

        <div className="experiencesDiv">
            <div className="mainLabelDiv">
                <label className="mainLabel">Work Experience</label>
                <Add handleAdd={props.handleAdd} icon={addIcon} />
            </div>
            <hr className="mainHr"/>
            {props.experienceList.map(el =>
                <div key={el.id+1}>
                    <div key={el.id} className="experienceDiv">
                        <div className="yearsDiv f">
                            <p>{el.yearFrom}-{el.yearTo}</p>
                        </div>
                        <div className="infoDiv">
                            <div className="titleDiv f">
                                <p>{el.title}</p>
                            </div>
                            <div className="companyDiv f">
                                <p>{el.company}, {el.location}</p>
                            </div>
                            <div className="descriptionDiv f">
                                <p>{el.description}</p>
                            </div>
                        </div>
                        <div className="buttonsDivExp">
                            <Delete id={el.id} handleDelete={props.handleDelete} icon={deleteIcon}/>
                            <Edit id={el.id} handleEdit={props.handleEdit} icon={editIcon}/>
                        </div>
                    </div>
                    <hr />
                </div>)}
        </div>

    )

}

export default Experience;