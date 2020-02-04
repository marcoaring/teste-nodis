import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Search from '../search';

import * as S from './styles';

export default function Header({ changeSearch }) {
  return (
    <S.Header>
      <S.Container>
        <Link to='/'>
          <S.Logo>nodis</S.Logo>
        </Link>

        { changeSearch && <Search changeSearch={ changeSearch } /> }
      </S.Container>
    </S.Header>
  );
}

Header.propTypes = {
  changeSearch: PropTypes.func
};
