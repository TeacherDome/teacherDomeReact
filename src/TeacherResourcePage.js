import React, { Component } from 'react'
import api from './api'

class TeacherResourcesPage  extends Component {
	constructor(props) {
		super(props) 
		this.state ={
			teacherResourceFolders: []
		}
	}
	
	getTeacherResorce = () => {
		api(`http://localhost:8080/api/TeacherResourcesPage`).then(teacherResourceFolders => {
			const newFolder = this.state.teacherResourceFolders
			teacherResourceFolders.forEach(teacherResourceFolder =>{
				newFolder.push(teacherResourceFolder)
		})
			this.setState({ teacherResourceFolders: newFolder })
	})
}
	componentDidMount() {
		this.getTeacherResorce()
	}


render() {
	
		return (
			<section className="folder-list">
			<h2> Folder List </h2>
			{this.state.teacherResourceFolders.map((teacherResourceFolder, index) => (
					<section className="folderInList" key={index}>
					</section>
			))
			}
			</section>
)
}
}
export default TeacherResourcesPage