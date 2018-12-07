import React, { Component } from 'react'
import Treasury from '../Treasury/Treasury'
import Receipts from '../Treasury/Receipts'


class MainTreasuryPage extends Component {
	constructor() {
		super()
		this.state = {
     	 	funds: [],
     	 	receipts: []
		}
	}

	 updateFunds = newFunds => {
    this.setState({ funds: newFunds })
  }

	 updateReceipts = newReciepts => {
    this.setState({ receipts: newReciepts })
  }


render(){
	return (
		<section className="MainTreasuryPage">
     <Treasury treasuryFunds = {this.state.funds} />
     <Receipts allReceipts={this.state.receipts} updateFunds={this.updateFunds} updateReceipts={this.updateReceipts} treasuryFunds = {this.state.funds}/>
     </section>
     )
	}
}

export default MainTreasuryPage



