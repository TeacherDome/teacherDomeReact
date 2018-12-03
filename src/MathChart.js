import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2'


class MathChart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels:["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets:[{
		            label: '# of hecks I give',
		            data: [122, 129, 23, 522, 122, 322],
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)',
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
	   						text:'Math Scores',
	   						fontSize:45
   						}
   					}}
   				/>
   			</div>

   	)}		
}

export default MathChart