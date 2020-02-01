import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Fonts from '../styles/fonts';
import theme from '../styles/theme';
import { Svgs } from '../components';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={ theme }>
          <>
            <GlobalStyle />
            <Fonts />
            <Svgs />
            <main>
              { children }
            </main>
          </>
        </ThemeProvider>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
