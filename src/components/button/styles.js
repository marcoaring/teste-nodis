import styled from 'styled-components';
import media from '../../styles/media-queries';

export const ContentButton = styled.div`
`;

export const Button = styled.button`
  background-color: ${props => props.theme.palette.primary};
  border: none;
  color: ${props => props.theme.palette.white};
  font-family: ${props => props.theme.fonts.fontIBMRegular};
  outline: none;
  position: relative;
  text-transform: uppercase;
  transition: all .3s linear;
  width: 100%;

  &:after {
    background-color: ${props => props.theme.palette.primaryHover};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: width .2s linear;
    width: 0;
  }

  &:hover {
    cursor: pointer;

    &:after {
      width: 100%;
    }
  }

  ${ media.mobile`
    font-size: 20px;
    padding: 10px;
  `}

  ${ media.tablet`
    font-size: 20px;
    padding: 7px;
  `}

  ${ media.desktop`
    font-size: 15px;
    padding: 7px;
  `}
`;

export const Text = styled.span`
  display: block;
  position: relative;
  z-index: 1;
`;
