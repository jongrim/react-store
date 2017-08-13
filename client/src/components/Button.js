import React from 'react';
import '../css/Button.css';

const Button = props => {
  const style = {
    color: 'white',
    border: 'none',
    backgroundColor: props.bgColor,
    height: props.small ? '20px' : '50px',
    width: props.small ? '70px' : '100px',
    fontSize: props.small ? '12px' : '16px',
    boxShadow: '0px 0px 6px 2px rgba(0,0,0,0.1)',
    cursor: 'pointer'
  };
  return (
    <button className="button" style={style}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  bgColor: '#2D5199',
  small: true
};

export default Button;
