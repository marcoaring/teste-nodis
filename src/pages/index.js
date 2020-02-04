import React, { useState, useEffect } from 'react';

import {
  SEO,
  Header,
  SearchResult,
  Products
} from '../components';

import { fetchData } from '../services/data';

export default function HomePage() {
  const [products, changeProducts] = useState([]);
  const [search, changeSearch] = useState('');
  const [filteredProducts, changeFilteredProducts] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      changeProducts(data);
    });
  }, []);

  useEffect(() => {
    let filtered = [];
    filtered = products.filter((product) =>
      product.name.includes(search)
    );
    changeFilteredProducts(filtered);
  }, [search]);

  return (
    <>
      <SEO title="Home" />

      <Header changeSearch={ changeSearch } />

      { search && <SearchResult quantity={ filteredProducts.length } search={ search } /> }

      <Products products={
        (filteredProducts.length > 0 || search !== '') ?
          filteredProducts :
          products
      } />
    </>
  );
}
