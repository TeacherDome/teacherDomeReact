import React, { Component } from 'react'

class AddContact extends Component {
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
			cctHomePhoneNumber: '',
			cctWorkPhoneNumber: '',
			cctPriority: ''
		}
	}

	onClick=()=>{
		this.addContact();
		this.clearFields();
	}

updateAllContacts = response => {

	this.props.updateContacts(response)

}

updateCctFirstName = event => {
	this.setState({ cctFirstName: event.target.value })
}

updateCctLastName = event => {
	this.setState({ cctLastName: event.target.value})
}

updateCctRelationship = event => {
	this.setState({ cctRelationship: event.target.value})
}

updateCctStreet = event => {
	this.setState({ cctStreet: event.target.value})
}

updateCctCity = event => {
	this.setState({ cctCity: event.target.value})
}

updateCctState = event => {
	this.setState({ cctState: event.target.value})
}

updateCctZipCode = event => {
	this.setState({ cctZipCode: event.target.value})
}

updateCctEmail = event => {
	this.setState({ cctEmail: event.target.value})
}

updateCctCellPhoneNumber = event => {
	this.setState({ cctCellPhoneNumber: event.target.value})
}

updateCctHomePhoneNumber = event => {
	this.setState({ cctHomePhoneNumber: event.target.value})
}

updateCctWorkPhoneNumber = event => {
	this.setState({ cctWorkPhoneNumber: event.target.value})
}

updateCctPriority = event => {
	this.setState({ cctPriority: event.target.value})
}

clearFields = () => {
	this.state.cctFirstName = ''
	this.state.cctLastName = ''
	this.state.cctRelationship = ''
	this.state.cctStreet = ''
	this.state.cctCity = ''
	this.state.cctState = ''
	this.state.cctZipCode = ''
	this.state.cctEmail = ''
	this.state.cctCellPhoneNumber = ''
	this.state.cctHomePhoneNumber = ''
	this.state.cctWorkPhoneNumber = ''
	this.state.cctPriority = ''
}

addContact = () => {
	const that = this
	const contactInfo = {
			contactFirstName: this.state.cctFirstName,
			contactLastName: this.state.cctLastName,
			contactRelationship: this.state.cctRelationship,
			contactStreet: this.state.cctStreet,
			contactCity: this.state.cctCity,
			contactState: this.state.cctState,
			contactZipCode: this.state.cctZipCode,
			contactEmail: this.state.cctEmail,
			contactCellPhoneNumber: this.state.cctCellPhoneNumber,
			contactHomePhoneNumber: this.state.cctHomePhoneNumber,
			contactWorkPhoneNumber: this.state.cctWorkPhoneNumber,
			contactPriority: this.state.cctPriority,
			contactStudentId: this.props.contactStudentId
		}
		console.log(contactInfo)
	fetch('/api/ContactPage/addContact', {
		method: 'post',
		body:JSON.stringify(contactInfo)
	})
	.then(res => res.json())
	.then(contacts => that.props.updateContacts(contacts))
}

render() {
	return (
		<section className="add-contact">
			<br />
		<h1>Add New Contact</h1>

		<section className="contact1">
		
		<label>
			First Name:{' '}
			<input
				type="text"
				id="cctFirstName"
				placeholder="Alex"
				value={this.state.cctFirstName}
				onChange={this.updateCctFirstName}
					/>
				</label>
		
				<label>
					Last Name:{' '}
					
					<input
						type="text"
						id="cctLastName"
						placeholder="Smith"
						value={this.state.cctLastName}
						onChange={this.updateCctLastName}
					/>
				</label>
			
				<label>
					Relationship to Student:{' '}
					<input
						type="text"
						id="cctRelationship"
						placeholder="mother"
						value={this.state.cctRelationship}
						onChange={this.updateCctRelationship}
					/>
				</label>
				</section>
				<section className="contact2">
				<label>
					Street:{' '}
					<input
						type="text"
						id="cctStreet"
						placeholder="123 Abc St."
						value={this.state.cctStreet}
						onChange={this.updateCctStreet}
					/>
				</label>
			
				<label>
					City:{' '}
					<input
						type="text"
						id="cctCity"
						placeholder="Columbus"
						value={this.state.cctCity}
						onChange={this.updateCctCity}
					/>
				</label>
			
				<label>
					State:{' '}
					<input
						type="text"
						id="cctState"
						placeholder="Ohio"
						value={this.state.cctState}
						onChange={this.updateCctState}
					/>
				</label>
			
				<label>
					Zip Code:{' '}
					<input
						type="text"
						id="schoolId"
						placeholder="43210"
						value={this.state.cctZipCode}
						onChange={this.updateCctZipCode}
					/>
				</label>
			</section>
			<section className="contacts3">
				<label>
					Email:{' '}
					<input
						type="text"
						id="cctEmail"
						placeholder="example@gmail.com"
						value={this.state.cctEmail}
						onChange={this.updateCctEmail}
					/>
				</label>
		
				<label>
					Cell Phone:{' '}
					<input
						type="text"
						id="cctCellPhoneNumber"
						placeholder="xxx-xxx-xxxx"
						value={this.state.cctCellPhoneNumber}
						onChange={this.updateCctCellPhoneNumber}
					/>
				</label>
	
				<label>
					Home Phone:{' '}
					<input
						type="text"
						id="cctHomePhoneNumber"
						placeholder="xxx-xxx-xxxx"
						value={this.state.cctHomePhoneNumber}
						onChange={this.updateCctHomePhoneNumber}
					/>
				</label>
			
				<label>
					Work Phone:{' '}
					<input
						type="text"
						id="cctWorkPhoneNumber"
						placeholder="xxx-xxx-xxxx"
						value={this.state.cctWorkPhoneNumber}
						onChange={this.updateCctWorkPhoneNumber}
					/>
				</label>
	
				<label>
					Contact Priority:{' '}
					<input
						type="text"
						id="cctPriority"
						placeholder="1, 2, or 3"
						value={this.state.cctPriority}
						onChange={this.updateCctPriority}
					/>
				</label>

			</section>
				<button className="contactSubmit" onClick={this.onClick}>
					Submit Contact
				</button>
			</section>
		)
	}
}

export default AddContact