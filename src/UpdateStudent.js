import React, { Component } from 'react'
import api from './api'
 class updateStudent extends Component {
	constructor(props) {
		super(props)
	}
 	render() {
	return ( <section class="update-student">	
				<form action="/api/students/updateStudent" method="post">
				
				<label> First Name:<input type="text" name="StudentFirstName" /></label>
				<label> Last Name<input type="text" name="StudentLastName" /></label>
				<label> Student School Id Num<input type="text" name="StudentSchoolIdNumber" /></label>
				<input type="submit" value="Submit" />
				</form>
			</section>
		)
	}
}
 export default updateStudent 