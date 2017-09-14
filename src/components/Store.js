import React, { Component } from 'react';
import Cart from './Cart';
import ProductTable from './ProductTable';
import ProductDetail from './ProductDetail.js';
import BookDetail from './BookDetail.js';
import GameDetail from './GameDetail.js';
import MovieDetail from './MovieDetail.js';
import { Sidebar, SidebarLink } from './Sidebar.js';
import { Route } from 'react-router-dom';
import API from '../utils/api.js';

import BookCard from './BookCard';
import GameCard from './GameCard';
import MovieCard from './MovieCard';

const storeFrontStyle = {
  height: '100%',
  width: '100%',
  display: 'flex'
};

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };

    this.handlePurchase = this.handlePurchase.bind(this);
    this.addToCart = this.addToCart.bind(this);
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
      <div style={storeFrontStyle}>
        <Sidebar>
          <SidebarLink to="/shop/books">Books</SidebarLink>
          <SidebarLink to="/shop/movies">Movies</SidebarLink>
          <SidebarLink to="/shop/games">Games</SidebarLink>
        </Sidebar>
        <Route
          exact
          path="/shop/books"
          render={() => (
            <ProductTable
              productAPI="/books"
              addToCart={this.addToCart}
              cardType={BookCard}
            />
          )}
        />
        <Route
          exact
          path="/shop/games"
          render={() => (
            <ProductTable
              productAPI="/games"
              addToCart={this.addToCart}
              cardType={GameCard}
            />
          )}
        />
        <Route
          exact
          path="/shop/movies"
          render={() => (
            <ProductTable
              productAPI="/movies"
              addToCart={this.addToCart}
              cardType={MovieCard}
            />
          )}
        />

        <Route
          path="/shop/books/:id"
          render={props => {
            return (
              <ProductDetail
                {...props}
                productAPI={API.getOneBook}
                component={BookDetail}
              />
            );
          }}
        />
        <Route
          path="/shop/games/:id"
          render={props => {
            return (
              <ProductDetail
                {...props}
                productAPI={API.getGame}
                component={GameDetail}
              />
            );
          }}
        />
        <Route
          path="/shop/movies/:id"
          render={props => {
            return (
              <ProductDetail
                {...props}
                productAPI={API.getOneMovie}
                component={MovieDetail}
              />
            );
          }}
        />

        {this.state.cart.length > 0 ? (
          <Cart products={this.state.cart} />
        ) : null}
      </div>
    );
  }
}

export default Store;
