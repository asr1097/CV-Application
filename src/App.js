import React from 'react';
import Personal from "./components/Personal";
import Education from './components/Education';
import Experience from "./components/Experience";
import PersonalForm from "./components/forms/PersonalForm.js";
import EducationForm from "./components/forms/EducationForm.js";
import ExperienceForm  from "./components/forms/ExperienceForm.js";
import uniqid from "uniqid";
import "./styles/App.css";

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            personal: {

                firstName: "Milan",

                lastName: "Jovanovic",

                address: "IDK 87, Belgrade",

                email: "myemail@email.com",

                phone: "555-555-555",

            },

            personalForm: {

                firstName: "",

                lastName: "",

                address: "",

                email: "",

                phone: ""

            },

            educationList: [
                {
                    id: uniqid(),

                    schoolName: "Some school",

                    yearFrom: "2016",

                    yearTo: "2021",

                    degree: "Bachelor's",

                    field: "CS",

                    location: "Belgrade"
                }
            ],

            educationForm: {

                id: "",

                schoolName: "",

                yearFrom: "",

                yearTo: "",

                degree: "",

                field: "",

                location: ""
            },

            experienceList: [
                {
                    id: uniqid(),

                    title: "CEO",

                    company: "Facebook",

                    yearFrom: "2021",

                    yearTo: "",

                    location: "LA",

                    description: "blablabla"

                }
            ],

            experienceForm: {

                id: "",

                title: "",

                company: "",

                yearFrom: "",

                yearTo: "",

                location: "",

                description: ""

            },

            showPersonalForm: false,

            showEducationForm: false,

            showExperienceForm: false,

            addNewEdu: false,

            addNewExp: false


        }
        
        // Edit personal info callbacks
        this.handleEditPersonal = this.handleEditPersonal.bind(this)
        this.handleChangePersonalFN = this.handleChangePersonalFN.bind(this)
        this.handleChangePersonalLN = this.handleChangePersonalLN.bind(this)
        this.handleChangePersonalA = this.handleChangePersonalA.bind(this)
        this.handleChangePersonalE = this.handleChangePersonalE.bind(this)
        this.handleChangePersonalP =  this.handleChangePersonalP.bind(this)
        this.handleSubmitPersonal = this.handleSubmitPersonal.bind(this)
        this.handleCancelPersonal = this.handleCancelPersonal.bind(this)
        // Edit education info callbacks
        this.handleDeleteEdu = this.handleDeleteEdu.bind(this)
        this.handleEditEducation = this.handleEditEducation.bind(this)
        this.handleChangeEduSH = this.handleChangeEduSH.bind(this)
        this.handleChangeEduYF = this.handleChangeEduYF.bind(this)
        this.handleChangeEduYT = this.handleChangeEduYT.bind(this)
        this.handleChangeEduD = this.handleChangeEduD.bind(this)
        this.handleChangeEduL = this.handleChangeEduL.bind(this)
        this.handleChangeEduF = this.handleChangeEduF.bind(this)
        this.handleSubmitEduEdit = this.handleSubmitEduEdit.bind(this)
        this.handleAddEducation = this.handleAddEducation.bind(this)
        this.handleSubmitNewEdu = this.handleSubmitNewEdu.bind(this)
        this.handleCancelEdu = this.handleCancelEdu.bind(this)
        // Edit experience info callbacks
        this.handleDeleteExp = this.handleDeleteExp.bind(this)
        this.handleEditExp = this.handleEditExp.bind(this)
        this.handleChangeExpT = this.handleChangeExpT.bind(this)
        this.handleChangeExpC = this.handleChangeExpC.bind(this)
        this.handleChangeExpYF = this.handleChangeExpYF.bind(this)
        this.handleChangeExpYT = this.handleChangeExpYT.bind(this)
        this.handleChangeExpL = this.handleChangeExpL.bind(this)
        this.handleChangeExpD = this.handleChangeExpD.bind(this)
        this.handleSubmitExpEdit = this.handleSubmitExpEdit.bind(this)
        this.handleAddExperience = this.handleAddExperience.bind(this)
        this.handleSubmitNewExp = this.handleSubmitNewExp.bind(this)
        this.handleCancelExp = this.handleCancelExp.bind(this)
    }

    handleDeleteEdu(ev) {

        let id = ev.target.id;
        this.setState({
            educationList: this.state.educationList.filter(edu => edu.id !== id)
        })
    }

    handleDeleteExp(ev) {

        let id = ev.target.id;
        this.setState({
            experienceList: this.state.experienceList.filter(exp => exp.id !== id)
        })
    }

    handleEditPersonal() {

        let {firstName, lastName, address, email, phone} = this.state.personal;

        this.setState({
            
            showPersonalForm: true,

            personalForm: {

                firstName,

                lastName,

                address,

                email,

                phone,

            }
        
        })
    }

    handleChangePersonalFN(ev) {
        this.setState({
            personalForm: {

                ...this.state.personalForm,

                firstName: ev.target.value,

            }
        })
    }

    handleChangePersonalLN(ev) {
        this.setState({
            personalForm: {

                ...this.state.personalForm,
                
                lastName: ev.target.value,

            }
        })
    }

    handleChangePersonalA(ev) {
        this.setState({
            personalForm: {

                ...this.state.personalForm,

                address: ev.target.value,

            }
        })
    }

    handleChangePersonalE(ev) {
        this.setState({
            personalForm: {

                ...this.state.personalForm,

                email: ev.target.value,

            }
        })
    }

    handleChangePersonalP(ev) {
        this.setState({
            personalForm: {

                ...this.state.personalForm,

                phone: ev.target.value,

            }
        })
    }

    handleSubmitPersonal() {
        this.setState({

            personal: {
                firstName: this.state.personalForm.firstName,

                lastName: this.state.personalForm.lastName,

                address: this.state.personalForm.address,

                email: this.state.personalForm.email,

                phone: this.state.personalForm.phone
            },

            personalForm: {
                firstName: "",

                lastName: "",

                address: "",

                email: "",

                phone: ""
            },

            showPersonalForm: false,
        })

    }

    handleCancelPersonal() {

        this.setState({

            personalForm: {

                firstName: "",

                lastName: "",

                address: "",

                email: "",

                phone: ""
            },

            showPersonalForm: false,
        })
    }

    handleAddEducation() {
        this.setState({

            addNewEdu: true,

            showEducationForm: true

        })
    }

    handleSubmitNewEdu() {
        let newEdu = {
            
            ...this.state.educationForm,
            
            id: uniqid()
        }

        let newEduList = this.state.educationList;
        newEduList.push(newEdu)
        this.setState({

            educationList: newEduList,

            addNewEdu: false,

            showEducationForm: false,

            educationForm: {

                id: "",

                schoolName: "",

                yearFrom: "",

                yearTo: "",

                degree: "",

                field: "",

                location: ""
            }

        })
    }

    handleEditEducation(ev) {
        let id = ev.target.id;
        let ed = this.state.educationList.find(ed => ed.id === id);
        this.setState({
            educationForm: {
                id: id,

                schoolName: ed.schoolName,

                yearFrom: ed.yearFrom,

                yearTo: ed.yearTo,

                location: ed.location,

                degree: ed.degree,

                field: ed.field
            },

            showEducationForm: true,

        })
    }

    handleChangeEduSH(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                schoolName: ev.target.value,

            }
        })
    }

    handleChangeEduYF(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                yearFrom: ev.target.value

            }
        })
    }

    handleChangeEduYT(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                yearTo: ev.target.value

            }
        })
    }

    handleChangeEduL(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                location: ev.target.value

            }
        })
    }

    handleChangeEduD(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                degree: ev.target.value

            }
        })
    }
    handleChangeEduF(ev) {
        this.setState({
            educationForm: {

                ...this.state.educationForm,

                field: ev.target.value

            }
        })
    }

    handleSubmitEduEdit() {
        let id = this.state.educationForm.id;
        let index = this.state.educationList.findIndex(edu => edu.id === id)
        let newEdu = {...this.state.educationForm};
        let newEduList =  this.state.educationList;
        newEduList.splice(index, 1, newEdu);
        this.setState({

            educationList: newEduList,

            showEducationForm: false,

            educationForm:  {
                
            id: "",

            schoolName: "",

            yearFrom: "",

            yearTo: "",

            degree: "",

            field: "",

            location: ""
            }
        })
    }

    handleAddExperience() {
        this.setState({

            addNewExp: true,

            showExperienceForm: true
        })
    }

    handleSubmitNewExp() {
        let newExp = {
            
            ...this.state.experienceForm,
            
            id: uniqid()
        }

        let newExpList = this.state.experienceList;
        newExpList.push(newExp)
        this.setState({

            experienceList: newExpList,

            addNewExp: false,

            showExperienceForm: false,

            experienceForm: {

                id: "",

                title: "",

                company: "",

                yearFrom: "",

                yearTo: "",

                location: "",

                description: ""
            }
        })
    }

    handleCancelEdu() {
        this.setState({
            showEducationForm: false,

            addNewEdu: false,

            educationForm: {
                id: "",

                schoolName: "",

                yearFrom: "",

                yearTo: "",

                degree: "",

                field: "",

                location: ""
            }
        })
    }

    handleEditExp(ev) {
        let id = ev.target.id;
        let exp = this.state.experienceList.find(exp => exp.id === id);
        this.setState({

            experienceForm: {

                id: id,

                title: exp.title,

                company: exp.company,

                yearFrom: exp.yearFrom,

                yearTo: exp.yearTo,

                location: exp.location,

                description: exp.description
            },

            showExperienceForm: true,

        })
    }

    handleChangeExpT(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                title: ev.target.value,
            }
        })
    }

    handleChangeExpC(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                company: ev.target.value,
            }
        })
    }

    handleChangeExpYF(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                yearFrom: ev.target.value,
            }
        })
    }

    handleChangeExpYT(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                yearTo: ev.target.value,
            }
        })
    }

    handleChangeExpL(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                location: ev.target.value,
            }
        })
    }

    handleChangeExpD(ev) {
        this.setState({
            experienceForm: {
                ...this.state.experienceForm,

                description: ev.target.value,
            }
        })
    }

    handleSubmitExpEdit() {
        let id = this.state.experienceForm.id;
        let index = this.state.experienceList.findIndex(exp => exp.id === id);
        let newExp = {...this.state.experienceForm};
        let newExpList = this.state.experienceList;
        newExpList.splice(index, 1, newExp);
        this.setState({

            experienceList: newExpList,

            showExperienceForm: false,

            experienceForm: {
                id: "",

                title: "",

                company: "",

                yearFrom: "",

                yearTo: "",

                location: "",

                description: ""
            }

        })
    }

    handleCancelExp() {
        this.setState({

            showExperienceForm: false,

            addNewExp: false,

            experienceForm: {
                id: "",

                title: "",

                company: "",

                yearFrom: "",

                yearTo: "",

                location: "",

                description: ""
            }

        })
    }

    render() {

        let {firstName, lastName, address, email, phone} = this.state.personal;
        let {schoolName, yearFrom, yearTo, location, degree, field} = this.state.educationForm;

        return (

            <div className="mainDiv">
                <div className="personalDivWrapper">
                    <Personal 
                    firstName={firstName}
                    lastName={lastName}
                    address={address}
                    email={email}
                    phone={phone}
                    handleEdit={this.handleEditPersonal}
                    />
                </div>
                <div className="eduAndExpWrapper">
                    <div className="eduAndExpDiv">
                        <Education 
                        educationList={this.state.educationList}
                        handleDelete={this.handleDeleteEdu}
                        handleEdit={this.handleEditEducation}
                        handleAdd={this.handleAddEducation}/>
                        <Experience 
                        experienceList={this.state.experienceList}
                        handleDelete={this.handleDeleteExp}
                        handleEdit={this.handleEditExp}
                        handleAdd={this.handleAddExperience}
                        />
                    </div>
                </div>
                {this.state.showPersonalForm ? <PersonalForm 
                    firstNameF={this.state.personalForm.firstName}
                    lastNameF={this.state.personalForm.lastName}
                    addressF={this.state.personalForm.address}
                    emailF={this.state.personalForm.email}
                    phoneF={this.state.personalForm.phone}
                    handleFN={this.handleChangePersonalFN}
                    handleLN={this.handleChangePersonalLN}
                    handleA={this.handleChangePersonalA}
                    handleE={this.handleChangePersonalE}
                    handleP={this.handleChangePersonalP}
                    handleSubmit={this.handleSubmitPersonal}
                    handleCancel={this.handleCancelPersonal}/>
                    : null}
                {this.state.showEducationForm ? <EducationForm
                    schoolName={schoolName}
                    yearFrom={yearFrom}
                    yearTo={yearTo}
                    degree={degree}
                    field={field}
                    location={location}
                    handleS={this.handleChangeEduSH}
                    handleYF={this.handleChangeEduYF}
                    handleYT={this.handleChangeEduYT}
                    handleD={this.handleChangeEduD}
                    handleF={this.handleChangeEduF}
                    handleL={this.handleChangeEduL}
                    handleSubmit={this.handleSubmitEduEdit}
                    handleNewSubmit={this.handleSubmitNewEdu}
                    addNewEdu={this.state.addNewEdu}
                    handleCancel={this.handleCancelEdu}/>
                    : null}
                {this.state.showExperienceForm ? <ExperienceForm
                    title={this.state.experienceForm.title}
                    company={this.state.experienceForm.company}
                    yearFrom={this.state.experienceForm.yearFrom}
                    yearTo={this.state.experienceForm.yearTo}
                    location={this.state.experienceForm.location}
                    description={this.state.experienceForm.description}
                    handleT={this.handleChangeExpT}
                    handleC={this.handleChangeExpC}
                    handleYT={this.handleChangeExpYT}
                    handleYF={this.handleChangeExpYF}
                    handleL={this.handleChangeExpL}
                    handleD={this.handleChangeExpD}
                    handleSubmit={this.handleSubmitExpEdit}
                    handleNewSubmit={this.handleSubmitNewExp}
                    addNewExp={this.state.addNewExp}
                    handleCancel={this.handleCancelExp}/>
                    : null}
            </div>
            
        )
    }
}

export default App;
