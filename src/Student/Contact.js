import React, { Component } from 'react'
import api from '../api'
import AddContacts from './AddContact'


class Contact extends Component {
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
		defaultContact: {
			defaultCctFirstName: '',
			defaultCctLastName: '',
			defaultCctRelationship: ''
			}
		}
	}

	updateAllContacts = response => {
		this.props.updateContacts(response)
	}

	updateCurrentContact = response => {
		this.props.changeContact(response)
	}

	defaultCurrentContact = () => {
			this.props.changeContact(this.state.defaultContact)
		}

	checkCurrentContact = () => {
		console.log("Here's your contact")
		fetch('/api/contact', {
			method: 'PUT',
			body: JSON.stringify({
				contactId: this.props.currentContact.contactId
			})
		})
		.then(res => res.json())
			.then(contacts => this.updateCurrentContact(contacts))
	}

render() {
	return (
		<section id="contactSection">
				
				<p className="name"> {this.props.currentContact.contactFirstName} { " "} {this.props.currentStudent.contactLastName}</p>		
				
		          			
		</section>
							

			)
}


}

export default Contact


