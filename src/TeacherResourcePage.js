import React, { Component } from 'react'
import api from './api'
import AddFolder from './AddFolder'

class TeacherResourcePage  extends Component {
	constructor(props) {
		super(props) 
		this.state = {
  

      	}
	}
	
	getTeacherResorce = () => {
		api(`http://localhost:8080/api/TeacherResourcePage`).then(teacherResourceFolders => {
			const newFolder = this.props.teacherResourcePage
			teacherResourceFolders.forEach(teacherResource =>{
				newFolder.push(teacherResource)
		})
			this.setState({ teacherResourceFolders: newFolder })
	})
}

changeTeacherResourceFolder(passedFolder) {
		this.props.changeTeacherResourcePage(passedFolder)
	}

	componentDidMount() {
		this.getTeacherResorce()
	}


render() {
	
		return (
			<section className="folder-list">
			<h2> Folder List </h2>
			{console.log(this.props.teacherResourcePage)}
			{this.props.teacherResourcePage.map((resourceFolders, index) => (
					<section className="folderInList" key={index}>
					<h2
							onClick={() =>
								this.changeTeacherResourceFolder(resourceFolders)
							}
						>
							{resourceFolders.resourceFolderName}
						</h2>
					</section>

			))}
			<AddFolder updateFolders={this.props.updateFolders} />
			</section>
		)
	}
}

export default TeacherResourcePage