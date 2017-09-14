import React from 'react';

const BookDetail = props => {
  const product = props.dataObj;
  return (
    <div>
      <h3>{product.volumeInfo.title}</h3>
      {product.volumeInfo.authors.map((author, i) => <p key={i}>{author}</p>)}
      <img
        src={product.volumeInfo.imageLinks.thumbnail}
        alt="cover thumbnail"
      />
      <h4>Description</h4>
      <p>{product.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
