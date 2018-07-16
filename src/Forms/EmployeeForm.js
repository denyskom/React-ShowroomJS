import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EmployeeForm.css';
import axios from "axios";

const salaryTypeURL = "http://localhost:3004/salary_type";
const employeeURL = "http://localhost:3004/employees";
const defaultEmployeeID = 0;


class EmployeeForm extends Component{
    constructor (props) {
        super(props);
        this.state = {
            isLoaded:false,
            id:props.id?Number(props.id):defaultEmployeeID,
            salaryTypes:[],
            inValidNameError: "*Invalid name",
            inValidSalaryError: "*Salary should contain numbers or % sign",
            inValidPostError: "*Invalid post",
            inputName: props.name?props.name:"",
            inputPost: props.post?props.post:"",
            inputSalary: props.salary?props.salary:"",
            inputSalaryType:"",
            inputPostValid: false,
            inputSalaryValid: false,
            inputNameValid: false,
            isButtonDisabled: true,
            isManager: false,
            redirect: false
        };

    }

    componentDidMount(){
        if(Number(this.state.id) !== 0) {
            this.validateInput("inputPost");
            this.validateInput("inputSalary");
            this.validateInput("inputName");
        }

        axios.get(salaryTypeURL)
            .then(response => {this.setState({salaryTypes: response.data, isLoaded:true});});
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        this.setState({[name]:value}, () => this.validateInput(name));

    };

    validateInput = (name) => {
        if(this.state[name].length >= 2 || this.state[name]==="%") {
            this.setState({[name +"Valid"]: true},() => this.validateAllFields());
            return;
        }

        this.setState({[name +"Valid"]: false, isButtonDisabled:true});
    };

    validateAllFields = () => {
        if(this.state.inputNameValid &&
            this.state.inputPostValid &&
            this.state.inputSalaryValid &&
            this.state.inputSalaryType !== "") {
            this.setState({isButtonDisabled: false});
        }
    };

    onInputHandler = (event) => {
        const salaryType = Number(event.target.value);
        if(salaryType === 2) {
            this.setState({
                inputPost: "Manager",
                inputSalary: "%",
                inputSalaryType: salaryType,
                isManager:true

            }, () => {
                this.validateInput("inputPost");
                this.validateInput("inputSalary");
                this.validateAllFields()
            });
            return;
        }

        this.setState({
            inputPost: this.state.inputPost,
            inputSalary: this.state.inputSalary,
            inputSalaryType: salaryType,
            isManager: false}, () => this.validateAllFields());
    };

    renderSalaryTypeSelect = ()  => {
        const options = this.state.salaryTypes.map(salaryType => {
            return(<option key={salaryType.id} value={salaryType.id}>{salaryType.name}</option>);
        });

        return(<div className="form-group col-md-4">
            <label htmlFor="inputSalaryType">Salary Type</label>
            <select onInput={this.onInputHandler} name="inputSalaryType" className="form-control">
                <option hidden>...</option>
                {options}
            </select>
        </div>);
    };

    addEmployee = () => {
        axios.post(employeeURL,
            {
            full_name:this.state.inputName,
            salary:this.state.inputSalary,
            post:this.state.inputPost,
            salary_type:Number(this.state.inputSalaryType)
        }).then(() => this.setState({redirect:true}));
    };

    editEmployee = () => {
        axios.patch(`${employeeURL}/${this.state.id}`,
            {
                full_name:this.state.inputName,
                salary:this.state.inputSalary,
                post:this.state.inputPost,
                salary_type:Number(this.state.inputSalaryType)
            }).then(() => this.setState({redirect:true}));
    };


    render () {
        if(this.state.redirect) {
            return (<Redirect to="/employees"/>);
        }

        if(!this.state.isLoaded) {
            return (<h3>Loading...</h3>);
        }

        return(
            <div className="container mt-4">
                <form>
                    <h3 className="mb-4 text-left" id="hireTitle">
                        {this.state.id !== defaultEmployeeID?"Change employee info:":"Create new employee:"}</h3>
                    <div className="form-row text-left">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name:</label>
                            <input type="text" className="form-control" value={this.state.inputName}
                                   onChange={this.onChangeHandler} name="inputName" placeholder="Name" required/>
                            <span hidden ={this.state.inputName ==="" || this.state.inputNameValid}
                                  className="help-block" >{this.state.inValidNameError}</span>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPost">Post: </label>
                            <input type="text" className="form-control" value={this.state.inputPost} disabled={this.state.isManager}
                                   onChange={this.onChangeHandler} name="inputPost" placeholder="Post" required/>
                            <span hidden ={this.state.inputPost ==="" || this.state.inputPostValid}
                                  className="help-block" >{this.state.inValidPostError}</span>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputSalary">Salary</label>
                            <input type="text" className="form-control" value={this.state.inputSalary} disabled={this.state.isManager}
                                   onChange={this.onChangeHandler} name="inputSalary" placeholder="Salary" required/>
                            <span hidden ={this.state.inputSalary ==="" || this.state.inputSalaryValid}
                                  className="help-block">{this.state.inValidSalaryError}</span>
                        </div>
                        {this.renderSalaryTypeSelect()}
                    </div>
                    <div className="container w-25">
                        <button type="button" className="btn btn-outline-primary btn-block"
                                onClick={this.state.id !== defaultEmployeeID?this.editEmployee:this.addEmployee}
                                    disabled={this.state.isButtonDisabled}>
                            {this.state.id !== defaultEmployeeID?"Edit":"Hire"}</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default EmployeeForm;