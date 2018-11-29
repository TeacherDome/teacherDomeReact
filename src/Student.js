import React, { Component } from 'react'
import api from './api'

class Student extends Component {
	constructor(props) {
		super(props)
	}





	render() {
		return (<section>
			
				
						<p> {this.props.currentStudentFirstName}</p>
						<p> {this.props.currentStudentLastName}</p>
						<p> {this.props.currentStudentSchoolIdNumber}</p>
						<input type="checkbox" name="activeStatus" value="changeActiveStatus"/>Make Student Inactive
					
			</section>
		)
	}
}

export default Student
