import React, { Component } from 'react';
import axios from "axios"

const managerSalaryTypeId = 2;
const managersUrl = `http://localhost:3004/employees?salary_type=${managerSalaryTypeId}`;
const productUrl = "  http://localhost:3004/assortment";



class NewDeal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id,
            managers:[],
            product:{},
            managerId:0,
            isProductLoaded: false,
            isLoaded: false,
            redirect: false
        };
    }

    loadProduct = () => {
        return axios.get(`${productUrl}/${this.state.productId}`).then(response => {
            this.setState({product:response.data, isProductLoaded: true});
        });
    };

    loadManagers = () => {
        axios.get(managersUrl).then(response => {
            this.setState({managers:response.data, isLoaded:true})
        });
    };

    componentDidMount() {
        if(!this.state.isProductLoaded) {
            this.loadProduct().then(() => {
                if(this.state.isProductLoaded) {
                    this.loadManagers();
                }
            });
        }
    }

    renderManagerSelect = () => {
        return ( this.state.managers.map(manager => {
            return(<option value={manager.id}>{manager.full_name}</option>);
            })

        );
    };

    render() {
        if(!this.state.isLoaded) {
            return (<h3>Loading...</h3>);
        }

        return(<div className="container">
            <form>
                <div className="card border-0">
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body text-right">
                                <div className="text-left">
                                    <h5 className="card-title">{this.state.product.brand}</h5>
                                    <p className="card-text">{this.state.product.description}</p>
                                </div>
                                <p className="text-left md-0"><label htmlFor="managers">Manager: </label></p>
                                <select id="managers" className="form-control col-md-4">
                                    <option hidden>...</option>
                                    {this.renderManagerSelect()}
                                </select>
                                <p className="card-text" id="newDealPrice">Total Price: ${this.state.product.price}</p>
                                <button type="button" className="btn btn-outline-primary">Add Deal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>)
    }
}

export default NewDeal;