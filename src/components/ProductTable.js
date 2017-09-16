import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../utils/api.js';

const style = {
  display: 'flex',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  flexBasis: '640px',
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
    return (
      <div style={style}>
        {this.state.products.length > 0 ? (
          this.state.products.map(product => (
            <Wrapper
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
  addToCart: PropTypes.func.isRequired,
  cardType: PropTypes.func.isRequired
};
