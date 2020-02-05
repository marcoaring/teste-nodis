import React, { useState, useEffect } from 'react';

import {
  SEO,
  Header,
  ProductDetail,
  Modal
} from '../components';

import { fetchData } from '../services/data';

export default function ProductPage({location}) {
  const [product, changeProduct] = useState({});
  const [sku, changeSku] = useState((location.state) ? location.state.sku : location.pathname.split('/').pop());
  const [showModal, changeShowModal] = useState(false);
  const [status, changeStatus] = useState(false);

  useEffect(() => {
    fetchData(sku).then((data) => {
      if (data.error) {
        changeShowModal(true);
        changeStatus(data);
      } else {
        changeProduct(data);
      }
    });
  }, []);

  return (
    <>
      { product.name && <SEO title={ product.name } /> }
      <Header />
      { Object.keys(product).length && <ProductDetail product={ product } /> }

      <Modal show={ showModal } status={ status } />
    </>
  );
}
