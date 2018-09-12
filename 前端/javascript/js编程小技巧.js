/**
 * 1 取随机字符串
 */
Math.random().toString(16).substring(2); // 1295f601c3b47
Math.random().toString(36).substring(2); // e7jtkedhomf

// 2 另一种undefined

undefined === void 0;

// 3 优雅的取整数
let a = 2.33;

let b = ~~a;    // 2
let c = a | 0;  // 2
let d = a >> 0; // 2

/**
 * 4 千位金钱格式化 正则 和 toLocaleString()
 */
'money'.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

(1233421312).toLocaleString(); // 也可以实现


// 5 强制类型装换 
let a = '1';
let b = +a;

// 6 短路表达式
let a = b && 1;
//等价于
if (b) {
  a = 1;
} else {
  a = b;
}

let a = b || 1;
if (b) {
  a = b;
} else {
  a = 1;
}


// 7 扩展运算符
let arr = [1, 233, 012312, -12312, 345];
Math.max(...arr);