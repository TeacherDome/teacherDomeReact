
import React, { Component } from 'react'
import TeacherResourcePage from './TeacherResourcePage'


class MainStudentPage extends Component {
	constructor() {
		super()
		this.state = {
     teacherResourceFolders: []

      	}
	}


	
	render(){
		return (
		<section>
		<div className= "MainResourcePage">
    	  <h1>This is the resource Page</h1>
   	
    	 <TeacherResourcePage />
    	 </div>
   		</section>
	)
		
	}
}
export default MainStudentPage