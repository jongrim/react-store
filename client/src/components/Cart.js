import React from 'react';
import { formatPrice } from '../utils/utils';
import CartItem from './CartItem';

const Cart = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
    flexBasis: '326px',
    backgroundColor: 'white',
    boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.25)',
    alignSelf: 'flex-start',
    margin: '10px 12px 0px 0px',
    padding: '8px'
  };

  const cartTotal = {
    color: '#333333',
    borderBottom: '2px solid #333333'
  };

  return (
    <div style={style}>
      <h2 style={cartTotal}>
        Cart total:{' '}
        {formatPrice(
          props.products.reduce((acc, cur) => {
            return acc + parseFloat(cur.price);
          }, 0)
        )}
      </h2>
      {props.products.map(product => {
        return <CartItem item={product.name} price={product.price} />;
      })}
    </div>
  );
};

export default Cart;
