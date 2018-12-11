import React, { Component } from 'react'

class AddGrade extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick=()=>{
		this.addNewGrade();
		this.clearFields();
	}

	updateNewGrades = response => {
		this.props.updateGrades(response)
	}

	updateCriteria = event => {
		this.setState({ criteria: event.target.value })
	}
	

	updateStudentScore = event => {
		this.setState({ studentScore: event.target.value })
	}

	updateFullScore = event => {
		this.setState({ fullScore: event.target.value })
	}
	

	clearFields=()=>{
		this.state.criteria = ''
		this.state.studentScore = ''
		this.state.fullScore = ''
	}

	addNewGrade = () => {
		fetch('/api/grades/addGrade', {
			method: 'post',
			body: JSON.stringify({
				assignmentId: this.props.currentAssignmentId,
				criteriaSent: this.state.criteria,
				studentScoreSent: this.state.studentScore,
				fullScoreSent: this.state.fullScore,

			})
		})
			.then(res => res.json())
			.then(grades => this.updateNewGrades(grades))
	}

	render() {
		return (
			<section className="add-student">
				<h1>New Grade</h1>
					<label>
					Criteria:{' '}
					
					<input
						type="text"
						name="criteria"
						id="criteria"
						placeholder="criteria"
						required
						value={this.state.criteria}
						onChange={this.updateCriteria}
					/>
				</label>
				
				<label>
					Student Score:{' '}
					<br />
					<input
						type="text"
						name="studentScore"
						id="studentScore"
						placeholder="Score"
						required
						value={this.state.studentScore}
						onChange={this.updateStudentScore}
					/>
				</label>
					<label>
					Student Score:{' '}
					<br />
					<input
						type="text"
						name="fullScore"
						id="fullScore"
						placeholder="Full Score"
						required
						value={this.state.fullScore}
						onChange={this.updateFullScore}
					/>
				</label>
			
				<button className="assignmentSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}

export default AddGrade
