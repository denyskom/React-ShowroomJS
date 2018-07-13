import React, { Component } from 'react';
import './App.css';
import PersonList from './Person/PersonList';
import Head from './Body/Head';
import Main from './Body/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Deals from "./Deal/Deals";
import Products from "./Product/Products"
import EmployeeForm from "./Forms/EmployeeForm";
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Head/>
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
          </div>
  );

  }
}



export default App;
