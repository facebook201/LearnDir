
#### JS的 循环
 * for循环
 * for in
 * forEach
 * for of

### for循环

```javascript
const arr = [
    { name: '张三', age: 23 },
    { name: '李四', age: 34 },
    { name: '王五', age: 45 },
    { name: '赵六', age: 56 }
];
for (let i, length = arr.length; i < length; i++) {
    // 循环操作
}
// for in
for (let i in arr) {
    // i 是数组的索引 也就是 0 1 2 3
}
```

**循环遍历的其实是对象的属性而不是数组但是它的顺序不确定输出的结果顺序与属性在对象中的顺序无关 也与字母顺序无关**

**Array 在 Javascript 中是一个对象， Array 的索引是属性名。事实上， Javascript 中的 “array” 有些误导性， Javascript 中的 Array 并不像大部分其他语言的数组。首先， Javascript 中的 Array 在内存上并不连续，其次， Array 的索引并不是指偏移量。实际上， Array 的索引也不是 Number 类型，而是 String 类型的。我们可以正确使用如 arr[0] 的写法的原因是语言可以自动将 Number 类型的 0 转换成 String 类型的 "0" 。所以，在 Javascript 中从来就没有 Array 的索引，而只有类似 "0" 、 "1" 等等的属性。有趣的是，每个 Array 对象都有一个 length 的属性，导致其表现地更像其他语言的数组。但为什么在遍历 Array 对象的时候没有输出 length 这一条属性呢？那是因为 for-in 只能遍历“可枚举的属性”， length 属于不可枚举属性，实际上， Array 对象还有许多其他不可枚举的属性。**



**还有 for循环会循环每一个元素 但是for in 只会遍历存在的实体 如果是不存在的undefined 稀疏数组 是不会遍历的**



#### forEach

foreach会遍历所有数组元素 传一个函数 函数有三个参数 数组元素 数组索引 元素组本身

下面跟forEach语法类似的函数 但是功能不同 返回值不同

- every: 循环在第一次 return false 后返回
- some: 循环在第一次 return true 后返回
- filter: 返回一个新的数组，该数组内的元素满足回调函数
- map: 将原数组中的元素处理后再返回
- reduce: 对数组中的元素依次处理，将上次处理结果作为下次处理的输入，最后得到最终结果。



### for of

* forEach 不能break 和 return
* for in 不仅能遍历数组元素 还会遍历自定义属性 甚至原型链上的属性都会被访问到 而且遍历数组元素的顺序可能是随机的

所以 上面的缺陷 我们需要改进原先for循环 但ES6不会破坏已经写好的JS代码

#### for of可以干什么

* 可以真确响应break continue return
* for of 循环不仅可以支持数组 还可以支持大多数类数组对象 DOM nodeList
* for of 循环支持字符串遍历 将字符串视为unicode字符来遍历
* for of 也支持 Map Set 对象

**for-of循环不支持普通对象但如果你想迭代一个对象的属性你可以用for-in 循环（这也是它的本职工作）**



副作用的数组循环使用 for of 遍历对象使用for in

如果想返回对象的属性值 Object.keys(obj) 返回可枚举的属性值 Object.getOwnPropertyNames(obj) 所有属性 包括不可枚举

