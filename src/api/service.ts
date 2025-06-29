import { LEAFLET_API } from '@constants/api';
import axios from 'axios';

export const apiService = axios.create({
  baseURL: LEAFLET_API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  },
});
