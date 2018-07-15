import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductCard from './ProductCard';

class Products extends Component {
    state = {
        products: [
            { id: 1, brand: "BMW", description: "Truth in Engineering", price: 15000},
            { id: 2, brand: "Audi", description: "Truth in Engineering", price: 20000},
            { id: 3, brand: "Ford", description: "Truth in Engineering", price: 10000}
        ]
    }

    render() {

       let products = (
           <div>
               {this.state.products.map(productCard => {
                   return <ProductCard key={productCard.id}
                       product={productCard}/>
               })}

           </div>
       );
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