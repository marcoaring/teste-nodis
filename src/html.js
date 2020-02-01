/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function HTML(props) {
  return (
    <html { ...props.htmlAttributes }>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#1c9956" />
        <meta name="msapplication-navbutton-color" content="#1c9956" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1c9956" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="favicon.ico"/>
        { props.headComponents }
      </head>
      <body { ...props.bodyAttributes }>
        { props.preBodyComponents }
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        { props.postBodyComponents }
      </body>
    </html>
  );
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
