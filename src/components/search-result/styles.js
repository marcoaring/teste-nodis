import styled from 'styled-components';

export const SearchResult = styled.section`
  font: 23px ${(props) => props.theme.fonts.fontIBMRegular};
  margin: 0 auto 30px;
  max-width: 1160px;
  width: 100%;
`;

export const Highlight = styled.strong`
  font: 25px ${(props) => props.theme.fonts.fontRubik};
`;
