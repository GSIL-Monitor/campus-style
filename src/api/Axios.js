/**
 * axios的封装
 */
import axios from 'axios';
import { message } from 'antd';

// 创建axios实例
const axiosInstance = axios.create({
  // timeout: 3000,
  //  baseURL:'',
  withCredentials: true,
});

// request拦截器
axiosInstance.interceptors.request.use(config => config, error => Promise.reject(error));

// response拦截器
axiosInstance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
}, (error) => {
  if (error && error.response) {
    const { status, statusText } = error.response;
    message.error(`访问出错:${status} ${statusText}`, 3);
  }
  Promise.reject(error);
});

export default axiosInstance;
