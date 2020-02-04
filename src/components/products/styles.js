import styled from 'styled-components';
import media from '../../styles/media-queries';

export const Products = styled.section`
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1160px;
  width: 100%;
`;

export const Warning = styled.p`
  font: 18px ${(props) => props.theme.fonts.fontIBMRegular};
  text-align: center;
  text-transform: uppercase;
`;
