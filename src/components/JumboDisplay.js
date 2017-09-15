import React from 'react';
import PropTypes from 'prop-types';

const JumboDisplay = props => {
  const jumboDisplay = {
    flex: '1 1 240px',
    padding: '2em 4em',
    backgroundColor: props.bgColor || '#712F79',
    color: props.color || '#F5F5F5'
  };
  return <div style={jumboDisplay}>{props.children}</div>;
};

JumboDisplay.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string
};

export default JumboDisplay;
