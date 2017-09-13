import React from 'react';
import { BlueButton } from './Buttons';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/utils';
import '../css/ProductCard.css';

const style = {
  backgroundColor: '#fafafa',
  flexBasis: '200px',
  flexGrow: '0',
  flexShrink: '1',
  padding: '12px',
  margin: '1em',
  boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.25)'
};

const ProductCard = props => {
  const { id, name, price, addToCart, imgUrl } = props;
  const product = {
    id,
    name,
    price
  };

  return (
    <div className="product-card" style={style}>
      <h3>{name}</h3>
      <img src={imgUrl} alt="Product thumbnail" />
      <p>{formatPrice(price)}</p>
      <BlueButton small clickAction={addToCart} dataObj={product}>
        Add to cart
      </BlueButton>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  imgUrl: PropTypes.string
};

export default ProductCard;
