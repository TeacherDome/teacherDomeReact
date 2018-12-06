<<<<<<< HEAD
import React, { Component } from 'react'
import TeacherResourcePage from './TeacherResourcePage'
=======
import React from 'react'
import './Layout.css';
>>>>>>> c3d61a15fdd1832d7bc3c0dea124fb7ca650e322

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