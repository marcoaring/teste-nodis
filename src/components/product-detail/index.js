import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function ProductDetail({ product }) {
  return (
    <S.Product>
      { product.name }
    </S.Product>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.array.isRequired
};
