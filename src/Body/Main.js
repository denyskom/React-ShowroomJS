import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeForm from "../Forms/EmployeeForm";
import Deals from "../Deal/Deals";
import Products from "../Product/Products";
import PersonList from "../Person/PersonList";
import {Route} from 'react-router-dom';
import Head from "./Head";


const main = (props) => {
    return(
        <div>
            <Head/>
            <main className="container">
                <Route path="/" exact component={Products}/>
                <Route path="/deal" exact component={Deals}/>
                <Route path="/employee" exact component={PersonList}/>
                <Route path="/hire" exact component={EmployeeForm}/>
                <Route path="/edit" exact component={EmployeeForm}/>
            </main>
        </div>

    );
};

export default main;