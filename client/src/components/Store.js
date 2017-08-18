import React, { Component } from 'react';
import Cart from './Cart';
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

  addToCart(product) {
    this.setState(prevState => {
      let cart = prevState.cart;
      let itemIndex = cart.findIndex(item => item.name === product.name);
      if (itemIndex !== -1) {
        cart[itemIndex].quantity++;
      } else {
        product.quantity = 1;
        cart.push(product);
      }
      return {
        cart
      };
    });
  }

  render() {
    return (
      <div className="store-front">
        <ProductTable
          products={this.state.products}
          addToCart={this.addToCart}
        />
        <Cart products={this.state.cart} />
      </div>
    );
  }
}

export default Store;
