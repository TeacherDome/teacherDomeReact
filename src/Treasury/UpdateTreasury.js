import React, { Component } from 'react'
import api from '../api'
class UpdateTreasury extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		console.log(this.props)
			this.state = {
			addMoney: '',
			subtractMoney: '',
			addMoneyComment: '',
			subMoneyComment: '',
		}
	}

	onClickAdd=()=>{
		this.addFunds();
		this.clearFields();

	}

	onClickSub=()=>{
		this.subFunds();
		this.clearFields();

	}


	clearFields=()=>{
		this.state.addMoney = ''
		this.state.subtractMoney=''
		this.state.addMoneyComment = ''
		this.state.subMoneyComment=''
	}
	updateAddMoney = event => {
		this.setState({ addMoney: event.target.value })
	}

	updateSubMoney = event => {
		this.setState({ subtractMoney: event.target.value })
	}

	updateAddMoneyComment = event => {
			this.setState({ addMoneyComment: event.target.value })
		}

	updateSubMoneyComment = event => {
			this.setState({ subMoneyComment: event.target.value })
		}

	updateTheFunds = response => {
		this.props.updateFunds(response)
		this.getNewReceipts()

	}

	updateTheReceipts = response => {
		this.props.updateReceipts(response)
	}


	addFunds = () => {
		fetch('/api/treasury/updateTreasuryAdd', {
			method: 'post',
			body: JSON.stringify({
				addFunds: this.state.addMoney,
				addComment: this.state.addMoneyComment,

			})
		})
			.then(res => res.json())
			.then(funds => this.updateTheFunds(funds))
	}

	subFunds = () => {
		fetch('/api/treasury/updateTreasurySub', {
			method: 'post',
			body: JSON.stringify({
				addFunds: this.state.subtractMoney,
				subComment: this.state.subMoneyComment,

			})
		})
			.then(res => res.json())
			.then(funds => this.updateTheFunds(funds))
	}

	getNewReceipts = () => {
		fetch('/api/treasury/getReceipts', {
			method: 'put',
			body: JSON.stringify({
	
			})
		})
			.then(res => res.json())
			.then(receipts => this.updateTheReceipts(receipts))
	}

	render() {
		return (
			<section className="update-Funds">
				<label>
					{' '}
					Add to Funds:
					<input
						type="text"
						name="addMoney"
						id="addMoney"
						value={this.state.addMoney}
						onChange={this.updateAddMoney}
					/>
				</label>

				<label>
					{' '}
					Comments:
					<input
						type="textArea"
						name="addMoneyComment"
						id="addMoneyComment"
						value={this.state.addMoneyComment}
						onChange={this.updateAddMoneyComment}
					/>
				</label>

				
				<button className="fundsSubmit" onClick={this.onClickAdd}>Submit</button>
				<br/>
				<br/>
				<label>
					{' '}
					Remove Funds:
					<input
						type="text"
						name="subtractMoney"
						id="subtractMoney"
						value={this.state.subtractMoney}
						onChange={this.updateSubMoney}
					/>
				</label>

				<label>
					{' '}
					Comments:
					<input
						type="text"
						name="subMoneyComment"
						id="subMoneyComment"
						value={this.state.subMoneyComment}
						onChange={this.updateSubMoneyComment}
					/>
				</label>
				<button className="fundsSubmit" onClick={this.onClickSub}>Submit</button>

			</section>
		)
	}
}

export default UpdateTreasury
