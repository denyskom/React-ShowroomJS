import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EmployeeForm.css';
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

const EditForm = ({ match }) => {

    let employee;
    let isLoaded = false;
    axios.get(`http://localhost:3004/employees/${match.params.id}`).then(response => {
        employee = response.data;
        isLoaded = true;
    });
    return(
        <EmployeeForm id={match.params.id}
            // name={employee.full_name}
            // post={employee.post}
            // salary={employee.salary}
        />
    );





};

export default EditForm;