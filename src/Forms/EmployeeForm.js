import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EmployeeForm.css';
import axios from "axios";
const salaryTypeURL = "http://localhost:3004/salary_type";


class EmployeeForm extends Component{
    constructor (props) {
        super(props);
        this.state = {
            salaryTypes:[],
            inValidNameError: "*Invalid name",
            inValidSalaryError: "*Salary should contain numbers or % sign",
            inValidPostError: "*Invalid post",
            inputName: "",
            inputPost: "",
            inputSalary: "",
            inputPostValid: false,
            inputSalaryValid: false,
            inputNameValid: false,
            isButtonDisabled: true
        };
    }

    componentDidMount(){
        axios.get(salaryTypeURL)
            .then(response => {this.setState({salaryTypes: response.data});});
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        this.setState({[name]:value}, () => this.validateInput(name));

    };

    validateInput = (name) => {
        console.log(this.state[name]);
        if(this.state[name].length >= 2) {
            this.setState({[name +"Valid"]: true},() => this.validateAllFields());
            return;
        }

        this.setState({[name +"Valid"]: false, isButtonDisabled:true});
    };

    validateAllFields = () => {
        if(this.state.inputNameValid &&
            this.state.inputPostValid &&
            this.state.inputSalaryValid) {
            this.setState({isButtonDisabled: false});
        }
    };

    renderSalaryTypeSelect = ()  => {
        const options = this.state.salaryTypes.map(salaryType => {
            return(<option key={salaryType.id} value={salaryType.id}>{salaryType.name}</option>);
        });

        return(<div className="form-group col-md-4">
            <label htmlFor="inputSalaryType">Salary Type</label>
            <select onBlur={this.onChangeHandler} name="inputSalaryType" className="form-control">
                {options}
            </select>
        </div>);
    };


    render () {

        return(
            <div className="container mt-4">
                <form>
                    <h3 className="mb-4 text-left" id="hireTitle">Create new employee:</h3>
                    <div className="form-row text-left">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name:</label>
                            <input type="text" className="form-control"
                                   onChange={this.onChangeHandler} name="inputName" placeholder="Name" required/>
                                <span hidden ={this.state.inputName ==="" || this.state.inputNameValid}
                                      className="help-block" >{this.state.inValidNameError}</span>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPost">Post: </label>
                            <input type="text" className="form-control"
                                   onChange={this.onChangeHandler} name="inputPost" placeholder="Post" required/>
                                <span hidden ={this.state.inputPost ==="" || this.state.inputPostValid}
                                    className="help-block" >{this.state.inValidPostError}</span>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputSalary">Salary</label>
                            <input type="text" className="form-control"
                                   onChange={this.onChangeHandler} name="inputSalary" placeholder="Salary" required/>
                                <span hidden ={this.state.inputSalary ==="" || this.state.inputSalaryValid}
                                    className="help-block">{this.state.inValidSalaryError}</span>
                        </div>
                        {this.renderSalaryTypeSelect()}
                    </div>
                    <div className="container w-25">
                        <button type="button" className="btn btn-outline-primary btn-block"
                                id="addButton" disabled={this.state.isButtonDisabled}>Hire</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default EmployeeForm;