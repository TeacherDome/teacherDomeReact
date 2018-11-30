import React, { Component } from 'react'
import api from './api'

class Student extends Component {
	constructor(props) {
		super(props)
		this.state={
			studentRetireCheck: false 
		}
	}


   toggleCheck=()=>{
   		if(window.confirm("Are you sure that you would like to retire this student?")){
   			this.setState({studentRetireCheck:!this.state.studentRetireCheck})
   			}
   }




	render() {
		return (<section class="viewed-student">
					<h1> {this.props.currentStudentFirstName} {this.props.currentStudentLastName}</h1>
					<p>School ID: {this.props.currentStudentSchoolIdNumber}</p>
					<label>Retire Student<input type="checkbox" id="checkboxChoice" checked={this.state.studentRetireCheck} onChange={this.toggleCheck}></input></label>
			</section>
		)
	}
}

export default Student
