import React, { Component } from 'react';
import '../css/OrderForm.css';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      product: 1
    };

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  handleQuantityChange(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({ quantity: value });
  }

  handleProductChange(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({ product: value });
  }

  render() {
    return (
      <form className="orderForm" onSubmit={e => this.props.fnPurchase(e, this.state.product, this.state.quantity)}>
        <select onChange={this.handleProductChange}>
          {this.props.product.map(product =>
            <option key={product.item_id} value={product.item_id}>
              {product.product_name}
            </option>
          )}
        </select>
        <input type="number" onChange={this.handleQuantityChange} value={this.state.quantity} />
        <input type="submit" value="Buy Product" />
      </form>
    );
  }
}

export default OrderForm;
