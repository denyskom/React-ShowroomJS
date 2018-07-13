import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeForm from "../Forms/EmployeeForm";
import Deals from "../Deal/Deals";
import Products from "../Product/Products";
import PersonList from "../Person/PersonList";
import {Route} from 'react-router-dom';


const main = (props) => {
    return(
        <main className="container">
            <Route path="/" exact component={Products}/>
            <Route path="/deal" exact component={Deals}/>
            <Route path="/employee" exact component={PersonList}/>
            <Route path="/hire" exact component={EmployeeForm}/>
        </main>
    );
};

export default main;