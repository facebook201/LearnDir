const arr = [
    { name: '张三', age: 13 },
    { name: '李四', age: 24 },
    { name: '王五', age: 24 },
    { name: '赵六', age: 46 }
];

// find 返回数组中第一个满足函数的值 没有就返回undefind 不会改变原数组
// 而且弥补indexOf的补足 可以发现NaN
const ret = arr.find(ele => ele.age === 24);

// 返回满足条件的第一个值
[1, 5, 9, 10].find(ele => {
    return ele > 5;
});

// 

console.log(ret);