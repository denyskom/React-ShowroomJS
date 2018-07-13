import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Person from './Person';
import {Link} from 'react-router-dom'

class PersonList extends Component {

    state = {
        employees: [
            {id:1,name: "Ron", post: "Manager", salary: "5000" },
            {id:2,name: "Harry", post: "Stranger", salary: "1000" },
            {id:3,name: "Tom", post: "Lord", salary: "10000" }
    ],
};

    removeEmployee = (index) => {
      const employees = this.state.employees.slice();
      employees.splice(index, 1);
      this.setState({employees: employees});
    };


    render() {
        let employeeList = (
            <tbody id="tableBody">
            {this.state.employees.map((employee, index) => {
                return <Person name={employee.name}
                               key={employee.id}
                        id={employee.id}
                        post={employee.post}
                        salary={employee.salary}
                deleteHandler={() => this.removeEmployee(index)}
                               editNameHanler={(event) => this.editName(event,employee.id)}/>
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
