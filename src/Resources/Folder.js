import React, { Component } from 'react'
import api from '../api'

class Folder extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		
	}



	render() {
		return (
			<section
			id= 'folderSection'
			key= {this.props.currentFolder.resourceFolderId}
			>
			<p className="name"> {this.props.currentFolder.resourceFolderName}</p>

			</section>
			)
	}
}


export default Folder