import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import AddMath from './AddMath'

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

	getChartData = () => {
		let scoresOnChart = [];
		let datesOnChart = [];
		fetch(`http://localhost:8080/api/math-scores`, {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.studentId
			})
		})
		.then(res => res.json())
		.then(mathScores => {
			mathScores.forEach( mathScore => {
				scoresOnChart.push(mathScore.score);
				datesOnChart.push(mathScore.date);
				})
			})
		console.log(this.props.studentId)

		this.setState({
			chartData:{
				labels:datesOnChart,
				datasets:[{
		            data: scoresOnChart,
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
				<AddMath getChartData={this.getChartData} studentId={this.props.studentId} />
   			</div>

   	)}		
}

export default MathChart

