import React, { Component } from 'react'
class UpdateStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			schoolId: '',
			birthDate: '',
			studentHealthNotes: '',
			studentProgressNotes: '',
			studentComments: '',
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
	
	onClickUpdateStudendBirthDate=()=>{
		this.updateStudentDateofBirth();
		this.clearFields();
	}

	onClickUpdateStudendHealthNotes=()=>{
		this.updateStudentHealthNotes();
		this.clearFields();
	}

	onClickUpdateStudentProgress=()=>{
		this.updateStudentProgress();
		this.clearFields();
	}

	onClickUpdateStudendComments=()=>{
		this.updateStudentComments();
		this.clearFields();
	}

	clearFields=()=>{
		this.state.firstName = ''
		this.state.lastName = ''
		this.state.schoolId = ''
		this.state.birthDate = ''
		this.state.studentHealthNotes = ''
		this.state.studentProgressNotes = ''
		this.state.studentComments = ''
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

	updateBirthDate= event => {
		this.setState({ birthDate: event.target.value })
	}

	updateHealthNotes= event => {
		this.setState({ studentHealthNotes: event.target.value })
	}
	updateProgress= event => {
		this.setState({ studentProgressNotes: event.target.value })
	}
	updateComments= event => {
		this.setState({ studentComments: event.target.value })
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

	updateStudentDateofBirth = () => {
	 var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentDateofBirth', {
			method: 'PUT',
			body: JSON.stringify({
				studentDateOfBirth: this.state.birthDate,
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

	updateStudentHealthNotes = () => {
	 var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentHealthNotes', {
			method: 'PUT',
			body: JSON.stringify({
				studentHealthNotes: this.state.studentHealthNotes,
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

	updateStudentProgress = () => {
	 var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentProgress', {
			method: 'PUT',
			body: JSON.stringify({
				studentProgressNotes: this.state.studentProgressNotes,
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

	updateStudentComments = () => {
	 var studentIdToUpdate = this.props.studentId;

		fetch('/api/students/updateStudentComments', {
			method: 'PUT',
			body: JSON.stringify({
				studentComments: this.state.studentComments,
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
				<section className="student-info-section">
			<p>{"Student School ID: "}{this.props.currentStudent.studentSchoolIdNumber}</p>
				<p>{"Student Date of Birth: "}{this.props.currentStudent.studentDateOfBirth}</p>
				<p>{"Student Health Notes: "}{this.props.currentStudent.studentHealthNotes}</p>
				<p>{"Student Progress Notes: "}{this.props.currentStudent.studentProgressNotes}</p>
				<p>{"Student Comments : "}{this.props.currentStudent.studentComments}</p>
				</section>
			<br/>
			<h1 className="update-student-h1">Update Student Information</h1>
			<section className="inputOrganize">
			
			<br/>
				<section className="studentInputs">
				<label className="InputUpdate">
					{' '}
					First Name:
					<input
						type="text"
						name="StudentFirstName"
						id="StudentFirstName"
						value={this.state.firstName}
						
						onChange={this.updateFirstName}

					/>
					<button className="studentSubmit" onClick={this.onClickFirstName}>Submit</button>
				</label>

			
				<br/>
				<br/>
				<label className="InputUpdate">
					{' '}
					Last Name:
					<input
						type="text"
						name="StudentLastName"
						id="StudentlastName"
						value={this.state.lastName}
						onChange={this.updateLastName}
					/>
					<button className="studentSubmit1" onClick={this.onClickLastName}>Submit</button>
				</label>
				</section>
				<section className="inputOrganize1">
				<br/>
				<br/>
				<label className="InputUpdate">
					{' '}
					Student School Id Num: 
					<input
						type="text"
						name="StudentSchoolIdNumber"
						id="StudentSchoolIdNumber"
						value={this.state.schoolId}
						onChange={this.updateSchoolId}
					/>
					<button className="studentSubmit" onClick={this.onClickUpdateStudentSchoolId}>Submit</button>
				</label>


				<br/>
				<br/>
				<label className="InputUpdate">
					{' '}
					Student Birth Date: 
					<input
						type="text"
						name="birthDate"
						id="birthDate"
						value={this.state.birthDate}
						onChange={this.updateBirthDate}
					/>
					<button className="studentSubmit" onClick={this.onClickUpdateStudendBirthDate}>Submit</button>
				</label>
				</section>
				<br/>
				<br/>
				<label>
					{' '}
					Student Health Information: 
					<input
						className="InputUpdateField"
						type="text"
						name="studentHealthNotes"
						id="studentHealthNotes"
						value={this.state.studentHealthNotes}
						onChange={this.updateHealthNotes}
					/>
					<button className="studentSubmit" onClick={this.onClickUpdateStudendHealthNotes}>Submit</button>
				</label>


				<br/>
				<br/>
				<label className="InputUpdate">
					{' '}
					Student Progress Information: 
					<input
						type="text"
						className="InputUpdateField"
						name="studentProgressNotes"
						id="studentProgressNotes"
						value={this.state.studentProgressNotes}
						onChange={this.updateProgress}
					/>
					<button className="studentSubmit" onClick={this.onClickUpdateStudentProgress}>Submit</button>
				</label>

				<br/>
				<br/>
				<label className="InputUpdate">
					{' '}
					Student Comments: 
					<input
						type="text"
						className="InputUpdateField"
						name="studentComments"
						id="studentComments"
						value={this.state.studentComments}
						onChange={this.updateComments}
					/>
					<button className="studentSubmit" onClick={this.onClickUpdateStudendComments}>Submit</button>
				</label>
				</section>
				</section>
				)
	}
}

export default UpdateStudent
