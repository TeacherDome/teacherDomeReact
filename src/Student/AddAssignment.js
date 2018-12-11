import React, { Component } from 'react'

class AddAssignment extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick=()=>{
		this.addNewAssignment();
		this.clearFields();
	}

	updateNewAssignments = response => {
		this.props.updateAssignments(response)
	}

	updateAssignment = event => {
		this.setState({ assignmentName: event.target.value })
	}

	

	clearFields=()=>{
		this.state.assignmentName = ''
	}
	addNewAssignment = () => {
		fetch('/api/assignments/addAssignment', {
			method: 'post',
			body: JSON.stringify({
				studentIdSent: this.props.studentId,
				assignmentNameSent: this.state.assignmentName,
			})
		})
			.then(res => res.json())
			.then(assignments => this.updateNewAssignments(assignments))
	}

	render() {
		return (
			<section className="add-student">
				<h1>New Assignment</h1>
				<label>
					New Assignment Name:{' '}
					<br />
					<input
						type="text"
						name="assignmentName"
						id="assignmentName"
						placeholder="Assignment"
						required
						value={this.state.assignmentName}
						onChange={this.updateAssignment}
					/>
				</label>
				
				<button className="assignmentSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}

export default AddAssignment
