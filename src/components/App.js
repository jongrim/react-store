import React, { Component } from 'react';
import Home from './Home.js';
import Nav from './Nav';
import Store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: "'Raleway', 'Quicksand', sans-serif",
  minHeight: '100%'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  increaseQuantity(product) {
    this.setState(prevState => {
      let cart = prevState.cart;
      let itemIndex = cart.findIndex(item => item.name === product.name);
      cart[itemIndex].quantity++;
      return cart;
    });
  }

  decreaseQuantity(product) {
    this.setState(prevState => {
      let cart = prevState.cart;
      let itemIndex = cart.findIndex(item => item.name === product.name);
      if (cart[itemIndex].quantity === 1) {
        cart = cart.splice(itemIndex, 1);
        return cart;
      } else {
        cart[itemIndex].quantity--;
        return cart;
      }
    });
  }

  removeFromCart(product) {
    this.setState(prevState => {
      let cart = prevState.cart;
      let itemIndex = cart.findIndex(item => item.name === product.name);
      cart = cart.splice(itemIndex, 1);
      return cart;
    });
  }

  render() {
    return (
      <Router>
        <div style={appStyle}>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route
            path="/shop"
            render={props => {
              return (
                <Store
                  cart={this.state.cart}
                  addToCart={this.addToCart}
                  increaseQuantity={this.increaseQuantity}
                  decreaseQuantity={this.decreaseQuantity}
                  removeFromCart={this.removeFromCart}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
