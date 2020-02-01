import React from 'react';
import PropTypes from 'prop-types';

import Search from '../search';

import * as S from './styles';

export default function Header({ changeSearch }) {
  return (
    <S.Header>
      <S.Container>
        <S.Logo>nodis</S.Logo>

        <Search changeSearch={ changeSearch } />
      </S.Container>
    </S.Header>
  );
}

Header.propTypes = {
  changeSearch: PropTypes.func.isRequired
};
