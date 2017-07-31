import React from 'react';
import PropTypes from 'prop-types';

const ProductTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Department Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(product =>
          <tr key={product.item_id}>
            <td>
              {product.item_id}
            </td>
            <td>
              {product.product_name}
            </td>
            <td>
              {product.department_name}
            </td>
            <td>
              {product.price}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductTable;
