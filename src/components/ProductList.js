import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, No products matched your search
      </h5>
    );
  }
  return grid_view ? (
    <GridView all_products={products} />
  ) : (
    <ListView all_products={products} />
  );
};

export default ProductList;
