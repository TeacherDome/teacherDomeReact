import React, { Component } from 'react'
class UpdateStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		console.log(this.props)
			this.state = {
			firstName: '',
			lastName: '',
			schoolId: '',
			studentIdToUpdate: '',
		
		}
	}

	updateAllStudents = response => {
		this.props.updateStudents(response)

	}

	onClickFirstName=()=>{
		this.updateStudentFirstName();
		this.clearFields();
	}

	onClickLastName=()=>{
		this.updateStudentLastName();
		this.clearFields();
	}
	
	onClickUpdateStudentSchoolId=()=>{
		this.updateStudentSchoolId();
		this.clearFields();
	}
	

	
	clearFields=()=>{
		this.state.firstName = ''
		this.state.lastName = ''
		this.state.schoolId = ''
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
	updateStudentFirstName = () => {
	 	var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentFirstName', {
			method: 'PUT',
			body: JSON.stringify({
				studentFirstName: this.state.firstName,
				studentId: studentIdToUpdate

			})
		})
			.then(res => res.json())
			.then(students => {
				this.updateAllStudents(students)
				this.props.checkCurrentStudent()
			})
	}
		updateStudentLastName = () => {
	 	var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentLastName', {
			method: 'PUT',
			body: JSON.stringify({
				studentLastName: this.state.lastName,
				studentId: studentIdToUpdate

			})
		})
			.then(res => res.json())
			.then(students => {
				this.updateAllStudents(students)
				this.props.checkCurrentStudent()
			})
	}

	updateStudentSchoolId = () => {
	 var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentSchoolId', {
			method: 'PUT',
			body: JSON.stringify({
				studentSchoolIdNumber: this.state.schoolId,
				studentId: studentIdToUpdate

			})
		})
			.then(res => res.json())
			.then(students => {
				console.log("UpdateStudent.js", students)
				this.updateAllStudents(students)
				this.props.checkCurrentStudent()
			})
	}
	render() {
		return (
			<section className="update-student">
				<label>
					{' '}
					First Name:
					<input
						type="text"
						name="StudentFirstName"
						id="StudentFirstName"
						value={this.state.firstName}
						
						onChange={this.updateFirstName}

					/>
				</label>
				<button className="studentSubmit" onClick={this.onClickFirstName}>Submit</button>
				<label>
					{' '}
					Last Name
					<input
						type="text"
						name="StudentLastName"
						id="StudentlastName"
						value={this.state.lastName}
						onChange={this.updateLastName}
					/>
				</label>
				<button className="studentSubmit1" onClick={this.onClickLastName}>Submit</button>
				<label>
					{' '}
					Student School Id Num
					<input
						type="text"
						name="StudentSchoolIdNumber"
						id="StudentSchoolIdNumber"
						value={this.state.schoolId}
						onChange={this.updateSchoolId}
					/>
				</label>

				<button className="studentSubmit" onClick={this.onClickUpdateStudentSchoolId}>Submit</button>

			</section>
		)
	}
}

export default UpdateStudent
