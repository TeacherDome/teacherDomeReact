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
		            data: [12, 19, 3, 5, 2, 3],
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
   						maintainAspectRatio: false
   					}}
   				/>
   			</div>

   	)}		
}

export default MathChart