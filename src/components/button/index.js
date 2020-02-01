import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ callback, label }) {
  return (
    <S.ContentButton>
      <S.Button
        type='button'
        onClick={ callback }>
        <S.Text>{ label }</S.Text>
      </S.Button>
    </S.ContentButton>
  );
}

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
