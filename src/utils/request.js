import axios from 'axios';
import { Message } from 'view-design';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 2000
});

/*
* request拦截器： 在发送请求之前对请求体进行加工
* */
service.interceptors.request.use(
  config => {
    config.headers['If-Modified-Since'] = 0; // 解决IE GET请求缓存的问题
    config.headers['X-Channel'] = 'WEB'; // 用于上报访问渠道
    config.headers['X-Agent'] = window.navigator && window.navigator.userAgent; // 用于上报客户端设备信息
    return config;
  }, error => {
    console.log('err' + error);
    Promise.reject(error);
  }
);

/*
*   response 拦截器： 对接收后台返回的数据进行加工操作
* */
service.interceptors.response.use(
  response => {
    // todo 如果有返回token，将token储存在本地

    const code = response.status;
    if (code === 200) {
      return Promise.resolve(response.data);
    } else {
      if (response.headers && response.headers['x-error-code']) {
        // 出现业务错误
        Message.error({
          content: response.data.msg,
          duration: 5 * 1000
        });
      }
      return Promise.reject(response);
    }
  },
  error => {
    console.log('err' + error)
  }
);

export default service;
