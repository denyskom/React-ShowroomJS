import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Head extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Showroom</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-end container-fluid">
                        <li className="nav-item">
                            <a className="nav-link" id="assortmentButton" href="#">Assortment <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="dealsButton" href="#">Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="employeeButton" href="#">Employee</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}

export default Head;