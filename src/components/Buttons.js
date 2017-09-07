import React from 'react';
import PropTypes from 'prop-types';

export const BlueButton = props => {
  const style = {
    color: '#2D5199',
    border: '2px solid #2D5199',
    backgroundColor: 'transparent',
    height: props.small ? '20px' : '50px',
    width: props.small ? '80px' : '100px',
    fontSize: props.small ? '12px' : '16px',
    boxShadow: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: '3px'
  };

  return (
    <Button
      style={style}
      clickAction={props.clickAction}
      dataObj={props.dataObj}>
      {props.children}
    </Button>
  );
};

BlueButton.propTypes = {
  small: PropTypes.bool,
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};

BlueButton.defaultProps = {
  small: true,
  clickAction: null,
  dataObj: null
};

const Button = props => {
  return (
    <button
      style={props.style}
      onClick={() => {
        props.clickAction(props.dataObj);
      }}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};

Button.defaultProps = {
  clickAction: null,
  dataObj: null
};

export default Button;
