import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';

import * as S from './styles';

export default function Search({ changeSearch }) {
  const [showSearch, changeShowSearch] = useState(false);

  return (
    <S.Search>
      <S.Field
        type='text'
        name='search-field'
        placeholder='Pesquisar'
        onChange={e => changeSearch(e.target.value)}
        className={(showSearch) ? '-active' : ''} />
      <S.Button className={(showSearch) ? '-close' : '-search'} onClick={ () => changeShowSearch(!showSearch) }>
        <Icon name={(showSearch) ? 'icon-close' : 'icon-search'} />
      </S.Button>
    </S.Search>
  );
}

Search.propTypes = {
  changeSearch: PropTypes.func.isRequired
};
