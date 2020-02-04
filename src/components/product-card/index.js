import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Price from '../price';

import * as S from './styles';

export default function ProductCard({ product }) {
  return (
    <S.Product>
      <S.Image src={ product.imageUrl } alt={ product.name } />
      <S.Title>{ product.name }</S.Title>

      <Price promotionalPrice={ product.promotionalPrice } price={ product.salePrice } />

      <Link
        to={`/produto/${product.id}`}
        state={{ 'sku': product.id }}
        className='button'
      >
        <S.Text>Compre agora</S.Text>
      </Link>

    </S.Product>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
