import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const style = {
    color: props.color,
    border: 'none',
    backgroundColor: props.bgColor,
    height: props.small ? '20px' : '50px',
    width: props.small ? '80px' : '100px',
    fontSize: props.small ? '12px' : '16px',
    boxShadow: props.boxShadow,
    cursor: 'pointer',
    textAlign: props.textAlign,
    padding: '0px'
  };
  return (
    <button
      className="button"
      style={style}
      onClick={() => {
        props.clickAction(props.dataObj);
      }}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  color: 'white',
  bgColor: '#2D5199',
  small: true,
  boxShadow: '0px 0px 6px 2px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  small: PropTypes.bool,
  boxShadow: PropTypes.string,
  textAlign: PropTypes.string,
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};
export default Button;
