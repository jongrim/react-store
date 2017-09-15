import React, { Component } from 'react';
import { Sidebar, SidebarLink } from './Sidebar.js';

const GameDetail = props => {
  const product = props.dataObj;
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} alt="cover thumbnail" />
      <h4>Description</h4>
      <p>{product.summary}</p>
    </div>
  );
};

export default GameDetail;