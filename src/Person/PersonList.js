import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Person from './Person';

class PersonList extends Component {

    state = {
        employees: [
            {id:1,name: "Ron", post: "Manager", salary: "5000" },
            {id:2,name: "Harry", post: "Stranger", salary: "1000" },
            {id:3,name: "Tom", post: "Lord", salary: "10000" }
    ],
        index: 0,

};

    randomEmployee = () => {
        let num = Math.random() * 2;
        num = Math.round(num);
        this.setState({index: num});
    };


    render() {
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
                    <tbody id="tableBody">
                    <Person name={this.state.employees[this.state.index].name}
                        id={this.state.employees[this.state.index].id}
                        post={this.state.employees[this.state.index].post}
                            salary={this.state.employees[this.state.index].salary}/>
                        </tbody>
                        </table>
                        <button onClick={this.randomEmployee} type="button" className="btn btn-outline-primary btn-lg btn-block"
                                id="hireButton">Other</button>
            </div>
        );
    }
}




export default PersonList;
