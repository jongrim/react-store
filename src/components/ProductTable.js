import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import API from '../utils/api.js';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  flexBasis: '640px',
  flexGrow: '1',
  padding: '0'
};

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const { productAPI } = this.props;
    API.getResource(productAPI).then(data => {
      console.log(data);
      this.setState({
        products: data
      });
    });
  }

  render() {
    return (
      <div style={style}>
        {this.state.products.length > 0 ? (
          this.state.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              addToCart={this.props.addToCart}
            />
          ))
        ) : null}
      </div>
    );
  }
}

ProductTable.propTypes = {
  productAPI: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};
