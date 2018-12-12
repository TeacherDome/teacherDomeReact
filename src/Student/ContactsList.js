import React, { Component } from 'react'
import api from '../api'
import Contact from './Contact'
import AddContact from './AddContact'

class ContactList  extends Component {
	constructor(props) {
		super(props) 
		this.state = {
		}
	}

	componentDidMount() {
		this.getContacts();
	}

	getContacts = () => {
		const that = this
		fetch('http://localhost:8080/api/ContactsById', {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.studentId
			})
		})
		.then(res => res.json())
		.then(contacts =>  {
			that.props.updateContacts(contacts)
		})
	}
	
	render() {
   		return (
   			<div>
				{this.props.contacts.map((contact, index) => (
					<section className="contactInList" key={index}>
						<h2
							// onClick={ () =>  }
						>
							{contact.contactFirstName} {contact.contactLastName} - Relationship: {contact.contactRelationship}
						</h2>
						<Contact currentContact={contact} />
					</section>
				))}
				<AddContact updateContacts={this.props.updateContacts} contactStudentId={this.props.studentId}/>
   			</div>
   		)
   	}
}

export default ContactList