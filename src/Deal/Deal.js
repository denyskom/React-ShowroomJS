import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const deal = (props) => {
    return (

        <div className="card text-right mt-2">
            <div className="card-body">
                <h4 className="card-title text-left" id="dealId">Deal ID: {props.id} </h4>
                <div className="card text-left">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="deal-description card-text">{props.description}</p>
                    </div>
                </div>
                <p className="card-text" id="dealManager">Manager: {props.manager}</p>
                <p className="card-text" id="dealPrice">Total Price: {props.price}</p>
            </div>
        </div>
    )
};

export default deal;