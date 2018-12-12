import React, { Component } from 'react';

class AddReading extends Component{
	constructor(props){
		super(props)
		this.state = {
			readingScoreFromForm: '',
			readingDateFromForm: '',
		}
	}
	
	submitReadingData = () => {
		const fetchThisId = this.props.studentId;

		fetch(`http://localhost:8080/api/student/add-reading-score`, {
			method: 'POST',
			body: JSON.stringify({
				date: this.state.readingDateFromForm,
				score: this.state.readingScoreFromForm,
				studentId: fetchThisId
			})
		})

		this.props.getChartData();
		this.clearFields();
	}

	updateReadingDate = event => {
		this.setState({ readingDateFromForm: event.target.value })
	}

	updateReadingScore = event => {
		this.setState({ readingScoreFromForm: event.target.value })
	}

	clearFields(){
		this.setState({
			readingScoreFromForm:  '',
			readingDateFromForm: '',
		})
	}

	render(){
		return(
			<div>
				<label>
					Date:{' '}
					<input
						type="text"
						id="submit-reading-date"
						value={this.state.readingDateFromForm}
						onChange={this.updateReadingDate}
					/>
				</label>
				<label>
					Score:{' '}
					<input
						type="text"
						id="submit-reading-score"
						value={this.state.readingScoreFromForm}
						onChange={this.updateReadingScore}
					/>
				</label>
				<button className="studentSubmit" onClick={this.submitReadingData}>
					Add Reading Score
				</button>
			</div>
		)
	}
}

export default AddReading