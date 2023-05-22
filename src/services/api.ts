import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: false,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  // },
});
export default api;
