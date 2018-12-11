import React, { Component } from 'react';
import AllGrades from './AllGrades'
import api from '../api'

class Grades extends Component{
	constructor(props){
		super(props);
		this.state = {
      grades:[],
		}
	}

 updateGrades = newGrade => {
    this.setState({ grades: newGrade })
  }



	render() {
   		return (
   		<section>
   		<AllGrades allGrades = {this.state.grades}  currentAssignmentId={this.props.currentAssignment.assignmentId} updateGrades={this.updateGrades}/>
   		</section>

   	)}		
}

export default Grades

