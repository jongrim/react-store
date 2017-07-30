import React, {	Component } from 'react';
import './App.css';
import Customer from './components/customer.js'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			product: [],
		}

		this.handlePurchase = this.handlePurchase.bind(this);
	}

	componentDidMount(){
		fetch('/customer')
			.then(res => {
				return res.json()
			})
			.then(product => {
				this.setState({product});
			})
	}

	handlePurchase(event, product, quantity){
		event.preventDefault();
		event.stopPropogation();
		fetch('/customer', {method: 'POST', body: JSON.stringify({product, quantity})})
			.then(res => res.json())
			.then(data => {
				this.setState({message: data.message})
			})
	}
	
	render() {
		return (
			<div className = "App" >
				{this.state.message ? (<div><h1>{this.state.message}</h1></div>) : (<div></div>)}
				<Customer product={this.state.product} fnPurchase={this.handlePurchase} />
			</div>
		);
	}
}

export default App;