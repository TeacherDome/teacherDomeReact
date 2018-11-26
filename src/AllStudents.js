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

	componentDidMount() {
		this.getStudents()
	}

	render() {
		console.log(this.state.students)
		return (<section>
			<h2> Rendering </h2>
				{this.state.students.map((student, index) => 
					<section key={index}>
						<h2  onClick={() => this.props.changeStudentFirstName(student.firstName)}>{student.firstName} {student.lastName}</h2>
					</section>
				)}
			</section>
		)
	}
}

export default AllStudents