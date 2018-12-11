import React, { Component } from 'react'
import api from '../api'
import AddGrade from './AddGrade'

class AllGrades extends Component {
	constructor(props) {
		super(props)
	}

	getGrades = () => {
		api(`http://localhost:8080/api/grades`).then(grades => {
			const newGrades= this.props.allGrades
			grades.forEach(grade => {
					if(grade.givenAssignmentId == this.props.currentAssignmentId){
					newGrades.push(grade)
					 }
			})
			this.setState({ grades: newGrades })	
		})
	}

	componentDidMount() {
		this.getGrades()
	}

	render() {

		return (
			<section className="class-list">
				<h2 className="class-list-header"> Grades  </h2>
				{this.props.allGrades.map((grade, index) => (
					<section className="studentInList" key={index}>
						<h2>
							{grade.criteria}
						</h2>
						<p>{grade.studentGrade}{" / "}{grade.fullGrade}</p>
					</section>
				))}
			<AddGrade updateGrades={this.props.updateGrades} currentAssignmentId = {this.props.currentAssignmentId}/>
			</section>
		)
	}
}

export default AllGrades
