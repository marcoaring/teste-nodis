import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

import Price from '../price';
import Button from '../button';

import * as S from './styles';

export default function ProductCard({ product }) {
  const buyProduct = (sku) => {
    navigate(`/produto/${sku}`);
  };

  return (
    <S.Product>
      <S.Image src={ product.imageUrl } alt={ product.name } />
      <S.Title>{ product.name }</S.Title>

      <Price promotionalPrice={ product.promotionalPrice } price={ product.salePrice } />

      <Button callback={() => buyProduct(product.id)} label='Compre agora' />
    </S.Product>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
