import React, { Component } from 'react'
import AllAssignments from '../Student/AllAssignments'
import Grades from '../Student/Grades'
import UpdateGrades from '../Student/UpdateGrades'


class Assignments extends Component {
	constructor() {
		super()
		this.state = {
      assignments:[],
			 currentAssignment: {
				currentAssignmentName: '',
				currentAssignmentId: ''
			}
		}
	}

  updateAssignments = newAssignment => {
    this.setState({ assignments: newAssignment })
  }

changeAssignment = passAssignment => {
		this.setState({ currentAssignment: passAssignment })
	}
	render() {
		return (
			<div className="Assigments">
				<AllAssignments allAssignments = {this.state.assignments} studentId = {this.props.studentId} changeAssignment={this.changeAssignment} updateAssignments = {this.updateAssignments} />
			 {this.state.currentAssignment.currentAssignmentName !== ''	
				?<Grades allAssignments = {this.state.assignments} updateAssignments = {this.updateAssignments} currentAssignment={this.state.currentAssignment} changeAssignment={this.changeAssignment}/>
				:<p></p>
				}
			</div>
		)
	}


}

export default Assignments

