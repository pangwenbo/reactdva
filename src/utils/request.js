import axios from 'axios';
import { getToken } from './auth';
import { message } from 'antd';
// 添加请求拦截器
axios.interceptors.request.use(
        function (config) {
                // 在发送请求之前做些什么
                config.headers['token'] = getToken();
                config.headers['clientId'] = 'default';
                return config;
        },
        function (error) {
                // 对请求错误做些什么
                return Promise.reject(error);
        }
);

// 添加响应拦截器
axios.interceptors.response.use(
        function (response) {
                if (response.status === 200) {
                        if (response.data.errorCode !== 0) {
                                message.error(response.data.errorMsg);
                        }
                } else if (response.status === 401) {
                        message.error(response.data.errorMsg);
                        localStorage.removeItem('token');
                } else {
                        message.error('网络错误');
                }
                return response.data;
        },
        function (error) {
                // 对响应错误做点什么
                message.info('网络错误');
        }
);
export default axios;
