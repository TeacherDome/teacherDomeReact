import React, { Component } from 'react'
import api from './api'
import AddStudent from './AddStudent'


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
		return (
			<section class="class-list">
				<h2> Rendering </h2>
					{this.state.students.map((student, index) => 
						<h2 key={index} class="studentInList" onClick={() => 
							this.changeStudentInformation(
								student.studentFirstName, 
								student.studentLastName, 
								student.studentSchoolIdNumber, 
								student.studentId)} >
							{student.studentFirstName} {student.studentLastName}
						</h2>
					)}
				<AddStudent />
			</section>
		)
	}
}

export default AllStudents