import React, { Component } from 'react';

class AddMath extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
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
		 this.props.getChartData()
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
					/>
				</label>
				<label>
					Score:{' '}
					<input
						type="text"
						id="submit-math-score"
						required
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