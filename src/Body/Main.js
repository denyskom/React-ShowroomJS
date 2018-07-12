import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const main = (props) => {
    return(
        <main className="container">
            {props.children}
        </main>
    );
};

export default main;