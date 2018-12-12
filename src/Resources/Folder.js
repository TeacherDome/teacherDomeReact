import React, { Component } from 'react'
import api from '../api'
import AddLink from './AddLink'
import Links from './Links'

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
			<Links
				links={this.props.links}
			/>
			<AddLink
				updateLinks={this.props.updateLinks}
				currentFolder={this.props.currentFolder}
			/>
			</section>
			)
	}
}


export default Folder