import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';


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
