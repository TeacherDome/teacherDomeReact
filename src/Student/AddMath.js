import React, { Component } from 'react';

class AddMath extends Component{
	constructor(props){
		super(props)
		this.state = {
			mathScoreFromForm: '',
			mathDateFromForm: '',
		}
	}

	submitMathData = () => {
		const fetchThisId = this.props.studentId;

		fetch(`http://localhost:8080/api/student/add-math-score`, {
			method: 'POST',
			body: JSON.stringify({
				date: this.state.mathDateFromForm,
				score: this.state.mathScoreFromForm,
				studentId: fetchThisId
			})
		})

		this.props.getChartData();
		this.clearFields();

	}

	updateMathDate = event => {
		this.setState({ mathDateFromForm: event.target.value })
	}

	updateMathScore = event => {
		this.setState({ mathScoreFromForm: event.target.value })
	}

	clearFields(){
		this.setState({
			mathScoreFromForm:  '',
			mathDateFromForm: '',
		})
	}

	render(){
		return(
			<div>
				<label>
					Date:{' '}
					<input
						type="text"
						id="submit-math-date"
						value={this.state.mathDateFromForm}
						onChange={this.updateMathDate}
					/>
				</label>
				<label>
					Score:{' '}
					<input
						type="text"
						id="submit-math-score"
						value={this.state.mathScoreFromForm}
						onChange={this.updateMathScore}
					/>
				</label>
				<button className="studentSubmit" onClick={this.submitMathData}>
					Add Math Score
				</button>
			</div>
		)
	}
}

export default AddMath