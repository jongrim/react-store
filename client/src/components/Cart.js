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
      <p>First</p>
      <p>Second</p>
    </div>
  );
};

export default Cart;
