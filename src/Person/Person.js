import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const person = (props) => {
    return (
        <tr id="tableRow">
            <th scope="row" id="thId">{props.id}</th>
            <td><a className="table-link">{props.name}</a></td>
            <td id="thPost">{props.post}</td>
            <td id="thSalary">{props.salary}</td>
            <td>
                <div class="btn-group-toggle" data-toggle="buttons">
                    <button onClick={props.editHandler} className="edit btn btn-outline-primary ml-1 mt-1" type="submit">Edit</button>
                    <button onClick={props.deleteHandler} className="delete btn btn-outline-dark ml-1 mt-1" type="submit">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default person;