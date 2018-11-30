import React, { Component } from 'react'
import api from './api'
 class UpdateStudent extends Component {
	constructor(props) {
		super(props)
	}
 	
updateStudent(){
var firstName= document.getElementById("StudentFirstName").value;
var lastName= document.getElementById("StudentlastName").value;
var schoolId= document.getElementById("StudentSchoolIdNumber").value;
var studentId= document.getElementById("StudentId");
var xhttp = new XMLHttpRequest()
var url = '/api/students/updateStudent/';
// Sets behavior for when the AJAX request is complete
xhttp.onreadystatechange = function() {
// Checks the ready state and http status code
if (this.readyState == 4 && this.status == 200) {
	
}
}

xhttp.open('POST', url, true)
	const body = JSON.stringify({
				studentId: updateStudent;
				studentFirstName: firstName,
				studentLastName: lastName,
				studentSchoolIdNumber: schoolId

			
			})
	console.log(body)
	xhttp.send(body)

}

	render() {
return ( <section>	
			<form action="/api/students/updateStudent" method="post">
			
			<p id="StudentId">student.studentId</p>
			<label> First Name:<input type="text" name="StudentFirstName" id="StudentFirstName" /></label>
			<label> Last Name<input type="text" name="StudentLastName" id="StudentlastName" /></label>
			<label> Student School Id Num<input type="text" name="StudentSchoolIdNumber" id="StudentSchoolIdNumber" /></label>

			<button className="studentSubmit"  onClick={this.updateStudent}>Submit</button>
			</form>
		</section>
}

 export default UpdateStudent 