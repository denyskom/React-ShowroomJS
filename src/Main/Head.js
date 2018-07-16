import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
class Head extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Showroom</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-end container-fluid">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Assortment <span
                                className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link "  to="/deals">Deals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employee</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
}

export default Head;