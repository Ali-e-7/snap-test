import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://snappfood.ir/mobile/v3/',
  timeout: 8000,
//   headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

export default instance;