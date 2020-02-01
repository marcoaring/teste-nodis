import React, { useState, useEffect } from 'react';

import {
  SEO,
  Header,
  Products
} from '../components';

import { fetchData } from '../services/data';

export default function HomePage() {
  const [products, changeProducts] = useState([]);
  const [search, changeSearch] = useState('');

  useEffect(() => {
    fetchData().then((data) => {
      changeProducts(data);
    });
  }, []);

  return (
    <>
      <SEO title="Home" />

      <Header changeSearch={ changeSearch } />

      <Products products={ products } />
    </>
  );
}
