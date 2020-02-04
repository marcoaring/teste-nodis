import React, { useState, useEffect } from 'react';

import {
  SEO,
  Header,
  ProductDetail
} from '../components';

import { fetchData } from '../services/data';

export default function ProductPage({location}) {
  const [product, changeProduct] = useState([]);

  useEffect(() => {
    fetchData(location.state.sku).then((data) => {
      changeProduct(data);
    });
  }, []);

  return (
    <>
      <SEO title={ product.name } />
      <Header />
      <ProductDetail product={ product } />
    </>
  );
}
