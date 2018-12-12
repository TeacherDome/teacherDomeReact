import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import AddReading from './AddReading'

class ReadingChart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData: {}
		}
	}

	componentDidMount(){
		this.getChartData();
	}

	getChartData = () => {
		const that = this
		let scoresOnChart = [];
		let datesOnChart = [];
		return fetch(`/api/reading-scores`, {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.studentId
			})
		})
		.then(res => res.json())
		.then(readingScores => {
			readingScores.forEach( readingScore => {
				datesOnChart.push(readingScore.date);
				scoresOnChart.push(readingScore.score);
			})
			that.setState({
				chartData:{
					labels:datesOnChart,
					datasets:[{
						data: scoresOnChart,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
						]
					}]
				}
			})
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
							text:'Reading Progress',
							fontSize:40
						},
						legend: {
							display:false
						}
					}}
				/>
				<AddReading getChartData={this.getChartData} studentId={this.props.studentId} />
			</div>
		)
	}		
}

	export default ReadingChart

