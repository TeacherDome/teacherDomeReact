import React, { Component } from 'react';

import api from '../api'

class Grades extends Component{
	constructor(props){
		super(props);
		this.state = {
		
		}
	}



	render() {
   		return (
   		<section>
   		<h1>Grades</h1>
   		<p>{this.props.currentAssignment.assignmentId}</p>
   		</section>

   	)}		
}

export default Grades

