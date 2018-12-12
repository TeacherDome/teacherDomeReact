import React, { Component } from 'react'

class Links extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}	
	}

render() {
	return (
		<section>
		<h2 className="LinksList">Links</h2>
			{this.props.links.map((link,index) =>(
				<section className="LinkList" key={index}>
				<a href={link.resourceLinkName} >
					{link.resourceLinkName}
				</a>

				<p>
					{link.resourceLinkDescription}
				</p>
				</section>
				))}
		</section>
		)
	}
}

export default Links