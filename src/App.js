import React, { Component } from 'react'
import './App.css'
import AllStudents from './AllStudents'
import Student from './Student'
import UpdateStudent from './UpdateStudent'

class App extends Component {
	constructor() {
		super()
    this.state = {
      students: []}
		this.state = {
			currentStudent: {
				currentStudentFirstName: 'Bell',
				currentStudentLastName: 'Bong',
				currentStudentSchoolIdNumber: '1',
				currentStudentId: ''
			}
		}
	}

  updateStudents = newStudents => {
    this.setState({ students: newStudents })
  }

	render() {
		return (
			<div className="App">
				<AllStudents changeStudent={this.changeStudent} />
				<Student updateStudents = {this.updateStudents} currentStudent={this.state.currentStudent} />
          <section id="current-student">
             // <Student currentStudent={this.state.currentStudent} />
             <UpdateStudent />
          </section>
			</div>
		)
	}

	changeStudent = passedStudent => {
		this.setState({ currentStudent: passedStudent })
	}
}

export default App
