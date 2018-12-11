import React, { Component } from 'react'

class Links extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}	
	}

render {
	return (
		<section>
			this.props.links.map((link,index) =>(

				<a href={link.resourceLinkName} >
					{link.resourceLinkName}
				</a>

				<p>
					{link.resourceLinkDescription}
				</p>
				))
		</section
		)
	}
}

export default Links