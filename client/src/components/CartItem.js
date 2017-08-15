import React from 'react';
import { formatPrice } from '../utils/utils';

const style = {
  display: 'flex',
  justifyContent: 'space-between'
};

const CartItem = props => {
  return (
    <div style={style}>
      <p>
        {props.item}
      </p>
      <p>
        {formatPrice(props.price)}
      </p>
    </div>
  );
};

export default CartItem;
