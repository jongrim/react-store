import React, { Component } from 'react';

class Customer extends Component {
	constructor(props){
		super(props)

		this.state = {
			quantity: 0,
			product: 0
		}

		this.handleQuantityChange = this.handleQuantityChange.bind(this);
		this.handleProductChange = this.handleProductChange.bind(this);
	}

	handleQuantityChange(event){
		const value = event.target.value;
		this.setState({quantity: value})
	}

	handleProductChange(event){
		const value = event.target.value;
		this.setState({product: value})
	}

	render() {
		return (
			<div>
				<table>
					<tr>
						<th>Product ID</th>
						<th>Product Name</th>
						<th>Department Name</th>
						<th>Price</th>
					</tr>
					{this.props.product.map(product => 
						<tr key={product.item_id}>
							<td>{product.item_id}</td>
							<td>{product.product_name}</td>
							<td>{product.department_name}</td>
							<td>{product.price}</td>
						</tr>
					)}
				</table>
				<div>
					<form>
						<select onChange={this.handleProductChange}>
							{this.props.product.map(product => 
								<option key={product.item_id} value={product.item_id}>{product.product_name}</option>
							)}
						</select>
						<input type='number' onChange={this.handleQuantityChange}></input>
						<input type="submit" value='Buy Product' onSubmit={(e) => this.props.fnPurchase(e, this.product, this.quantity)}></input>
					</form>
				</div>
			</div>
		);
	}
}

export default Customer;