import axios from 'axios';

import env from '../../../environment';

export const fetchData = async () => {
  try {
    const products = (await axios.get(`${env.API_URL}skus`)).data;

    return products;
  } catch (err) {
    throw err;
  }
};

