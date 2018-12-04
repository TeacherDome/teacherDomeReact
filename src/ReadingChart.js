import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2'


class ReadingChart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels:["Mar 12, 1998", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets:[{
		            
		            data: [122, 129, 23, 522, 122, 322],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		            ],

				}]
			}
		}
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

   	)}		
}

export default ReadingChart