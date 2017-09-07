import React from 'react';
import { formatPrice } from '../utils/utils';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.8em',
  flexShrink: '0'
};

const CartItem = props => {
  let { item, quantity, price } = props;
  return (
    <div style={style}>
      <p>
        {item} {quantity > 1 ? `(x${quantity})` : null}
      </p>
      <p>
        {formatPrice(props.price)}
      </p>
    </div>
  );
};

export default CartItem;
