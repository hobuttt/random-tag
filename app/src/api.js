import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return response.error;
  }
);
// axios.defaults.baseURL = 'https://api.wotblitz.ru/wotb';
// export default () => {
//   return axios.create({
//   baseURL: 'http://localhost:3001'
//   })
// }
