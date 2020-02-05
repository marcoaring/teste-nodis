import axios from 'axios';

import env from '../../../environment';

export const fetchData = async (sku) => {
  try {
    const data = (await axios.get(`
      ${env.API_URL}skus/
      ${(sku) ? sku : ''}
    `)).data;

    return data;
  } catch (err) {
    return { 'error': true };
  }
};

