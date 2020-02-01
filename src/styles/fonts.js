/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Rubik-Bold';
    src: url('/fonts/Rubik-Bold.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'IBMPlexSans-Regular';
    src: url('/fonts/IBMPlexSans-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'IBMPlexSans-Bold';
    src: url('/fonts/IBMPlexSans-Bold.ttf') format('truetype');
    font-display: fallback;
  }
`;

export default Fonts;
