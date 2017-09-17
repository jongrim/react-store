import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../utils/api.js';
const Spinner = require('react-spinkit');

const style = {
  display: 'flex',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  flexBasis: '640px',
  flexGrow: '1'
};

const centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: '1'
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
      this.setState({
        products: data
      });
    });
  }

  render() {
    const Wrapper = this.props.cardType;
    const loaded = this.state.products.length > 0;
    if (loaded) {
      return (
        <div style={style}>
          {this.state.products.map(product => (
            <Wrapper
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              addToCart={this.props.addToCart}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div style={centered}>
          <Spinner name="line-scale" color="#712F79" />
        </div>
      );
    }
  }
}

ProductTable.propTypes = {
  productAPI: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  cardType: PropTypes.func.isRequired
};
