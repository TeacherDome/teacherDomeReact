import React, { Component } from 'react'
import api from './api'

class Student extends Component {
	constructor(props) {
		super(props)
	}





	render() {
		return (<section>
			
				
						<p> {this.props.currentStudentFirstName}</p>
					
			</section>
		)
	}
}

export default Student
