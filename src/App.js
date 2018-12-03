import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllStudents from './AllStudents'
import Student from './Student'
import UpdateStudent from './UpdateStudent'
import MathChart from './MathChart'

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
        <div id="container">
          <AllStudents changeStudent={this.changeStudent} />
          <section id="current-student">
             <Student currentStudent={this.state.currentStudent} />
             <MathChart />
             <UpdateStudent />
          </section>
      
        </div>

      </div>
    );
  }


changeStudent=(passedStudent)=>{
  this.setState({currentStudent:passedStudent})


  }
}

export default App;