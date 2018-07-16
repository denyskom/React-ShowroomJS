import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeForm from "../Forms/EmployeeForm";
import Deals from "../Deal/Deals";
import Products from "../Product/Products";
import PersonList from "../Person/PersonList";
import {Route} from 'react-router-dom';
import Head from "./Head";
import EditForm from "../Forms/EditForm";
import NewDeal from "../Deal/NewDeal";


const main = () => {
    return(
        <div>
            <Head/>
            <main className="container">
                <Route path="/" exact component={Products}/>
                <Route path="/deals" exact component={Deals}/>
                <Route path="/manager_deals/:id" exact component={Deals}/>
                <Route path="/deals/new/:id" exact component={NewDeal}/>
                <Route path="/employees" exact component={PersonList}/>
                <Route path="/hire" exact component={EmployeeForm}/>
                <Route path="/edit/:id" exact component={EditForm}/>
            </main>
        </div>

    );
};

export default main;