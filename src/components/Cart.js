import React from 'react';
import { formatPrice } from '../utils/utils';
import CartItem from './CartItem';

const Cart = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
    flexBasis: '265px',
    backgroundColor: '#f5f5f5',
    alignSelf: 'flex-start',
    height: '100%',
    overflowY: 'auto'
  };

  const { products } = props;

  return (
    <div style={style}>
      <CartHeading>
        {products.length > 0 ? (
          <div>
            Subtotal:{' '}
            {formatPrice(
              products.reduce((acc, cur) => {
                return acc + parseFloat(cur.price) * cur.quantity;
              }, 0)
            )}
          </div>
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
          />
        );
      })}
    </div>
  );
};

const cartHeading = {
  color: '#333333',
  borderBottom: '2px solid #333333',
  fontSize: '1em',
  padding: '0 0 0 0.5em',
  marginBottom: '6px'
};

const CartHeading = props => {
  return <h2 style={cartHeading}>{props.children}</h2>;
};

export default Cart;
