import React, { Component } from 'react'
<<<<<<< HEAD
import api from './api'
import MathChart from './MathChart'
=======
import UpdateStudent from './UpdateStudent'
>>>>>>> master

class Student extends Component {
	constructor(props) {
		super(props)
		this.state = {
			studentRetireCheck: false
		}
	}

	updateAllStudents = response => {
		this.props.updateStudents(response)
	}

	submitRetiredStudent = () =>{
		fetch('/api/students/retireStudent', {
			method: 'post',
			body: JSON.stringify({
				studentId: this.props.currentStudent.studentId
			})
		})
			.then(res => res.json())
			.then(students => this.updateAllStudents(students))
	
		// var xhttp = new XMLHttpRequest()
		// var studentIdToRetire = this.props.currentStudent.studentId
		// var url = '/api/students/retireStudent'

		// xhttp.onreadystatechange = function() {
		// 	if (this.readState === 4 && this.status === 200) {
		// 	}
		// }

		// xhttp.open('POST', url, true)
		// const body = JSON.stringify({
		// 	studentId: studentIdToRetire
		// })

		// xhttp.send(body)
	}

	toggleCheck = () => {
		if (
			window.confirm(
				'Are you sure that you would like to retire this student?'
			)
		) {
			this.setState({
				studentRetireCheck: !this.state.studentRetireCheck
			})
			this.submitRetiredStudent()
		}
	}

	render() {
		return (
			<section
				id="studentSection"
				key={this.props.currentStudent.studentId}
			>
				<p> {this.props.currentStudent.studentFirstName}</p>
				<p> {this.props.currentStudent.studentLastName}</p>
				<MathChart />
				<input
					type="checkbox"
					id="checkboxChoice"
					checked={this.state.studentRetireCheck}
					onChange={this.toggleCheck}
				/>
				<p>Retire Student</p>
				<UpdateStudent
					studentId={this.props.currentStudent.studentId}
				/>
			</section>
		)
	}
}

export default Student
