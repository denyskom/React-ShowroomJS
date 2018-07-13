import React, { Component } from 'react';
import './App.css';
import Head from './Body/Head';
import Main from './Body/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router,BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
      return (
          <div className="App">
                 <BrowserRouter>
                    <Main/>
                 </BrowserRouter>
          </div>
  );

  }
}

export default App;
