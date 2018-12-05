import React, { Component } from 'react'
import './MainStudentPage.css'
import AllStudents from './AllStudents'
import Student from './Student'
import UpdateStudent from './UpdateStudent'


class MainStudentPage extends Component {
	constructor() {
		super()
		this.state = {
      students:[],
			 currentStudent: {
				currentStudentFirstName: '',
				currentStudentLastName: '',
				currentStudentSchoolIdNumber: '',
				currentStudentId: ''
			}
		}
	}

  updateStudents = newStudents => {
    this.setState({ students: newStudents })
  }

	render() {
		return (
			<div className="MainStudentPage">
				<AllStudents allStudents = {this.state.students} changeStudent={this.changeStudent} updateStudents = {this.updateStudents} />
				<Student updateStudents = {this.updateStudents} currentStudent={this.state.currentStudent} changeStudent={this.changeStudent}/>
			</div>
		)
	}

	changeStudent = passedStudent => {
		this.setState({ currentStudent: passedStudent })
	}
}

export default MainStudentPage
