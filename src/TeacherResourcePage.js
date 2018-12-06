import React, { Component } from 'react'
import api from './api'

class TeacherResourcePage  extends Component {
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

changeResourceFolder(passedTeacherResourceFolder) {
		this.props.changeResourceFolder(passedTeacherResourceFolder)
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
					<h2
							onClick={() =>
								this.changeResourceFolder(teacherResourceFolder)
							}
						>
							{teacherResourceFolder.resourceFolderName}
						</h2>
					</section>

			))
			}
			</section>
)
}
}
export default TeacherResourcePage