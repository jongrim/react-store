import React, { Component } from 'react';
import { Sidebar, SidebarLink } from './Sidebar.js';

const detailPaneStyle = {
  padding: '0 1em',
  overflow: 'auto'
};

const GameDetail = props => {
  const product = props.dataObj;
  return (
    <div style={detailPaneStyle}>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} alt="cover thumbnail" />
      <h4>Description</h4>
      <p>{product.summary}</p>
    </div>
  );
};

export default GameDetail;
