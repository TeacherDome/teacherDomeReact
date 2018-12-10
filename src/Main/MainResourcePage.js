import React, { Component } from 'react'
import TeacherResourcePage from '../Resources/TeacherResourcePage'
import Folder from '../Resources/Folder'


class MainStudentPage extends Component {
	constructor() {
		super()
		this.state = {
	     teacherResourceFolders: [],
	     	currentFolder: {
	     		currentFolderName: "",
	     		currentFolderId: ""
     		}

      	}
	}

	updateFolders = newFolder => {
    	this.setState({ teacherResourceFolders: newFolder })
  }

	changeTeacherResourcePage = passedFolder => {
		this.setState({ currentFolder: passedFolder })
	}
	
	render(){
		return (
			<section className= "MainResourcePage">
	    	  <h1>This is the resource Page</h1>
	    	 <TeacherResourcePage teacherResourcePage = {this.state.teacherResourceFolders} changeTeacherResourcePage={this.changeTeacherResourcePage} updateFolders={this.updateFolders} />
	    	 <Folder updateFolders = {this.updateFolders} changeTeacherResourcePage={this.changeTeacherResourcePage} currentFolder= {this.state.currentFolder} />
	   		</section>
		)	
	}

}

export default MainStudentPage