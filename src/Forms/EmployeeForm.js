import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class EmployeeForm extends Component{
    state = {
        inValidNameError: "*Invalid name",
        inValidSalaryError: "*Salary should contain numbers or % sign",
        inValidPostError: "*Invalid post",
        isNameValid: true,
        isPostValid: true,
        isSalaryValid: true
    };

    render () {

        return(
            <div className="container mt-4">
                <form>
                    <h3 className="mb-4 text-left" id="hireTitle">Create new employee:</h3>
                    <div className="form-row text-left">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name:</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Name" required/>
                                <span className="help-block" hidden>{this.state.inValidNameError}</span>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputPost">Post: </label>
                            <input type="text" className="form-control" id="inputPost" placeholder="Post" required/>
                                <span className="help-block" hidden>{this.state.inValidPostError}</span>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputSalary">Salary</label>
                            <input type="text" className="form-control" id="inputSalary" placeholder="Salary" required/>
                                <span className="help-block" hidden>{this.state.inValidSalaryError}</span>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="inputSalaryType">Salary Type</label>
                            <select id="inputSalaryType" className="form-control">
                                <option className="salaryOption">...</option>
                            </select>
                        </div>
                    </div>
                    <div className="container w-25">
                        <button type="button" className="btn btn-outline-primary btn-block" id="addButton">Hire</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default EmployeeForm;