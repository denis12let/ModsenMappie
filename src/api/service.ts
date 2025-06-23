import { LEAFLET_API } from '@constants/api';
import axios from 'axios';

// import { BASE_URL, ACCESS_KEY } from '@constants/api';

export const apiService = axios.create({
  baseURL: LEAFLET_API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

// apiService.interceptors.request.use((config) => {
//   config.params = {
//     ...config.params,
//     client_id: ACCESS_KEY,
//   };
//   return config;
// });
