/**
 * 因为axios 是项目中经常会使用的 http请求 所以结合promise来学习一下
 * 主要是API的方法
 */

// dispatch a request

Axios.prototype.request = function request(config) {
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  } else {
    config = config || {};
  }

  // 将传入的配置与默认配置合并
  config = mergeConfig(this.defaults, config);

  // 设置请求方法
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // 请求拦截 发送请求 响应拦截
}