import React from 'react';

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
