import React, { Component } from 'react'
import api from './api'
import MathChart from './MathChart'
import UpdateStudent from './UpdateStudent'
import ReadingChart from './ReadingChart'

class Student extends Component {
	constructor(props) {
		super(props)
		this.state = {
			studentRetireCheck: false,
			firstName: '',
			lastName: '',
			schoolId: '',
		defaultStudent: {
			defaultStudentFirstName: '',
			defaultStudentLastName: '',
			defaultStudentSchoolIdNumber: '',
			defaultStudentId: ''
			}
		}
	}

	updateAllStudents = response => {
		this.props.updateStudents(response)
	}

	updateCurrentStudent = response => {
		this.props.changeStudent(response)
	}

	defaultCurrentStudent = () => {
		this.props.changeStudent(this.state.defaultStudent)
	}



	checkCurrentStudent = () =>{
		fetch('/api/student', {
			method: 'post',
			body: JSON.stringify({
				studentId: this.props.currentStudent.studentId
			})
		})
			.then(res => res.json())
			.then(students => this.updateCurrentStudent(students))
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
			this.defaultCurrentStudent()
	
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
				<p class="name"> {this.props.currentStudent.studentFirstName}</p>
				<p class="name"> {this.props.currentStudent.studentLastName}</p>
				<MathChart />
				<ReadingChart />
				<input
					type="checkbox"
					id="checkboxChoice"
					checked={this.state.studentRetireCheck}
					onChange={this.toggleCheck}
				/>
				<p>Retire Student</p>
				<UpdateStudent
					studentId={this.props.currentStudent.studentId}
					updateStudents={this.props.updateStudents}
					checkCurrentStudent={this.checkCurrentStudent}
				/>
			</section>
		)
	}
}

export default Student
