import React, { Component } from 'react'
import api from './api'

class AllStudents extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students: []
		}
	}

	getStudents = () => {
		api(`http://localhost:8080/api/students`).then(students => {
			const newStudent = this.state.students
			students.forEach(student => newStudent.push(student))
			this.setState({students: newStudent})
		})
	}
	changeStudentInformation(passedStudentFirstName, passedStudentLastName, passedStudentSchoolIdNumber, passedStudentId){
		this.props.changeStudentFirstName(passedStudentFirstName)
		this.props.changeStudentLastName(passedStudentLastName)
		this.props.changeStudentSchoolIdNumber(passedStudentSchoolIdNumber)
		this.props.changeStudentId(passedStudentId)
	}

	componentDidMount() {
		this.getStudents()
	}


	render() {
		console.log(this.state.students)
		return (<section>
			<h2> Rendering </h2>
				{this.state.students.map((student, index) => 
					<section key={index}>
						<h2  onClick={() => this.changeStudentInformation(student.studentFirstName, student.studentLastName, student.studentSchoolIdNumber, student.studentId)} >{student.studentFirstName} {student.studentLastName}</h2>
					</section>
				)}
			</section>
		)
	}
}

export default AllStudents