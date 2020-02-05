import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Price from '../price';
import Modal from '../modal';

import * as S from './styles';

export default function ProductDetail({ product }) {
  const [showModal, changeShowModal] = useState(false);
  const [status, changeStatus] = useState({});

  const sendProduct = () => {
    changeShowModal(true);
    changeStatus({'error':false});
  };

  return (
    <S.Product>
      <S.BoxImage>
        <S.Image src={ product.imageUrl } alt={ product.name } />
      </S.BoxImage>

      <S.Infos>
        <S.Title>{ product.name }</S.Title>

        <Price promotionalPrice={ product.promotionalPrice } price={ product.salePrice } />

        <S.Description dangerouslySetInnerHTML={{ __html: product.description }}></S.Description>

        <S.Button onClick={ () => sendProduct() }>
          <S.Text>Comprar</S.Text>
        </S.Button>
      </S.Infos>

      <Modal show={ showModal } status={ status } />
    </S.Product>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};
