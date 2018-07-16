import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Person from './Person';
import {Link} from 'react-router-dom'
import axios from "axios"

const employeeURL = " http://localhost:3004/employees";

class PersonList extends Component {

    state = {
        employees: [
            {id:1,full_name: "Ron", post: "Manager", salary: "%" },
            {id:2,full_name: "Harry", post: "Stranger", salary: "1000" },
            {id:3,full_name: "Tom", post: "Lord", salary: "10000" }
    ],
        isLoaded: false
};

    componentDidMount(){
        axios.get(employeeURL)
            .then(response => {this.setState({employees: response.data,isLoaded:true});}
            )
    }

    renderEmployeeTable = () => {
        const employeeTable = this.state.employees.map((employee) => {
            return <Person
                employee={employee}
                key={employee.id}
                deleteHandler={() => this.deleteEmployee(employee.id)}/>
        });

        return (
            <tbody id="tableBody">
            {employeeTable}
            </tbody>);

    };

    deleteEmployee = (id) => {
        axios.delete(`${employeeURL}/${id}`)
            .then(() => this.componentDidMount());
    };

    render() {
        if(!this.state.isLoaded) {
            return (<h3>Loading...</h3>);
        }

        return(
            <div>
                <table className="table border table-striped mt-4" id="tableHead">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Post</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    {this.renderEmployeeTable()}
                    </table>
                <div className="container w-25">
                    <Link role="button" to="/hire" className="btn btn-outline-primary btn-block">Hire</Link>
                </div>
            </div>
        );
    }
}

export default PersonList;
