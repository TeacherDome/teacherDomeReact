import React, { Component } from 'react'
import api from '../api'
import AddAssignment from './AddAssignment'

class AllAssignments extends Component {
	constructor(props) {
		super(props)
	}

	getAssingments = () => {
		api(`http://localhost:8080/api/assignments`).then(assignemnt => {
			const newAssignment= this.props.allAssignments
			assignemnt.forEach(assign => {
					if(assign.givenStudentId == this.props.studentId){
					newAssignment.push(assign)
					console.log(assign.givenStudentId)
					}
			})
			this.setState({ assignemnt: newAssignment })
			console.log("GETASSIGNMENTS")	
		})
	}

	changeAssignmentInformation(passedAssignment) {
		this.props.changeAssignment(passedAssignment)
	}

	componentDidMount() {
		this.getAssingments()
	}


	

	render() {

		return (
			<section className="assignment-list">
				<h2 className="assignment-list-header"> Assignment List </h2>
				{this.props.allAssignments.map((assign, index) => (
					<section className="studentInList" key={index}>
						<h2
							onClick={() =>
								this.changeAssignmentInformation(assign)
							}
						>
							{assign.assignmentName}
						</h2>
					</section>
				))}
					<AddAssignment  studentId = {this.props.studentId} updateAssignments = {this.props.updateAssignments} getAssingments={this.getAssingments}/>
			</section>
		)
	}
}

export default AllAssignments
