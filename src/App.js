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
      currentStudentSchoolIdNumber: "1",
    }
  }


  render() {
    return (
      <div className="App">
         <AllStudents changeStudentFirstName={this.changeStudentFirstName} changeStudentLastName={this.changeStudentLastName}/>
         <Student currentStudentFirstName={this.state.currentStudentFirstName} currentStudentLastName={this.state.currentStudentLastName} />
      </div>
    );
  }
changeStudentFirstName=(currentStudentFirstName)=>{
    this.setState({currentStudentFirstName:[currentStudentFirstName]})
  }
changeStudentLastName=(currentStudentLastName)=>{
    this.setState({currentStudentLastName:[currentStudentLastName]})
  }
changeStudentSchoolIdNumber=(currentStudentSchoolIdNumber)=>{
  this.setState({currentStudentSchoolIdNumber: [currentStudentSchoolIdNumber]})

}

  }


export default App;