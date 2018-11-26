import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllStudents from './AllStudents'
import Student from './Student'

class App extends Component {
    constructor() {
    super()
    this.state = {
      currentStudentFirstName: "Bell",
      currentStudentLastName: "Bong",
    }
  }


  render() {
    return (
      <div className="App">
         <AllStudents changeStudentFirstName={this.changeStudentFirstName}/>
         <Student currentStudentFirstName={this.state.currentStudentFirstName}/>
      </div>
    );
  }
  
changeStudentFirstName=(currentStudentFirstName)=>{
    this.setState({currentStudentFirstName:[currentStudentFirstName]})
  }

}


export default App;