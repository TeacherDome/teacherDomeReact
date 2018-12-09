import React, { Component } from 'react'

class AddStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick=()=>{
		this.addStudent();
		this.clearFields();
	}

	updateAllStudents = response => {
		this.props.updateStudents(response)

	}

	updateFirstName = event => {
		this.setState({ firstName: event.target.value })
	}

	updateLastName = event => {
		this.setState({ lastName: event.target.value })
	}

	updateSchoolId = event => {
		this.setState({ schoolId: event.target.value })
	}

	clearFields=()=>{
		this.state.firstName = ''
		this.state.lastName = ''
		this.state.schoolId = ''
	}
	addStudent = () => {
		fetch('/api/students/addStudent', {
			method: 'post',
			body: JSON.stringify({
				studentFirstName: this.state.firstName,
				studentLastName: this.state.lastName,
				studentSchoolIdNumber: this.state.schoolId
			})
		})
			.then(res => res.json())
			.then(students => this.updateAllStudents(students))
	}

	render() {
		return (
			<section className="add-student">
				<h1>Add Student</h1>
				<label>
					First Name:{' '}
					<br />
					<input
						type="text"
						name="studentFirstName"
						id="firstName"
						placeholder="Luke"
						required
						value={this.state.firstName}
						onChange={this.updateFirstName}
					/>
				</label>
				<br />
				<br />
				<label>
					Last Name:{' '}
					<br />
					<input
						type="text"
						name="studentLastName"
						id="lastName"
						placeholder="Skywalker"
						required
						value={this.state.lastName}
						onChange={this.updateLastName}
					/>
				</label>
				<br />
				<br />
				<label>
					Student Id:{' '}
					<input
						type="text"
						name="studentSchoolIdNumber"
						id="schoolId"
						placeholder="Tatooine"
						required
						value={this.state.schoolId}
						onChange={this.updateSchoolId}
					/>
				</label>
				<br />
				<br />
				<button className="studentSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}

export default AddStudent
