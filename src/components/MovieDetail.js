import React, { Component } from 'react';
import { Sidebar, SidebarLink } from './Sidebar.js';

const MovieDetail = props => {
  const product = props.dataObj;
  return (
    <div>
      <h3>{product.Title}</h3>
      <p>{product.Actors}</p>
      <img src={product.Poster} alt="cover thumbnail" />
      <h4>Description</h4>
      <p>{product.Plot}</p>
    </div>
  );
};

export default MovieDetail;
