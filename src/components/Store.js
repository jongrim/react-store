import React, { Component } from 'react';
import Cart from './Cart';
import ProductTable from './ProductTable';
import { Sidebar, SidebarLink } from './Sidebar.js';
import { Route, Link } from 'react-router-dom';
import API from '../utils/api.js';
import '../css/Store.css';

const storeFrontStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  paddingTop: '1em'
};

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: []
    };

    this.handlePurchase = this.handlePurchase.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.loadBooks = this.loadBooks.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    API.getAllBooks().then(products => {
      this.setState({ products });
    });
  }

  loadBooks() {
    API.getAllBooks().then(products => {
      this.setState({ products });
    });
  }

  loadMovies() {
    console.log('Loading movies');
    // API.getAllBooks().then(products => {
    //   this.setState({ products });
    // });
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
        </Sidebar>
        <Route
          path="/shop/books"
          render={() => (
            <ProductTable productAPI="/books" addToCart={this.addToCart} />
          )}
          productAPI="/books"
        />
        <Route
          path="/shop/movies"
          render={() => (
            <ProductTable productAPI="/movies" addToCart={this.addToCart} />
          )}
        />

        <Cart products={this.state.cart} />
      </div>
    );
  }
}

export default Store;

/* 
<ProductTable
          products={this.state.products}
          addToCart={this.addToCart}
        />
        */
