### Event Loop 原理



javascript 作为一门单线程、非阻塞的脚本。是为了跟浏览器实现交互

> 单线程 

**有且只有一个主线程来处理所有的任务**  主要是因为处理浏览器DOM节点时候不发生混乱。降低复杂度 就只用一个主线程来执行代码。



> 非阻塞

先来熟悉两个概念 **执行栈 和 事件队列** 

#### 执行栈

当调用一个方法的时候 js会生成一个与这个方法对应的执行环境。也叫执行上下文。 这个环境有这个方法的私有作用域 参数 this对象等。同一时间只能执行一个方法 当一系列方法被依次调用的时候 js会解析这些方法 把其中的同步任务按照执行顺序排队到一个地方 这个地方就是 **执行栈**



#### 事件队列

当发出ajax请求的时候。 不会立即返回结果 主线程会把这个异步任务挂到起来 继续执行执行栈的其他任务。等异步结果返回之后 js会将这个异步任务按照执行顺序加到与执行栈不同的另一个队列 也就是事件队列。

来自知乎饿了么前端

![border](https://pic1.zhimg.com/80/v2-f8f6d06b689a6230f30e28b64ad5b583_hd.jpg)



1 主线程运行的时候会生成堆 和 栈

2 js从上到下 把同步任务按照执行顺序排到执行栈中

3 当ajax setTimeout 此类异步任务时 会先执行栈中的任务 **等异步任务结果返回 再按照执行顺序排对事件队列** 

4 主线程会先将执行栈中的同步任务清空 然后检查事件队列中是否有任务 如果有 就将第一个事件对应的回调推到执行栈中执行。 如果此过程中遇到异步 继续将这个异步任务排队到事件队列中

5 主线程每次将执行栈清空之后 会去事件队列中检查是否有任务 有就取出一个推到执行栈中执行。 这个过程是循环往复的 又称为 **Event Loop事件循环**



```javascript
 console.log(1);

 setTimeout(() => {
   console.log(2);
   setTimeout(() => {
     console.log(3);
     setTimeout(() => {
       console.log(4);
     }, 0) ;
   }, 0) ;
 }, 0);

 setTimeout(() => {
   console.log(5);
   setTimeout(() => {
     console.log(6);
   }, 0);
 }, 0);

 console.log('ok');
```

![border](https://pic1.zhimg.com/v2-251a5467555638c710eca5b2aa17839d_b.gif)



#### 宏任务和微任务

异步任务之间也有不同。执行优先级也有区别。宏任务（macro task）和 微任务（micro task）

宏任务: setTimeout setInterval setImmediate I/O UI交互事件

微任务: process.nextTick Promise.then 

**当主线程执行完之后 首先会去微任务队列里面找 之后再检查宏任务队列。**

```javascript
console.log(1);
    
 setTimeout(() => {
   console.log('setTimeout');
 }, 0);

 let promise = new Promise(resolve => {
   console.log(3);
   resolve();
 }).then(data => {
   console.log(100);
 }).then(data => {
   console.log(200);
 });
    
 console.log(2);
```



![border](https://pic3.zhimg.com/v2-01ab036dd9c2b0aa3a2b41a2b451ad16_b.gif)



Node的Event Loop

Node 是基于Chrome V8 引擎的javascript运行环境。我们写的js代码会交给V8引擎进行处理 解析后代码调用的Node API 。

Node和 浏览器node环境的区别。

浏览器环境每次执行一个微任务 再去检查宏任务

node会清空当前所处阶段的队列 即执行所有的task 再去检查微任务。