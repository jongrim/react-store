import React from 'react';
import { BlueButton } from './Buttons';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/utils';
import '../css/ProductCard.css';

const style = {
  backgroundColor: 'white',
  flexBasis: '200px',
  flexGrow: '0',
  flexShrink: '1',
  padding: '12px',
  margin: '10px 0px',
  boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.25)'
};

const ProductCard = props => {
  let { id, name, price } = props;
  const product = {
    id,
    name,
    price
  };

  return (
    <div className="product-card" style={style}>
      <h3>
        {name}
      </h3>
      <p>
        {formatPrice(price)}
      </p>
      <BlueButton small clickAction={props.addToCart} dataObj={product}>
        Add to cart
      </BlueButton>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductCard;
