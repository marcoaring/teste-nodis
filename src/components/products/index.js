import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../product-card';

import * as S from './styles';

export default function Products({ products }) {
  return (
    <S.Products>
      {products.map((product, index) => {
        return <ProductCard product={ product } key={ index } />;
      })}
    </S.Products>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};
