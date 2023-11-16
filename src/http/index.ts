import axios from 'axios'
import axiosConfig from '@/config/index'
console.log(axiosConfig);

const http = axios.create({
    baseURL: 'http://localhost:12666',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
export default http