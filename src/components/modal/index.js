import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import * as S from './styles';

export default function Modal({ show, status }) {
  const texts = {
    error: {
      title: 'Ops! Ocorreu um erro no nosso sistema.',
      description: 'Um erro ocorreu ao requisitar os produtos. Aguarde um pouco ou entre em contato com o nosso setor de Tecnologia.'
    },
    success: {
      title: 'Parabéns! Compra realizada com sucesso!',
      description: 'Sua compra foi realizada com sucesso. Você receberá as informações por e-mail.'
    }
  };

  const onClose = () => {
    navigate('/');
  };

  return(
    <S.Modal className={ (status.error) ? '-error' : '-success' }>
      <Rodal
        animation='zoom'
        closeOnEsc={ true }
        onClose={ () => onClose() }
        visible={ show }
        customStyles={{
          borderRadius: '10px'
        }}
        customMaskStyles={{
          background: 'rgba(0, 0, 0, .9)'
        }}
      >
        <S.ModalBody>
          <S.BodyTitle>
            { (status.error) ? texts.error.title : texts.success.title }
          </S.BodyTitle>
          <S.BodyDescription>
            { (status.error) ? texts.error.description : texts.success.description }
          </S.BodyDescription>
        </S.ModalBody>
      </Rodal>
    </S.Modal>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  status: PropTypes.object.isRequired
};
