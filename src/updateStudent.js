import React, { Componet } from 'react'
import api from './api'

class updateStudent extends Component {
	constructor(props) {
		uper(props)
	}

	render() {
	return (	<form>
		<lable> First Name:<input type="text" name="StudentFirstName" ></lable>
		<lable> Last Name<input type="text" name="StudentLastName" ></lable>
		<lable> Student School Id Num<input type="text" name="StudentSchoolIdNumber" ></lable>
		<lable> Family Note<input type="text" name="StudentFamilyNotes" ></lable>
		<lable> Helth Note <input type="text" name="StudentHealthNotes" ></lable>
		<input type="submit" value="Submit" />
	</form> 
	)
}