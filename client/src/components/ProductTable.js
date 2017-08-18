import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  flexBasis: '640px',
  flexGrow: '1',
  padding: '0'
};

const ProductTable = props => {
  return (
    <div style={style}>
      {props.products.map(product =>
        <ProductCard
          key={product.item_id}
          id={product.item_id}
          name={product.product_name}
          price={product.price}
          addToCart={props.addToCart}
        />
      )}
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductTable;
