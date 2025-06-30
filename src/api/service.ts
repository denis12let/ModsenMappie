import axios from 'axios';

import { LEAFLET_API } from '@constants';

export const apiService = axios.create({
  baseURL: LEAFLET_API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  },
});
