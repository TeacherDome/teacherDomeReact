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
      currentStudent:{
        currentStudentFirstName: "Bell",
        currentStudentLastName: "Bong",
        currentStudentSchoolIdNumber: "1",
        currentStudentId: "",
      }
    }
  }


  render() {
    return (
      <div className="App">
         <AllStudents changeStudent={this.changeStudent} />
         <Student currentStudent={this.state.currentStudent} />
        <AddStudent />
        <UpdateStudent />
      </div>
    );
  }


changeStudent=(passedStudent)=>{
  this.setState({currentStudent:passedStudent})


  }
}

export default App;