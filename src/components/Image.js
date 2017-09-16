import React from 'react';
import PropTypes from 'prop-types';

const style = {
  height: '140px',
  margin: '1em',
  boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.25)'
};

const Image = props => {
  return <img src={props.imgUrl} alt={props.name} style={style} />;
};

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Image;
