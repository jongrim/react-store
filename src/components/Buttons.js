import React from 'react';
import PropTypes from 'prop-types';

export const BlankButton = props => {
  const style = {
    border: 'none',
    backgroundColor: 'transparent',
    margin: '0',
    padding: '0',
    fontSize: '18px',
    boxShadow: 'none',
    cursor: 'pointer',
    textAlign: 'center'
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

BlankButton.propTypes = {
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};

BlankButton.defaultProps = {
  clickAction: () => null,
  dataObj: null
};

export const WhiteButton = props => {
  const style = {
    color: '#FFFFFA',
    border: '2px solid #FFFFFA',
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

WhiteButton.propTypes = {
  small: PropTypes.bool,
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};

WhiteButton.defaultProps = {
  small: true,
  clickAction: () => null,
  dataObj: null
};

export const BlackButton = props => {
  const style = {
    color: '#000103',
    border: '2px solid #000103',
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

BlackButton.propTypes = {
  small: PropTypes.bool,
  clickAction: PropTypes.func.isRequired,
  dataObj: PropTypes.object
};

BlackButton.defaultProps = {
  small: true,
  clickAction: () => null,
  dataObj: null
};

export const BlueButton = props => {
  const style = {
    color: '#2D5199',
    border: '2px solid #2D5199',
    backgroundColor: 'transparent',
    height: props.small ? '20px' : '50px',
    width: props.small ? '90px' : '120px',
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
  clickAction: () => null,
  dataObj: null
};

export default Button;
