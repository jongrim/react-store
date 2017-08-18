import React from 'react';
import Button, { BlueButton } from './Button';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/utils';
import '../css/ProductCard.css';

const ProductCard = props => {
  const product = {
    id: props.id,
    name: props.name,
    price: props.price
  };

  return (
    <div className="product-card" data-item-id={props.id}>
      <h3>
        {props.name}
      </h3>
      <p>
        {formatPrice(props.price)}
      </p>
      <BlueButton small clickAction={props.addToCart} dataObj={product}>
        Add to cart
      </BlueButton>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductCard;
