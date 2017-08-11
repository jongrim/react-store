import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/utils';

const ProductTable = props => {
  return (
    <div>
      {props.products.map(product =>
        <div key={product.item_id}>
          <h3>
            {product.product_name}
          </h3>
          <p>
            {formatPrice(product.price)}
          </p>
        </div>
      )}
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductTable;
