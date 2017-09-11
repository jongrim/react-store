import React from 'react';
import { formatPrice } from '../utils/utils';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.8em',
  flexShrink: '0',
  padding: '0.5em'
};

const CartItem = props => {
  let { item, quantity, price } = props;
  return (
    <div style={style}>
      <span>
        {item} {quantity > 1 ? `(x${quantity})` : null}
      </span>
      <span>{formatPrice(props.price)}</span>
    </div>
  );
};

export default CartItem;
