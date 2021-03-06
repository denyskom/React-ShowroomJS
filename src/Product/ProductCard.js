import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const newDealUrl = "/deals/new";


const productCard = (props) => {
    return (
        <div className="card border-0">
            <div className="card-body">
                <div className="card text-right">
                    <div className="card-body">
                        <h5 className="card-title text-left" >{props.product.brand}</h5>
                        <p className="card-text text-left" >{props.product.description}</p>
                        <p className="card-text" id="productPrice">Price: ${props.product.price} </p>
                        <input type="hidden" value={props.product.id} className="productId"/>
                        <a href={`${newDealUrl}/${props.product.id}`}
                              className="btn btn-outline-primary">Create Deal</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default productCard;










