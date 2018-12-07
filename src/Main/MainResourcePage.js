import React, { Component } from 'react'
import TeacherResourcePage from './TeacherResourcePage'


class MainStudentPage extends Component {
	constructor() {
		super()
		this.state = {
     teacherResourceFolders: [],
     	currentFolder: {
     		currentFolderName: ""
     	}

      	}
	}

	updateFolders = newFolder => {
    	this.setState({ teacherResourceFolders: newFolder })
  }

	
	render(){
		return (
			<section className= "MainResourcePage">
	    	  <h1>This is the resource Page</h1>
	    	 <TeacherResourcePage teacherResourcePage = {this.state.teacherResourceFolders} changeTeacherResourcePage={this.changeTeacherResourcePage} updateFolders={this.updateFolders} />
	   		</section>
		)	
	}
	changeTeacherResourcePage = passedFolder => {
		this.setState({ currentFolder: passedFolder })
	}

}

export default MainStudentPage