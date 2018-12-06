import React, { Component } from 'react'
import api from './api'

class Treasury extends Component {
	constructor(props) {
		super(props)
	}

	getFunds = () => {
		api(`http://localhost:8080/api/treasury`).then(funds => {
			const newFunds = this.props.treasuryFunds
			funds.forEach(fund => newFunds.push(fund))
			this.setState({funds: newFunds})
		})
	}

	componentDidMount() {
		this.getFunds()
	}

	render() {
		return (<section>
				{this.props.treasuryFunds.map((fund, index) => 
					<section key={index}>
						<h2>{fund.funds}</h2>
					</section>
				)}
			</section>
		)
	}
}

export default Treasury
