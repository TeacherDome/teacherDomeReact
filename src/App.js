import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllStudents from './AllStudents'
import Student from './Student'
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'

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
         <AllStudents changeStudentFirstName={this.changeStudentFirstName} changeStudentLastName={this.changeStudentLastName} changeStudentSchoolIdNumber={this.changeStudentSchoolIdNumber}/>
         <Student currentStudentFirstName={this.state.currentStudentFirstName} currentStudentLastName={this.state.currentStudentLastName} currentStudentSchoolIdNumber={this.state.currentStudentSchoolIdNumber} />
        <AddStudent />
        <UpdateStudent />
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