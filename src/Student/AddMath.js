import React, { Component } from 'react';

class AddMath extends Component{
	constructor(props){
		super(props)
		this.state = {
			studentId: ''
		}
	}

	getChartData(passedData) {
		this.props.getChartData(passedData)
	}

	submitMathData = () => {
		const that = this
		const mathDateFromForm = document.querySelector('#submit-math-date').value;
		const mathScoreFromForm = document.querySelector('#submit-math-score').value;
		const fetchThisId = this.props.studentId;

		fetch(`http://localhost:8080/api/student/add-math-score`, {
			method: 'POST',
			body: JSON.stringify({
				date: mathDateFromForm,
				score: mathScoreFromForm,
				studentId: fetchThisId
			})
		})
		.then(res => res.json())
		.then(newMathdata => that.getChartData(newMathdata))
	}


	render(){
		return(
			<div>
				<label>
					Date:{' '}
					<input
						type="text"
						id="submit-math-date"
						required
						// onChange={this.updateLastName}
					/>
				</label>
				<label>
					Score:{' '}
					<input
						type="text"
						id="submit-math-score"
						required
						// onChange={this.updateSchoolId}
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