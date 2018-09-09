#### exec

在一个指定字符串中执行一个匹配返回一个结果数组或者 null。**如果只是判断是否匹配 可以使用test。或者 String.search() 方法**。

RegObj.exec(str); 

如果匹配成功 exec() 方法返回一个数组。并更新正则表达式对象的属性。返回的数组将完全匹配成功的文本作为第一项 将正则括号里匹配成功的作为数组元素填充到后面。

```javascript
let reg = /quick\s(brown).+?(jumps)/ig;
let ret = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

ret; // ['Quick Brown Fox Jumps', 'Brown', 'Jumps']
```



#### test

正则表达式与指定字符串匹配 是否匹配成功 成功返回 true 否则返回 false。



