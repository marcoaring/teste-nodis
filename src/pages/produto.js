import React, { useState, useEffect } from 'react';

import {
  SEO,
  Header,
  SearchResult,
  Products
} from '../components';

export default function ProductPage({location}) {
  return (
    <>
      <SEO title="Produto" />

      to aqui - { location.state.sku }

    </>
  );
}
