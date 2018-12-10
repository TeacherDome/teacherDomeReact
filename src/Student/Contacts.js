import React, { Component } from 'react'
import api from '../api'
import Contact from './Contact'

class ContactPage  extends Component {
	constructor(props) {
		super(props) 
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
			cctPriority: ''
	}

	componentDidMount() {
		this.getContacts();
	}

	getContacts = () => {
		api(`http://localhost:8080/api/Contacts`)
		.then(contacts => {
			contacts.forEach( contact => {
				if(contact.student.studentId === this.props.studentId) {
					this.setState({
						cctFirstName: contact.contactFirstName,
						cctLastName: contact.contactLastName,
						cctRelationship: contact.contactRelationship,
						cctStreet: contact.contactStreet,
						cctCity: contact.contactCity,
						cctState: contact.contactState,
						cctZipCode: contact.contactZipCode,
						cctEmail: contact.contactEmail,
						cctCellPhoneNumber: contact.contactCellPhoneNumber,
						cctHomPhoneNumber: contact.contactHomePhoneNumber,
						cctWorkPhoneNumber: contact.contactWorkPhoneNumber,
						cctPriority: contact.contactPriority
					})
				}
			})
		})
		}
	
}

export default ContactPage