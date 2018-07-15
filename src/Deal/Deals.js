import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Deal from './Deal';
import axios from "axios/index";

const dealsURL = "http://localhost:3004/deals";
const employeeURL = "http://localhost:3004/employees";
const assortmentURL = "http://localhost:3004/assortment";


class  Deals extends Component{
    state = {
        deals: [
            {id:1,brand: "BMW", description: "Truth in Engineering", price: "5000", manager: "Harry"},
            {id:2,brand: "Lexus", description: "Truth in Engineering", price: "1000", manager: "Harry"},
            {id:3,brand: "Ford", description: "Truth in Engineering", price: "10000", manager: "Harry"}
        ],
    };

    componentDidMount(){
        axios.get(dealsURL).then(response => {

        })


       }


    render() {
         let deals = (
            <div>
                {this.state.deals.map(deal => {
                    return <Deal key={deal.id}
                        deal={deal}/>
                })
                }
            </div>
        );


        return (
            <div className="container">
                <div className="deal-card card border-0">
                    <div className="card-body">
                        {deals}
                    </div>
                </div>
            </div>

        );
    }
}






export default Deals