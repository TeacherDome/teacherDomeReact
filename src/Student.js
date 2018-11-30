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
		return (<section>
					<p> {this.props.currentStudentFirstName} {this.props.currentStudentLastName}</p>
					<p>School ID: {this.props.currentStudentSchoolIdNumber}</p>
					<input type="checkbox" id="checkboxChoice" checked={this.state.studentRetireCheck} onChange={this.toggleCheck}></input>
					<p>Retire Student</p>
			</section>
		)
	}
}

export default Student
