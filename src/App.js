import React, { Component } from 'react';
import './App.css';
import PersonList from './Person/PersonList';
import Head from './Body/Head';
import Main from './Body/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Head/>
              <Main><PersonList/></Main>
          </div>
  );

  }
}



export default App;
