// charAt 从字符串中返回指定的字符
function normalizeUppCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

// charCodeAt 返回0-65535之间的整数
'ABC'.charCodeAt(0); // A 返回65
'aBC'.charCodeAt(0); // a 返回97

/** 
 * 举个实际案例 返回一个有序列表 按照字母排序 
 */
const HOME_NAME = '热门'; // 特制的数据

// 后台返回的数据 没有排序 现在我们来排序
const map = {
    ab: { title: 'abc', data: {} },
    ab1: { title: 'bc', data: {} },
    ab3: { title: '热门', data: {} },
    ab5: { title: 'Abc', data: {} },
    ab7: { title: 'abc', data: {} },
    ab0: { title: '热门', data: {} },
    ab9: { title: 'sbc', data: {} },
    ab11: { title: '热门', data: {} },
    abc: { title: 'jbc', data: {} },
    adb: { title: '热门', data: {} },
    apc: { title: 'abc', data: {} },
    jungle: { title: '热门', data: {} }
};

function sortMap(map) {
    let hot = []; // 热门数据 放在前面
    let ret = []; // 其他数据 

    for (let k in map) {
        let val = map(k);
        if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
        } else if (val.title === HOME_NAME) {
            hot.push(val);
        }
    }

    // 排序 使用charCodeAt
    ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
    })
    return hot.concat(ret);
}

// includes 判断字符是否在某个字符串里面 返回 true 或者 false
str.includes(searchString); // 

'hello'.includes('ll'); // 

// slice(start, end) 提取字符串中的一部分 返回新的字符串 不会修改原来的字符串 起始位置到结束位置 支持负值
let string = 'hello wolrd';
string.slice(6); // world 包括起始位置

// substr(start, length) 提取字符串的一部分 从起始位置开始 提取字符数
string.substr(0, 5); // hello

// substring(startlength, length) length
string.substring(4, 7); // o w


// 重点方法 字符串匹配方法
// match 会匹配到表达式 返回一个数组 之后是用圆括号捕获的分组结果
// 如果没有使用g全局 标志 返回的跟exec 一样 包含了g的标志 返回匹配的对象 不会返回分组结果

// search 返回正则表达式首次匹配到的位置 如果匹配失败就返回 -1 简单来说匹配不成功 返回-1

// replace 非常有用的方法
// 返回一个有替换值替换一些或所有匹配的模式后的先字符串 模式可以是一个正则表达式或者 字符串 替换值可以是字符串或者回调函数

string.replace(reg | str, str | callback);
let string = 'hello world';
let ret = string.replace(/l/ig, 'a'); // heaao worad

// 回调函数匹配
let str = 'my name is syoo, What is your name?';
let ret = str.replace(/\d\w{4}\b/g, match => {
    // 把匹配到的 经过一系列操作得到想要的结果
    return match.toUpperCase();
});

// my Name is syoo, What is Your name?

// 分组匹配 例如 background-color 变为 backgroundColor
// 匹配到 -c 然后将第一个分组匹配到的c 变为大写 C 最后组合起来就是backgroundColor
'background-color'.replace(/-(\w)/g, (match, p) => {
    return p.toUpperCase();
});

//