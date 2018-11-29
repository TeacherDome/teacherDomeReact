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
      currentStudentId: "",
    }
  }


  render() {
    return (
      <div className="App">
         <AllStudents changeStudentFirstName={this.changeStudentFirstName} changeStudentLastName={this.changeStudentLastName} changeStudentSchoolIdNumber={this.changeStudentSchoolIdNumber} changeStudentId = {this.changeStudentId}/>
         <Student currentStudentFirstName={this.state.currentStudentFirstName} currentStudentLastName={this.state.currentStudentLastName} currentStudentSchoolIdNumber={this.state.currentStudentSchoolIdNumber} currentStudentId = {this.state.currentStudentId}/>
        <AddStudent />
        <UpdateStudent />
      </div>
    );
  }
changeStudentFirstName=(passedStudentFirstName)=>{
    this.setState({currentStudentFirstName:[passedStudentFirstName]})
  }
changeStudentLastName=(passedStudentLastName)=>{
    this.setState({currentStudentLastName:[passedStudentLastName]})
  }
changeStudentSchoolIdNumber=(passedStudentSchoolIdNumber)=>{
  this.setState({currentStudentSchoolIdNumber: [passedStudentSchoolIdNumber]})
}

changeStudentId=(passedStudentId)=>{
  this.setState({currentStudentId: [passedStudentId]})
}
  }


export default App;