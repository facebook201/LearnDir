/**
 * 原型继承问题
 */

function A() {
  this.do = function() { return 'bar'; }
}

A.prototype = function() {
  this.do = function() { return 'foo'; }
}

var a = new A().do();
console.log(a);

/**
 * 这里其实是考察 如果实例对象上没有的方法才会去原型上找 而且注意这里的原型写的是一个方法 不是对象 
 * 即使实例上没有 发现原型上没有do方法的 会报错
 */

// 注意这里 如果实例写在重写原型对象之前 会切断实例和原型的联系 如下代码
// 即使重写了constructor 也有do方法 还是访问不到

function A() {
  this.do1 = function() { return 'bar'; }
}

var a = new A().do();

A.prototype = {
  constructor: A,
  do() { return 'foo'; }
}
