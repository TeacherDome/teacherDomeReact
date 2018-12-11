import React, { Component } from 'react'

class AddLink extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onClick= () => {
		this.addLink();
		this.clearFields();
	}

	updateAllLinks= (response) => {
		this.props.updateLinks(response)
	}

	updateLinkName = event => {
		this.setState({ linkName: event.target.value })
	}

	updateLinkDescription = event => {
		this.setState({linkDescription: event.target.value})
	}

	clearFields = () => {
		this.state.linkName=''
		this.state.linkDescription=''
	}


	addLink = () => {
		fetch('/api/TeacherResourcePage/addLink', {
			method: 'post',
			body: JSON.stringify({
				LinkName: this.state.linkName,
				LinkDescription: this.state.linkDescription,
				FolderId: this.props.currentFolder.resourceFolderId
			})
		})
		.then(res => res.json())
		.then(links => this.updateAllLinks(links))
	}

	
	render() {
		return (
			<section className="add-link">
			<label>
			Link Address:{' '}
				<input
				type="text"
				name="teacherResourceLinkName"
				id="linkName"
				placeholder="somewhere"
				required
				value={this.state.linkName}
				onChange={this.updateLinkName}
				/>
			</label>

			<label>
			Link Description:{''}
				<input
				type="text"
				name="teacherResourceLinkDescription"
				id="linkDescription"
				required
				value={this.state.linkDescription}
				onChange={this.updateLinkDescription}
				/>
			</label>

			<button className="linkSubmit" onClick={this.onClick}>
				Submit
			</button>
			</section>
			)
	}
}

export default AddLink