import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllStudents from './AllStudents'


class App extends Component {
    constructor() {
    super()
    this.state = {
  
    }
  }


  render() {
    return (
      <div className="App">
         <AllStudents />
      </div>
    );
  }
}

export default App;