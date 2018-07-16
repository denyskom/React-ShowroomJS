import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeForm from "../Forms/EmployeeForm";
import Deals from "../Deal/Deals";
import Products from "../Product/Products";
import PersonList from "../Person/PersonList";
import {Route} from 'react-router-dom';
import Head from "./Head";
import EditForm from "../Forms/EditForm";


const main = (props) => {
    return(
        <div>
            <Head/>
            <main className="container">
                <Route path="/" exact component={Products}/>
                <Route path="/deals" exact component={Deals}/>
                <Route path="/deals/:id" exact component={Deals}/>
                <Route path="/employees" exact component={PersonList}/>
                <Route path="/hire" exact component={EmployeeForm}/>
                <Route path="/edit/:id" component={EditForm}/>

            </main>
        </div>

    );
};

export default main;