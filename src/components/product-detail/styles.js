import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Product = styled.section`
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1160px;
  width: 100%;
`;

export const BoxImage = styled.div`
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  ${ media.mobile`
    margin-bottom: 30px;
    width: 100%;
  `}

  ${ media.tablet`
    width: 34%;
  `}

  ${ media.desktop`
    width: 34%;
  `}
`;

export const Image = styled.img`
`;

export const Infos = styled.div`
  ${ media.mobile`
    margin-bottom: 30px;
    width: 90%;
  `}

  ${ media.tablet`
    width: 60%;
  `}

  ${ media.desktop`
    width: 66%;
  `}
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.palette.textColor};
  font: 22px ${(props) => props.theme.fonts.fontRubik};
  margin-bottom: 15px;
`;

export const Description = styled.div`
  font: 14px ${(props) => props.theme.fonts.fontIBMRegular};
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.palette.primary};
  border: none;
  color: ${props => props.theme.palette.white};
  display: block;
  font-family: ${props => props.theme.fonts.fontIBMRegular};
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .3s linear;

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
    width: 100%;
  `}

  ${ media.tablet`
    font-size: 20px;
    padding: 7px;
    width: 50%;
  `}

  ${ media.desktop`
    font-size: 15px;
    padding: 7px;
    width: 30%;
  `}
`;

export const Text = styled.div`
  display: block;
  position: relative;
  z-index: 1;
`;

export const Datasheet = styled.ul`
  width: 100%;
`;

export const Data = styled.li`
`;

export const Highlight = styled.strong`
`;

export const Item = styled.span`
`;
