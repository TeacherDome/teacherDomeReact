import React, { Component } from 'react'
import api from '../api'

class Folder extends Component {
	constructor(props) {
		super(props)
		this.state = {
			}
		}
	}

checkCurrentFolder = () =>{
			console.log("HERE")
		fetch('/api/Folder', {
			method: 'PUT',
			body: JSON.stringify({
				folderId: this.props.currentFolder.folderId
			})
		})
			.then(res => res.json())
			.then(teacherResourceFolders => this.updateCurrentStudent(teacherResourceFolders))
	}

	render() {
		return (
			<section
				id= 'folderSection'
				key= {this.props.currentFolder.currentFolderId}
			>
			<p className="name"> {this.props.currentFolder.currentFolderName}</p>

			</section>
		))
	}
}

export default Folder