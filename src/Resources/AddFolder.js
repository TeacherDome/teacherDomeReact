import React, { Component } from 'react'

class AddFolder extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick=()=>{
		this.addFolder();
		this.clearFields();
	}

	updateAllFolders = response => {
		this.props.updateFolders(response)

	}

	updateFolderName = event => {
		this.setState({ folderName: event.target.value })
	}

	clearFields=()=>{
		this.state.folderName = ''
		
	}
	addFolder = () => {
		fetch('/api/TeacherResourcePage/addResourceFolder', {
			method: 'post',
			body: JSON.stringify({
				resourceFolderName: this.state.folderName,
			})
		})
			.then(res => res.json())
			.then(teacherResourceFolders => this.updateAllFolders(teacherResourceFolders))
	}

	render() {
		return (
			<section className="add-folders">
			<br / >
				<label>
					Folder Name:{' '}
					<input
						type="text"
						name="teacherResourceFolderName"
						id="folderName"
						placeholder="home Work"
						required
						value={this.state.folderName}
						onChange={this.updateFolderName}
					/>
				</label>
				
				
				<button className="folderSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}

export default AddFolder
