import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductCard from './ProductCard';
import axios from "axios";

const assortmentURL = " http://localhost:3004/assortment";

class Products extends Component {
    state = {
        products: [],
        isLoaded:false
    };

    componentDidMount() {
        axios.get(assortmentURL).then(response => this.setState({products: response.data, isLoaded:true}))
    }

    renderProducts = () => {
        return (
            <div>
                {this.state.products.map(productCard => {
                    return <ProductCard key={productCard.id}
                                        product={productCard}/>
                })}

            </div>
    );
    };

    render() {

        if(!this.state.isLoaded) {
            return (<h3>Loading...</h3>);
        }

       let products = this.renderProducts();
        return (
            <div className="container">
                <div className="deal-card card border-0">
                    <div className="card-body">
                        {products}
                    </div>
                </div>
            </div>

        );
    };

}

export default Products;