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

	


	updateFirstName = event => {
		this.setState({ firstName: event.target.value })
	}

	updateLastName = event => {
		this.setState({ lastName: event.target.value })
	}

	updateSchoolId = event => {
		this.setState({ schoolId: event.target.value })
	}


	updateStudent = () => {
	 	var studentIdToUpdate = document.getElementById('UpdateStudentId').innerText

		fetch('/api/students/updateStudent', {
			method: 'post',
			body: JSON.stringify({
				studentFirstName: this.state.firstName,
				studentLastName: this.state.lastName,
				studentSchoolIdNumber: this.state.schoolId,
				studentSchoolIdNumber: this.state.studentIdToUpdate,
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



	// updateStudent = () => {
	// 	var firstName = document.getElementById('StudentFirstName').value
	// 	var lastName = document.getElementById('StudentlastName').value
	// 	var schoolId = document.getElementById('StudentSchoolIdNumber').value
	// 	var studentIdToUpdate = document.getElementById('UpdateStudentId')
	// 		.innerText
	// 	var xhttp = new XMLHttpRequest()
	// 	var url = '/api/students/updateStudent'
	// 	// Sets behavior for when the AJAX request is complete
	// 	xhttp.onreadystatechange = function() {
	// 		// Checks the ready state and http status code
	// 		if (this.readyState === 4 && this.status === 200) {
	// 		}
	// 	}

	// 	xhttp.open('POST', url, true)
	// 	const body = JSON.stringify({
	// 		studentId: studentIdToUpdate,
	// 		studentFirstName: firstName,
	// 		studentLastName: lastName,
	// 		studentSchoolIdNumber: schoolId
	// 	})

	// 	console.log(body)
	// 	xhttp.send(body)
	// }

	// componentDidMount(){
	// 	this.setState({studentId: document.querySelector("studentSection").getAttribute("key")})
	// }

	render() {
		return (
			<section class="update-student">
				<p id="UpdateStudentId">{this.props.studentId}</p>
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

				<button className="studentSubmit" onClick={this.updateStudent}>
					Submit
				</button>
			</section>
		)
	}
}

export default UpdateStudent
