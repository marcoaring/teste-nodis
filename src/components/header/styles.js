import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Header = styled.header`
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  margin-bottom: 30px;
  position: relative;
`;

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1160px;
  width: 100%;
`;

export const Logo = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontRubik};

  ${ media.mobile`
    font-size: 35px;
    padding: 5px 15px;
  `}

  ${ media.tablet`
    font-size: 45px;
    padding: 5px 15px;
  `}

  ${ media.desktop`
    font-size: 45px;
    padding: 5px 0;
  `}
`;
