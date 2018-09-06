/**
 * axios 源码照着敲
 * created by syo 2018/7/21
 */

// axios配置
axios.defaults.timeout = 4000; // 超时时间
axios.defaults.baseURL = 'http://localhost:4000/api/v1/'; // 调用数据接口

// 拦截器的使用 分为请求拦截 和 响应拦截
axios.interceptors.request.use(config => {
    // 请求前的操作
    const token = sessionStorage.getItem('token');
    config.data = JSON.stringify(config.data);
    config.headers = {
        'Content-Type': 'application/json' // 设置请求头 兼容IE
    };
    if (token) {
        config.headers.Authorization = 'Token' + token;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截器
axois.interceptor.response.use(response => {
    // 这个是跟后台约定的状态码
    if (response.status === 401) {
        router.push({
            path: '/login'
        });
    }
}, err => {
    return Promise.reject(err);
});

export default axios;

// fetch 请求方法