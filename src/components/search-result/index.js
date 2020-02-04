import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function SearchResult({ quantity, search }) {
  return (
    <S.SearchResult>
      Foram encontrados
      <S.Highlight> { quantity } </S.Highlight>
      resultados para
      <S.Highlight> { search }</S.Highlight>.
    </S.SearchResult>
  );
}

SearchResult.propTypes = {
  quantity: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired
};
