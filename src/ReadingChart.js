import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2'


class ReadingChart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{},
			studentId: ''
		}
	}

	componentWillMount(){
		this.getChartData();
	}

	getChartData(){
		let readingScores = [];
		let readingDates = [];
		api(`http://localhost:8080/api/reading-scores`)
		.then(scores => {
			scores.forEach( score => {
				if(score.student.studentId == this.props.studentId) {
					readingScores.push(score.score);
					readingDates.push(score.date);
				}
			});
		});

		this.setState({
			chartData:{
				labels:readingDates,
				datasets:[{
		            data: readingScores,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
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
	   						text:'Reading Scores',
	   						fontSize:40
   						},
   						legend: {
   							display:false
   						}
   					}}
   				/>
   			</div>
		)
	}		
}

export default ReadingChart