import React, { Component } from 'react'
import api from '../api'
import Contact from './Contact'

class ContactPage  extends Component {
	constructor(props) {
		super(props) 
		this.state = {
		contacts: []
		}
	}

	componentDidMount() {
		this.getContacts();
	}

	getContacts = () => {
		fetch('http://localhost:8080/api/ContactsById', {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.studentId
			})
		})
		.then(res => res.json())
		.then(contacts =>  {
			this.setState({contacts: contacts})
		})
	}
	
	render() {
   		return (
   			<div>
				{this.state.contacts.map((contact, index) => (
					<section className="contactInList" key={index}>
						<h2
							onClick={() =>
								this.extendContactInformation(Contact)
							}
						>
							{contact.contactFirstName} {contact.contactLastName}
						</h2>
					</section>
				))}
   			</div>
   		)
   	}
}

export default ContactPage