import React, { Component } from 'react'

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contactFistName: '',
			contactLastName: '',
			contactStreet: '',
			contactCity: '',
			contactState: '',
			conatctZipCode: '',
			contactEmail; '',
			contactCellPhoneNumber: '',
			contactHomPhoneNumber: '',
			contactWorkPhoneNumber: '',
			contactPriority: ''
		}
	}

	updateAllContacts = response => {
		this.props.updateContacts(response)
	}

