import React from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../services/utils';

import * as S from './styles';

export default function Price({ promotionalPrice, price }) {
  return (
    <>
      <S.OldPrice>{
        (parseInt(promotionalPrice) > parseInt(price)) ?
          formatMoney(promotionalPrice) :
          '' }
      </S.OldPrice>

      <S.Price>{ formatMoney(price) }</S.Price>
    </>
  );
}

Price.propTypes = {
  promotionalPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
