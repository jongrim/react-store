import React from 'react';
import CartItem from './CartItem';
import { formatPrice } from '../utils/utils';
import PropTypes from 'prop-types';

const Cart = props => {
  const cartContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 265px',
    borderLeft: '1px solid #f5f5f5',
    minHeight: '100%',
    padding: '0 4px'
  };

  const cartPieces = {
    position: 'sticky',
    webkitPosition: 'sticky',
    top: '0px'
  };

  const {
    products,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = props;

  return (
    <div style={cartContainer}>
      <div style={cartPieces}>
        <CartHeading>
          {products.length > 0 ? (
            <span>
              Subtotal:{' '}
              {formatPrice(
                products.reduce((acc, cur) => {
                  return acc + parseFloat(cur.price) * cur.quantity;
                }, 0)
              )}
            </span>
          ) : (
            <div>Cart empty</div>
          )}
        </CartHeading>
        {products.map((product, i) => {
          return (
            <CartItem
              key={i}
              item={product.name}
              price={product.price}
              quantity={product.quantity}
              product={product}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const cartHeadingStyle = {
  color: '#333333',
  borderBottom: '2px solid #333333',
  fontSize: '1em',
  padding: '0 0 0 0.5em',
  marginBottom: '6px',
  textAlign: 'center'
};

const CartHeading = props => {
  return (
    <h2 style={cartHeadingStyle}>
      <span className="fa fa-shopping-cart" /> {props.children}
    </h2>
  );
};

export default Cart;
