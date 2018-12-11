import React, { Component } from 'react'
import api from '../api'
import AddContacts from './AddContact'


class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			}
		}



	render() {
		return (
			<section id="contactSection">		
			       <h1> Street:{' '}{this.props.currentContact.contactStreet}</h1> 
			       <h1>	City:{' '}{this.props.currentContact.contactCity}, {this.props.currentContact.contactState} {this.props.currentContact.contactZipCode}</h1>  			
				   <h1>Email:{' '}{this.props.currentContact.contactEmail}</h1> 
				   <h1>Cell Phone:{' '}{this.props.currentContact.contactCellPhoneNumber}</h1> 
				   <h1>Home Phone:{' '}{this.props.currentContact.contactHomePhoneNumber}</h1> 
				   <h1>Work Phone:{' '}{this.props.currentContact.contactWorkPhoneNumber}</h1> 

			</section>
		)
	}
}

export default Contact