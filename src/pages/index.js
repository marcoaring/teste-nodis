import React, { useState, useEffect } from 'react';

import {
  SEO,
} from '../components';

import { fetchData } from '../services/data';

export default function HomePage() {
  const [products, changeProducts] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      changeProducts(data);
    });

  }, []);

  return (
    <>
      <SEO title="Home" />
    </>
  );
}
