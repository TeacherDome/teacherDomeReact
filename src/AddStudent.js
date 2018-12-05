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
			<section class="add-student">
				<label>
					First Name:{' '}
					<input
						type="text"
						name="studentFirstName"
						id="firsNtame"
						placeholder="Luke"
						required
						value={this.state.firstName}
						onChange={this.updateFirstName}
					/>
				</label>
				<label>
					Last Name:{' '}
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
				<button className="studentSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}

export default AddStudent
