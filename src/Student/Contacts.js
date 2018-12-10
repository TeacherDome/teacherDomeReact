import React, { Component } from 'react'
import api from '../api'
import Contact from './Contact'

class ContactPage  extends Component {
	constructor(props) {
		super(props) 
		this.state = {
		cctFirstName: '',
			cctLastName: '',
			cctRelationship: '',
			cctStreet: '',
			cctCity: '',
			cctState: '',
			cctZipCode: '',
			cctEmail: '',
			cctCellPhoneNumber: '',
			cctHomPhoneNumber: '',
			cctWorkPhoneNumber: '',
			cctPriority: '',
			cctStudentId: ''
		}
	}

	componentDidMount() {
		this.getContacts();
	}

	getContacts = () => {
		fetch(`http://localhost:8080/api/ContactsById`, {
			method: 'GET',
			body: JSON.stringify({
				studentId: studentIdToUpdate
			})
			.then()
		})
	}
	
	render() {
   		return (
   			<div>
   				<p className="name"> {this.state.cctFirstName} { " "} {this.state.cctLastName}</p>
   			</div>
   			)}
}

export default ContactPage