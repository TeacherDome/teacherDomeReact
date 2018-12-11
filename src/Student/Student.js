import React, { Component } from 'react'
import api from '../api'
import MathChart from './MathChart'
import UpdateStudent from './UpdateStudent'
import ReadingChart from './ReadingChart'
import StudentContainer from './StudentContainer'
import StudentOptions from './StudentOptions'

import Assignments from './Assignments'

import Contacts from './ContactsList'

class Student extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isMain: true,
     		location: '',
			studentRetireCheck: false,
			firstName: '',
			lastName: '',
			schoolId: '',
		defaultStudent: {
			defaultStudentFirstName: '',
			defaultStudentLastName: '',
			defaultStudentSchoolIdNumber: '',
			defaultStudentId: ''
			},

		contacts: [],
			currentContact: {
				currentContactFirstName: '',
				currentContactLastName: '',
				currentContactRelationship: '',
				currentContactId: ''
			}
		}
	}

	 updateContacts = newContacts => {
    this.setState({ contacts: newContacts })
  }


	toggleIsMain = () => {
	    this.setState({isMain: !this.state.isMain})
	}

	changeLocation = (location) => {
	    this.setState({location})

	}

	updateAllStudents = response => {
		this.props.updateStudents(response)
	}

	updateCurrentStudent = response => {
		this.props.changeStudent(response)
	}

	defaultCurrentStudent = () => {
		this.props.changeStudent(this.state.defaultStudent)

	}

	updateRetireBox = () => {
		this.setState({studentRetireCheck: this.props.currentStudent.studentIsRetired})
	}

	checkCurrentStudent = () =>{
		fetch('/api/student', {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.currentStudent.studentId
			})
		})
			.then(res => res.json())
			.then(students => this.updateCurrentStudent(students))
	}

	submitRetiredStudent = () =>{
		fetch('/api/students/retireStudent', {
			method: 'PUT',
			body: JSON.stringify({
				studentId: this.props.currentStudent.studentId
			})
		})
			.then(res => res.json())
			.then(students => this.updateAllStudents(students))
			this.defaultCurrentStudent()
	}

	toggleCheck = () => {
		if (
			window.confirm(
				'Are you sure that you would like to retire this student?'
			)
		) {
			this.setState({
				studentRetireCheck: !this.state.studentRetireCheck
			})
			this.submitRetiredStudent()
			this.changeLocation('')
			this.updateRetireBox()
			
		}
	}

	render() {
		return (
			<section
				id="studentSection"
				key={this.props.currentStudent.studentId}
			>
				<p className="name"> {this.props.currentStudent.studentFirstName} { " "}{this.props.currentStudent.studentLastName}</p>

				 <StudentOptions changeLocation={this.changeLocation} />
				 <br/>

			         <StudentContainer>
			          {this.state.location === 'info'
			          ?	<section>
							<UpdateStudent
								studentId={this.props.currentStudent.studentId}
								updateStudents={this.props.updateStudents}
								checkCurrentStudent={this.checkCurrentStudent}
								currentStudent={this.props.currentStudent}
							/>

							<br/>
							<section className="retireFields">
							<p>Retire Student
							<input
								type="checkbox"
								id="checkboxChoice"
								className="retired-box"
								checked={this.state.studentRetireCheck}
								onChange={this.toggleCheck}
							/>
							</p>
							</section>
						</section>
					 :this.state.location === 'grades'
			          ?<Assignments studentId={this.props.currentStudent.studentId} />
			          :this.state.location === 'math'
			          ?<MathChart studentId={this.props.currentStudent.studentId} />
			          :this.state.location === 'reading'
			          ?<ReadingChart studentId={this.props.currentStudent.studentId} />
			          :this.state.location === 'contacts'
			          ?<Contacts studentId={this.props.currentStudent.studentId} updateContacts = {this.updateContacts} />
			          : <p> </p>}
			          	
			        </StudentContainer>
			</section>
		)
	}
}

export default Student
