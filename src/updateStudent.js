
import React, { Component } from 'react'
import api from './api'

class updateStudent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
	return ( <section>	
			<p>AAAHAHAHA</p>
				<form action="/api/students/updateStudent" method="post">
				
				<lable> First Name:<input type="text" name="StudentFirstName" /></lable>
				<lable> Last Name<input type="text" name="StudentLastName" /></lable>
				<lable> Student School Id Num<input type="text" name="StudentSchoolIdNumber" /></lable>
				<lable> Family Note<input type="text" name="StudentFamilyNotes" /></lable>
				<lable> Helth Note <input type="text" name="StudentHealthNotes" /></lable>
				<input type="submit" value="Submit" />
				</form>
			</section>
		)
	}
}

export default updateStudent

