import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Deal from './Deal';

class  Deals extends Component{
    state = {
        deals: [
            {id:1,brand: "BMW", description: "Truth in Engineering", price: "5000", manager: "Harry"},
            {id:2,brand: "Lexus", description: "Truth in Engineering", price: "1000", manager: "Harry"},
            {id:3,brand: "Ford", description: "Truth in Engineering", price: "10000", manager: "Harry"}
        ],
    };

    render() {
         let deals = (
            <div>
                {this.state.deals.map(deal => {
                    return <Deal id = {deal.id}
                                 description = {deal.description}
                                 title = {deal.brand}
                                 manager = {deal.manager}
                                 price = {deal.price}/>
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