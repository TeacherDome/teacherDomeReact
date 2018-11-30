import React, { Component } from 'react'
import api from './api'

class Student extends Component {
	constructor(props) {
		super(props)
		this.state={
			studentRetireCheck: false 
		}
	}

submitRetiredStudent() {
	var xhttp = new XMLHttpRequest()
	var studentIdToRetire = this.props.currentStudent.studentId;
	var url = '/api/students/retireStudent';

	xhttp.onreadystatechange = function() {
		if(this.readState == 4 && this.status == 200) {

		}
	
}

xhttp.open('POST', url, true)
	const body = JSON.stringify({

		studentId: studentIdToRetire

	})

	xhttp.send(body)
}


   toggleCheck=()=>{
   		if(window.confirm("Are you sure that you would like to retire this student?")){
   			this.setState({studentRetireCheck:!this.state.studentRetireCheck})
   			this.submitRetiredStudent()
   			}
   }




	render() {
		return (<section>
				<p class="name"> {this.props.currentStudent.studentFirstName}</p>
				<p class="name"> {this.props.currentStudent.studentLastName}</p>
				
				<input type="checkbox" id="checkboxChoice" checked={this.state.studentRetireCheck} onChange={this.toggleCheck}></input>
				<p>Retire Student</p>
			</section>
		)
	}
}

export default Student
