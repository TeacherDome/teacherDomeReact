import React, { Component } from 'react'
import api from './api'
const addStudentButton = document.querySelector('button');

class AddStudent extends Component {
	constructor(props) {
		super(props)
	}




	addStudent = () =>{
		addStudentButton.addEventListener('click', function() {
		
		const xhttp = new XMLHttpRequest()
		
		// Sets behavior for when the AJAX request is complete
		xhttp.onreadystatechange = function() {
			
			// Checks the ready state and http status code
			if (this.readyState == 4 && this.status == 200) {
			}
		}
		xhttp.open('POST', `/api/students/addStudents`, true)
		const body = JSON.stringify({
					studentFirstName: this.studentFirstName.value,
					studentLastName: this.studentLastName.value,
					studentSchoolIdNumber: this.studentSchoolIdNumber.value
				
				})
		xhttp.send(body)
	})
}

	render() {
		return (<section>

		


					<label>First Name: <input type="text" name="studentFirstName" placeholder= "Luke" required/></label>
					<label>Last Name: <input type="text" name="studentLastName" placeholder= "Skywalker" required/></label>
					<label>Student Id: <input type="text" name="studentSchoolIdNumber" placeholder ="Tatooine" required/></label>
					<button className="studentSubmit"  onClick={this.addStudent}>Submit</button>

			</section>
		)
	}
}

export default AddStudent
