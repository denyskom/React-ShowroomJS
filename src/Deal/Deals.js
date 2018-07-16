import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Deal from './Deal';
import axios from "axios/index";

const allDealsURL = "http://localhost:3004/deals";
const employeeURL = "http://localhost:3004/employees";
const assortmentURL = "http://localhost:3004/assortment";


class  Deals extends Component{

    constructor (props) {
        super(props);
        this.state = {
            dealsUrl: this.props.match.params.id?`${allDealsURL}?sellerId=${this.props.match.params.id}`:allDealsURL,
            deals: [],
            assortment:[],
            managers:[],
            isDealsLoaded: false,
            isEmployeeLoaded:false,
            isAllLoaded: false
        };
    }

    loadDeals = () => {
        return axios.get(this.state.dealsUrl).then(response => {
            let dbDeals = response.data;
            this.setState({deals:dbDeals, isDealsLoaded: true})
        });
    };

    loadManagers = () => {
        let deals = this.state.deals;
        let url = `${employeeURL}?`;
        url += deals.map(deal => `id=${deal.sellerId}`).join("&");
        return axios.get(url).then(response => this.setState({managers:response.data, isEmployeeLoaded: true})
        );
    };

    mapInformationIntoFullDeal = () => {
        let deals = this.state.deals;
        let url = `${assortmentURL}?`;
        url += deals.map(deal => `id=${deal.productId}`).join("&");
        axios.get(url).then(response => {
                let assortment = response.data;
                let deals =  this.state.deals.map(deal => {
                    let manager = this.state.managers.find(manager => deal.sellerId === manager.id);
                    let product = assortment.find(product => deal.productId === product.id);

                    return {
                        ...deal,
                        manager: manager.full_name,
                        brand: product.brand,
                        description: product.description
                    }
                });
                this.setState({deals:deals, isAllLoaded:true});
            }
        );
    };

    componentDidMount(){
        if(!this.state.isDealsLoaded) {
            this.loadDeals().then(() => {
                if(this.state.isDealsLoaded) {
                    this.loadManagers().then(() => {
                        if(this.state.isEmployeeLoaded) {
                            this.mapInformationIntoFullDeal();
                        }
                    });
                }
            });
        }

        }

    renderDeals = () => {
        return (
            <div>
                {this.state.deals.map(deal => {
                    return <Deal key={deal.id}
                                 deal={deal}/>
                })
                }
            </div>
        );
    };


    render() {

        if(!this.state.isAllLoaded)  {
            return(<h3>Loading...</h3>);
        }
        if(this.state.deals.length === 0) {
            return(<h3>No deals yet</h3>);
        }
        let deals = this.renderDeals();

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