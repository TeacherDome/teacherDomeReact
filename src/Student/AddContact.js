import React, { Component } from 'react'

class AddContact extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick=()=>{
		this.AddContact();
		this.clearFields();
	}

updateAllContacts = event => {
	this.setState({ updateAllContacts(response) })
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
	this.state.cctFistName = ''
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
	fetch('/api/students/addContact', {
		method: 'post',
		body:JSON.stringify({
			contactFirstName: this.state.cctFistName,
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
			contactPriority: this.state.cctPriority
		})
	})
	.then(res => res.json())
	.then(contacts => this.updateAllContacts(contacts))
}

render() {
	return (
		<section className="add-contact">
		<h1>Add New Contact</h1>
		<label>
					First Name:{' '}
					<br />
					<input
						type="text"
						name="contactFirstName"
						id="cctFirstName"
						placeholder="Alex"
						required
						value={this.state.cctFirstName}
						onChange={this.updateCctFirstName}
					/>
				</label>
				<br />
				<br />
				<label>
					Last Name:{' '}
					<br />
					<input
						type="text"
						name="contactLastName"
						id="cctLastName"
						placeholder="Smith"
						required
						value={this.state.cctLastName}
						onChange={this.updateCctLastName}
					/>
				</label>
				<br />
				<br />
				<label>
					Relationship to Student:{' '}
					<input
						type="text"
						name="contactRelationship"
						id="cctRelationship"
						placeholder="mother"
						required
						value={this.state.cctRelationship}
						onChange={this.updateCctRelationship}
					/>
				</label>
				<br />
				<br />
				<label>
					Street:{' '}
					<input
						type="text"
						name="contactStreet"
						id="cctStreet"
						placeholder="123 Abc St."
						required
						value={this.state.cctStreet}
						onChange={this.updateCctStreet}
					/>
				</label>
				<br />
				<br />
				<label>
					City:{' '}
					<input
						type="text"
						name="contactCity"
						id="cctCity"
						placeholder="Columbus"
						required
						value={this.state.cctCity}
						onChange={this.updateCctCity}
					/>
				</label>
				<br />
				<br />
				<label>
					State:{' '}
					<input
						type="text"
						name="contactState"
						id="cctState"
						placeholder="Ohio"
						required
						value={this.state.cctState}
						onChange={this.updateCctState}
					/>
				</label>
				<br />
				<br />
				<label>
					Zip Code:{' '}
					<input
						type="text"
						name="contactZipCode"
						id="schoolId"
						placeholder="43210"
						required
						value={this.state.cctZipCode}
						onChange={this.updateCctZipCode}
					/>
				</label>
				<br />
				<br />
				<label>
					Email:{' '}
					<input
						type="text"
						name="contactEmail"
						id="cctEmail"
						placeholder="example@gmail.com"
						required
						value={this.state.cctEmail}
						onChange={this.updateCctEmail}
					/>
				</label>
				<br />
				<br />
				<label>
					Cell Phone:{' '}
					<input
						type="text"
						name="contactCellPhoneNumber"
						id="cctCellPhoneNumber"
						placeholder="xxx-xxx-xxxx"
						required
						value={this.state.cctCellPhoneNumber}
						onChange={this.updateCctCellPhoneNumber}
					/>
				</label>
				<br />
				<br />
				<label>
					Home Phone:{' '}
					<input
						type="text"
						name="contactHomePhoneNumber"
						id="cctHomePhoneNumber"
						placeholder="xxx-xxx-xxxx"
						required
						value={this.state.cctHomePhoneNumber}
						onChange={this.updateCctHomePhoneNumber}
					/>
				</label>
				<br />
				<br />
				<label>
					Work Phone:{' '}
					<input
						type="text"
						name="contactWorkPhoneNumber"
						id="cctWorkPhoneNumber"
						placeholder="xxx-xxx-xxxx"
						required
						value={this.state.cctWorkPhoneNumber}
						onChange={this.updateCctWorkPhoneNumber}
					/>
				</label>
				<br />
				<br />
				<label>
					Contact Priority:{' '}
					<input
						type="text"
						name="contactPriority"
						id="cctPriority"
						placeholder="Level 1"
						required
						value={this.state.cctPriority}
						onChange={this.updateCctPriority}
					/>
				</label>
				<br />
				<br />
				<button className="contactSubmit" onClick={this.onClick}>
					Submit Contact
				</button>
			</section>
		)
	}
}

export default AddContact