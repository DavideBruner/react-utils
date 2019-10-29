import axios, { AxiosInstance } from 'axios';

const apiService: AxiosInstance = axios.create({
  baseURL: process.env.API_URL
});

export default apiService;
