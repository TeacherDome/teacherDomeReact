import React, { Component } from 'react'
import api from './api'

class AddStudent extends Component {
	constructor(props) {
		super(props)
	}





	render() {
		return (<section>
				<form action="/api/students/addStudent" method="post">

					<label>First Name: <input type="text" name="studentFirstName" placeholder= "Luke" required/></label>
					<label>Last Name: <input type="text" name="studentLastName" placeholder= "Skywalker" required/></label>
					<label>Student Id: <input type="text" name="studentSchoolIdNumber" placeholder ="Tatooine" required/></label>
					<input type="submit" value="Submit" />
				</form>
			</section>
		)
	}
}

export default AddStudent
