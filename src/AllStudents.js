import React, { Component } from 'react'
import api from './api'
import AddStudent from './AddStudent'



class AllStudents extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students: []
		}
	}

	getStudents = () => {
		api(`http://localhost:8080/api/students`).then(students => {
			const newStudent = this.state.students
			students.forEach(student => {
				console.log(student.studentIsRetired)
				if (!student.studentIsRetired){
				newStudent.push(student)}})
			this.setState({students: newStudent})
		})
	}
	changeStudentInformation(passedStudent){
		this.props.changeStudent(passedStudent)
		
	}

	updateStudents(newStudents){
		this.setState({students:this.newStudent});
	}

	componentDidMount() {
		this.getStudents()
	}


	render() {
		return (<section class="class-list">
			<h2> Class List </h2>
				{this.state.students.map((student, index) => 
					<section class="studentInList" key={index}>
						<h2  onClick={() => this.changeStudentInformation(student)} >{student.studentFirstName} {student.studentLastName}</h2>
					</section>
				)}
				<AddStudent updateStudents={this.updateStudents} name={"happy"}/>

			</section>
		)
	}
}

export default AllStudents