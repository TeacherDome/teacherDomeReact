import React, { Component } from 'react'
import TeacherResourcePage from '../Resources/TeacherResourcePage'
import Folder from '../Resources/Folder'

import '../css/MainResourcePage.css'
class MainStudentPage extends Component {
	constructor() {
		super()
		this.state = {
	     teacherResourceFolders: [],
	     links: [],
	     	currentFolder: {
	     		resourceFolderName: "",
	     		resourceFolderId: ""
     		}

      	}
	}

	updateLinks = newLink => {
		this.setState({links: newLink })
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
			<TeacherResourcePage 
				teacherResourcePage={this.state.teacherResourceFolders}
				changeTeacherResourcePage={this.changeTeacherResourcePage}
				updateFolders={this.updateFolders}
			/>
	    	
	    	<Folder
	    		updateLinks={this.updateLinks} 
	    		updateFolders={this.updateFolders} 
	    		changeTeacherResourcePage={this.changeTeacherResourcePage}
	    		currentFolder={this.state.currentFolder}
	    	/>
	   		
	   		</section>
		)	
	}

}

export default MainStudentPage