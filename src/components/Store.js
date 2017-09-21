import React, { Component } from 'react';
import API from '../utils/api.js';
import Cart from './Cart';
import JumboDisplay from './JumboDisplay.js';
import { Sidebar, SidebarLink } from './Sidebar.js';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookDetail from './BookDetail.js';
import GameDetail from './GameDetail.js';
import MovieDetail from './MovieDetail.js';
import BookCard from './BookCard';
import GameCard from './GameCard';
import MovieCard from './MovieCard';
import ProductDetail from './ProductDetail.js';
import ProductTable from './ProductTable';

const storeFrontStyle = {
  minHeight: '100%',
  width: '100%',
  display: 'flex',
  flex: '1'
};

class Store extends Component {
  static propTypes = {
    cart: PropTypes.array,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
  };

  static defaultProps = {
    cart: []
  };

  constructor(props) {
    super(props);
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
          path="/shop"
          render={() => {
            return (
              <JumboDisplay bgColor="#F15025">
                <h1 style={{ fontSize: '4rem', fontWeight: '100' }}>
                  Check out the amazing deals
                </h1>
                <p style={{ fontSize: '2rem' }}>← Look here!</p>
              </JumboDisplay>
            );
          }}
        />
        <Route
          exact
          path="/shop/books"
          render={() => (
            <ProductTable
              productAPI="/books"
              addToCart={this.props.addToCart}
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
              addToCart={this.props.addToCart}
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
              addToCart={this.props.addToCart}
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

        {this.props.cart.length > 0 ? (
          <Cart
            products={this.props.cart}
            increaseQuantity={this.props.increaseQuantity}
            decreaseQuantity={this.props.decreaseQuantity}
            removeFromCart={this.props.removeFromCart}
          />
        ) : null}
      </div>
    );
  }
}

export default Store;
