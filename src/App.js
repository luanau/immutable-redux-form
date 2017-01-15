import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonForm from './PersonForm';
import {loadPerson, createPerson, updatePerson, removePerson} from './person';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({loadPerson, createPerson, updatePerson, removePerson}, dispatch)
  };
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    //Load initial person data
    this.props.actions.loadPerson("");
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

export default connect(
  null,
  mapDispatchToProps
)(App);


