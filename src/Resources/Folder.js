import React, { Component } from 'react'
import api from '../api'
import AddLink from './AddLink'

class Folder extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
		
	}



	render() {
		return (
			<section>
			<section
			id= 'folderSection'
			key= {this.props.currentFolder.resourceFolderId}
			>
			<p className="folderName"> {this.props.currentFolder.resourceFolderName}</p>

			</section>
			<AddLink
				updateLinks={this.props.updateLinks}
				currentFolder={this.props.currentFolder}
			/>
			</section>
			)
	}
}


export default Folder