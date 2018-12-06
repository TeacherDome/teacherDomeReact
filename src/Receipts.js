import React, { Component } from 'react'
import api from './api'
import UpdateTreasury from './UpdateTreasury'

class Receipts extends Component {
	constructor(props) {
		super(props)
	
	}

	getReceipts = () => {
		api(`http://localhost:8080/api/receipts`).then(receipts => {
			const newReceipts = this.props.allReceipts
			receipts.forEach(receipt => newReceipts.push(receipt))
			this.setState({receipts: newReceipts})
		})
	}

	componentDidMount() {
		this.getReceipts()
	}

	render() {
		return (<section>
				{this.props.allReceipts.map((receipt, index) => 
					<section key={index}>
						<h2>{receipt.lineItem}</h2>
					</section>
				)}
				<UpdateTreasury updateFunds={this.props.updateFunds} updateReceipts={this.props.updateReceipts} treasuryFunds = {this.funds}/>
			</section>
		)
	}
}



export default Receipts
