import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Search = styled.section`
  display: flex;
  align-items: center;
`;

export const Field = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.palette.white};
  color: ${(props) => props.theme.palette.white};
  font-size: 20px;
  height: 30px;
  margin-right: 30px;
  outline: none;
  transition: opacity .3s linear;

  ${ media.mobile`
    background-color: ${(props) => props.theme.palette.white};
    border-bottom: 3px solid ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.palette.primary};
    display: none;
    height: 100%;
    left: 0;
    padding: 5px 0 0 15px;
    position: absolute;
    top: 0;
    width: 100%;
  `}

  ${ media.tablet`
    opacity: 0;
    padding: 5px 0;
  `}

  ${ media.desktop`
    opacity: 0;
    padding: 5px 0;
  `}

  &.-active {
    ${ media.mobile`
      background-color: ${(props) => props.theme.palette.white};
      color: ${(props) => props.theme.palette.primary};
      display: block;
      height: 100%;
      left: 0;
      padding: 5px 0 0 15px;
      position: absolute;
      top: 0;
      width: 100%;
    `}

    ${ media.tablet`
      opacity: 1;
    `}

    ${ media.desktop`
      opacity: 1;
    `}
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;

  > svg {
    display: inline-block;
    fill: ${(props) => props.theme.palette.white};
    height: 30px;
    transition: fill 0.2s linear;
    width: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  &.-close {
    z-index: 2;

    > svg {
      ${ media.mobile`
        fill: ${(props) => props.theme.palette.primary};
      `}
    }
  }

  ${ media.mobile`
    margin-right: 15px;
  `}

  ${ media.tablet`
    margin-right: 15px;
  `}
`;
