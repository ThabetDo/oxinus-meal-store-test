import axios, {AxiosInstance} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;