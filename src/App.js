import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonForm from './PersonForm';
import {loadPerson} from './person';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    //Load initial person data
    loadPerson("");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PersonForm/>
      </div>
    );
  }
}

export default App;
