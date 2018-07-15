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
};

    removeEmployee = (index) => {
      const employees = this.state.employees.slice();
      employees.splice(index, 1);
      this.setState({employees: employees});
    };

    componentDidMount(){
        axios.get(employeeURL)
            .then(response => {this.setState({employees: response.data});}
            )
    }



    render() {
        let employeeList = (
            <tbody id="tableBody">
            {this.state.employees.map((employee, index) => {
                return <Person
                    employee={employee}
                    key={employee.id}
                deleteHandler={() => this.removeEmployee(index)}/>
            })}
            </tbody>);

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
                    {employeeList}
                    </table>
                <div className="container w-25">
                    <Link role="button" to="/hire" className="btn btn-outline-primary btn-block">Hire</Link>
                </div>
            </div>
        );
    }
}

export default PersonList;
