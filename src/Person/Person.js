import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const person = (props) => {
    return (
        <tr id="tableRow">
            <th scope="row" id="thId">{props.employee.id}</th>
            <td><a className="table-link">{props.employee.full_name}</a></td>
            <td id="thPost">{props.employee.post}</td>
            <td id="thSalary">{props.employee.salary}</td>
            <td>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <a role="button" href="/hire"  className="btn btn-outline-primary ml-1 mt-1"
                            value={props.id}>Edit</a>
                    <button onClick={props.deleteHandler}
                            className="delete btn btn-outline-dark ml-1 mt-1" type="submit">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default person;