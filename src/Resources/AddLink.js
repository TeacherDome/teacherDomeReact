import React, { Component } from 'react'

class AddLink extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

onClick=()=>{
		this.addLink();
		this.clearFields();
	}

addLink = () => {
		fetch('/api/TeacherResourcePage/addLink', {
			method: 'post',
			body: JSON.stringify({
				resourceLinkName: this.state.linkName,
			})
		})
			.then(res => res.json())
			.then(teacherResourceFolders => this.updateAllFolders(teacherResourceFolders))
	}

	
	render() {
		return (
			<section className="add-link">
				<label>
					Link Name:{' '}
					<input
						type="text"
						name="teacherResourceLinkName"
						id="linkName"
						placeholder="home Work"
						required
						value={this.state.linkName}
						onChange={this.updateLinkName}
					/>
				</label>
				
				
				<button className="folderSubmit" onClick={this.onClick}>
					Submit
				</button>
			</section>
		)
	}
}