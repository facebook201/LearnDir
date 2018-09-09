### Promise

promise 是ES6里面提供的一种解决异步函数的对象。



#### promise对象的特点

* 对象不受外界影响 对象代表一个异步操作。有三种状态: pending (进行中)、fulfilled 已成功 和 rejected 已失败。只有异步操作的结果 可以决定当前是哪一种状态 任何其他操作都无法改变这个状态。
* 一旦状态改变 就不会再变。



#### 基本用法

Promise 对象是一个构造函数。用来生成Promise实例。 创造一个Promise实例

```javascript
const promise = new Promise((resolve, reject) => {
    if (/* 异步成功 */) {
      resolve(value);    
	} else {
      reject(error);    
    }
});

```

















