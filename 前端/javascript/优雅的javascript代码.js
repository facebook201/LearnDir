// 数组去重
 const formatArray = arr => [...new Set(arr)];

// 数组合并
const newArr = [...arr, 'value'];

// 对象浅拷贝
const newObj = {...obj};

// 解构赋值
const person = {name: 'zhansgan', age: 12};
const {name, age} = person;


// 对象配置法 
// 函数内部有条件判断
const foo = v => {
  if (v === 'xxx') {
    //...
  } else if (v === 'ccc') {
    //...
  }
  // ...
}

const cfg = {
  name: 'zhangsan',
  age: 20,
  height: 180
};

const foo = v => cfg[v]

// 数组配置法
const rightValue = ['hello', 'world', 'blabla'];
if (rightValue.includes[value]) {
  // ....
}

// 3 对象属性变量应用
const actionName = isMember ? 'getMemberInfo' : 'getCommonUserInfo';
let res = await actions[actionName](params);

// 4 类型转换
let str = '123';
let num = +str; // 123

let str = `${num}`;

// 5-1 使用局部变量替代引用类型查找

let obj = {
  name: []
};

let age = obj.name; // 当做局部变量使用

// 5-2 删除多个对象属性时先使属性为null
// 删除属性时 js引擎会去查找该属性的值是否是其他对象的引用 所以删除前赋值null 可以减少hs引擎的检测过程

let obj = {
  person: {
    man: {
      age: 12
    }
  }
};

obj.person = null;
delete obj.person;

var foo = {n: 1};
(function(foo){
  console.log(foo.n);
  foo.n = 3;
  console.log(foo.n);
})(foo);

console.log(foo.n);