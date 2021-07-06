import axios, { AxiosInstance } from 'axios';

const fetch = axios.create({
  baseURL: '',
  timeout: 20000,
});


export { fetch };
