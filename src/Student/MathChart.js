import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../api'

class MathChart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData: {},
			studentId: ''
		}
	}

	componentWillMount(){
		this.getChartData();
		console.log()
	}

	getChartData(){
		let mathScores = [];
		let mathDates = [];
		api(`http://localhost:8080/api/math-scores`)
		.then(scores => {
			scores.forEach( score => {
				if(score.student.studentId == this.props.studentId) {
					mathScores.push(score.score);
					mathDates.push(score.date);
				}
			});
		});

		this.setState({
			chartData:{
				labels:mathDates,
				datasets:[{
		            data: mathScores,
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)',
		            ],

				}]
			}
		})
	}


	render() {
   		return (
   			<div>
   				<Line
   					data={this.state.chartData}
   					width={400}
   					options={{
   						title: {
	   						display:true,
	   						text:'Math Scores',
	   						fontSize:40
   						},
   						legend: {
   							display:false
   						}
   					}}
   				/>
   			</div>

   	)}		
}

export default MathChart

