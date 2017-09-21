import React from 'react';
import PropTypes from 'prop-types';

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

MovieDetail.propTypes = {
  dataObj: PropTypes.object.isRequired
};

export default MovieDetail;
