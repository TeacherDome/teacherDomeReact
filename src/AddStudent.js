import React, { Component } from 'react'
import api from './api'
const addStudentButton = document.querySelector('button');

class AddStudent extends Component {
	constructor(props) {
		super(props)
	}

updateAllStudents = (response) =>{
	this.props.updateStudents(response)
}

addStudent(){
	var firstName= document.getElementById("firstName").value;
	var lastName= document.getElementById("lastName").value;
	var schoolId= document.getElementById("schoolId").value;
	var xhttp = new XMLHttpRequest()
	var url = '/api/students/addStudent';
// Sets behavior for when the AJAX request is complete
xhttp.onreadystatechange = function() {
	// Checks the ready state and http status code
	if (this.readyState == 4 && this.status == 200) {
		this.updateAllStudents(xhttp.response)
	}
}

	xhttp.open('POST', url, true)
		const body = JSON.stringify({
					studentFirstName: firstName,
					studentLastName: lastName,
					studentSchoolIdNumber: schoolId
				})
		console.log(body)
		xhttp.send(body)
}

	render() {
		return (<section>

					<label>First Name: <input type="text" name="studentFirstName" id="firstName" placeholder= "Luke" required/></label>
					<label>Last Name: <input type="text" name="studentLastName" id="lastName" placeholder= "Skywalker" required/></label>
					<label>Student Id: <input type="text" name="studentSchoolIdNumber" id="schoolId" placeholder ="Tatooine" required/></label>
					<button className="studentSubmit"  onClick={this.addStudent}>Submit</button>


			</section>
		)
	}
}

export default AddStudent
