import React from 'react';
import { formatPrice } from '../utils/utils';

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
  return (
    <div style={style}>
      {props.products.map(product => {
        return (
          <p>
            {product.name} - ${product.price}
          </p>
        );
      })}
      <p>
        Cart total:{' '}
        {formatPrice(
          props.products.reduce((acc, cur) => {
            return acc + parseFloat(cur.price);
          }, 0)
        )}
      </p>
    </div>
  );
};

export default Cart;
