import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Product = styled.div`
  background: ${(props) => props.theme.palette.white};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  padding: 15px;

  ${ media.mobile`
    margin: 0 3% 3%;
    width: 94%;
  `}

  ${ media.tablet`
    margin: 0px 1% 3%;
    width: 48%;
  `}

  ${ media.desktop`
    margin: 0px 1% 3%;
    width: 23%;
  `}
`;

export const Image = styled.img`
  display: block;
  width: auto;
  margin: 0 auto 15px;
  max-height: 80px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.palette.textColor};
  font-family: ${(props) => props.theme.fonts.fontIBMRegular};
  height: 2.4em;
  margin-bottom: 15px;

  ${ media.mobile`
    font-size: 18px;
  `}

  ${ media.tablet`
    font-size: 16px;
    line-height: 21px;
  `}

  ${ media.desktop`
    font-size: 14px;
    line-height: 17px;
  `}
`;
