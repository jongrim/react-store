import React, { Component } from 'react';
import Cart from './Cart';
import OrderForm from './OrderForm';
import ProductTable from './ProductTable';
import '../css/Store.css';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: []
    };

    this.handlePurchase = this.handlePurchase.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  addToCart(event, product) {
    event.preventDefault();
    console.log('add to cart');
  }

  render() {
    return (
      <div className="store-front">
        {this.state.message
          ? <div>
              <h1>
                {this.state.message}
              </h1>
            </div>
          : <div />}
        <ProductTable products={this.state.products} addToCart={this.addToCart} />
        <Cart />
        {/* <OrderForm product={this.state.products} fnPurchase={this.handlePurchase} /> */}
      </div>
    );
  }
}

export default Store;
