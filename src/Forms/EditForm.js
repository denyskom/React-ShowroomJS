import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EmployeeForm.css';
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

class EditForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            employee:{}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3004/employees/${this.state.id}`)
            .then(response => this.setState({employee:response.data}))
    }
    render() {
        return(
            <EmployeeForm id={this.state.id}
                name={this.state.employee.full_name}
                post={this.state.employee.post}
                salary={this.state.employee.salary}
            />
        );
    }

};

export default EditForm;