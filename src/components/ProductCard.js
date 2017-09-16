import React from 'react';
import { BlueButton } from './Buttons';
import Image from './Image.js';
import GhostImage from './GhostImage.js';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/utils';
import { Link } from 'react-router-dom';
import '../css/ProductCard.css';

const style = {
  display: 'flex',
  flex: '1 0 300px',
  maxHeight: '200px',
  padding: '12px',
  borderRight: '1px solid #f5f5f5'
};

const ProductCard = props => {
  const { id, name, price, addToCart, imgUrl, category } = props;
  const product = {
    id,
    name,
    price
  };

  return (
    <div className="product-card" style={style}>
      {imgUrl ? <Image imgUrl={imgUrl} name={name} /> : <GhostImage />}
      <ProductCardInfo>
        <Link to={`/shop/${category}/${id}`}>
          <h5>{name}</h5>
        </Link>
        <p>{formatPrice(price)}</p>
        <BlueButton small clickAction={addToCart} dataObj={product}>
          Add to cart
        </BlueButton>
      </ProductCardInfo>
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

const ProductCardInfo = props => {
  return <div>{props.children}</div>;
};

export default ProductCard;
