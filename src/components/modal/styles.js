import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Modal = styled.div`
  .rodal-dialog {
    align-items: center;
    background-color: ${props => props.theme.palette.white};
    display: flex;
    justify-content: center;
    padding: 0 15px 15px;

    .rodal-close {
      height: 21px;
      right: 11px;
      top: 11px;
      width: 21px;

      &:before, &:after {
        border-radius: inherit;
        height: 5px;
        transition: all .2s linear;
      }

      &:hover {
        &:before, &:after {
          background-color: ${props => props.theme.palette.textColor};
        }
      }
    }

    ${ media.mobile`
      height: 60% !important;
      width: 94% !important;
    `}
  }

  &.-error {
    .rodal-dialog {
      color: ${props => props.theme.palette.error};

      .rodal-close {
        &:before, &:after {
          background-color: ${props => props.theme.palette.error};
        }
      }
    }
  }

  &.-success {
    .rodal-dialog {
      color: ${props => props.theme.palette.primary};

      .rodal-close {
        &:before, &:after {
          background-color: ${props => props.theme.palette.primary};
        }
      }
    }
  }
`;

export const ModalBody = styled.div`
`;

export const BodyTitle = styled.h3`
  font: 28px ${props => props.theme.fonts.fontRubik};
  margin: 40px 0;
  text-align: center;
`;

export const BodyDescription = styled.p`
  font: 17px ${props => props.theme.fonts.fontIBMRegular};
  text-align: center;
`;
