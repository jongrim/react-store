import React from 'react';

const Cart = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: '1',
    flexBasis: '326px'
  };
  return (
    <div style={style}>
      {props.products
        ? props.products.map(product => {
            return (
              <p>
                {product.name} - ${product.price}
              </p>
            );
          })
        : <div />}
    </div>
  );
};

export default Cart;
