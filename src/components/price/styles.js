import styled from 'styled-components';

export const OldPrice = styled.span`
  color: ${(props) => props.theme.palette.textColor};
  display: block;
  font: 12px ${(props) => props.theme.fonts.fontIBMBold};
  min-height: 15px;
  text-decoration: line-through;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.palette.textColor};
  display: block;
  font: 20px ${(props) => props.theme.fonts.fontIBMBold};
  margin-bottom: 15px;
`;
