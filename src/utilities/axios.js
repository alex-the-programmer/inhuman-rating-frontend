import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:3000', // todo repplace with ENV
});

export default axiosInstance;