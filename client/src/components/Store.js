import React, { Component } from 'react';
import OrderForm from './OrderForm';
import ProductTable from './ProductTable';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => {
        return res.json();
      })
      .then(products => {
        this.setState({ products });
      });
  }

  handlePurchase(event, product, quantity) {
    event.preventDefault();
    fetch('/customer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product_id: product, quantity: quantity })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <div>
        {this.state.message
          ? <div>
              <h1>
                {this.state.message}
              </h1>
            </div>
          : <div />}
        <ProductTable products={this.state.products} />
        <OrderForm product={this.state.products} fnPurchase={this.handlePurchase} />
      </div>
    );
  }
}

export default Store;
