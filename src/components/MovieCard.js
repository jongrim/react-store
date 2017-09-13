import React, { Component } from 'react';
import ProductCard from './ProductCard.js';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProductCard {...this.props} />;
  }
}
