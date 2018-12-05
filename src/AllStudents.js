import React, { Component } from 'react'
import api from './api'
import AddStudent from './AddStudent'

class AllStudents extends Component {
	constructor(props) {
		super(props)
	}

	getStudents = () => {
		api(`http://localhost:8080/api/students`).then(students => {
			const newStudent = this.props.allStudents
			students.forEach(student => {
				console.log(student.studentIsRetired)
				if (!student.studentIsRetired) {
					newStudent.push(student)
				}
			})
			this.setState({ students: newStudent })
		})
	}
	changeStudentInformation(passedStudent) {
		this.props.changeStudent(passedStudent)
	}

	componentDidMount() {
		this.getStudents()
	}

	render() {

		return (
			<section className="class-list">
				<h2> Class List </h2>
				{this.props.allStudents.map((student, index) => (
					<section className="studentInList" key={index}>
						<h2
							onClick={() =>
								this.changeStudentInformation(student)
							}
						>
							{student.studentFirstName} {student.studentLastName}
						</h2>
					</section>
				))}
				<AddStudent updateStudents={this.props.updateStudents} />
			</section>
		)
	}
}

export default AllStudents
