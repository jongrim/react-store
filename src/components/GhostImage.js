import React from 'react';

const style = {
  height: '140px',
  width: '100px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'linear-gradient(45deg, #cccccc, #e5e5e5)',
  backgroundSize: '100% 100%',
  backgroundPosition: '0 0',
  margin: '1em'
};

const GhostImage = () => {
  return <div style={style} />;
};

export default GhostImage;
