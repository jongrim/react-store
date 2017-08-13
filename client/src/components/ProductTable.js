import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../css/ProductTable.css';

const ProductTable = props => {
  return (
    <div className="product-container">
      {props.products.map(product =>
        <ProductCard key={product.item_id} id={product.item_id} name={product.product_name} price={product.price} />
      )}
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductTable;
