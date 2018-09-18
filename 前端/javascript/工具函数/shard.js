/* @flow */

/**
 shared 目录下的工具方法
 */

// 是否undefined 传任何值 返回boolean值
export function isUndef(v: any): boolean {
  return v === undefined || v === null;
}

// 是否定义
export function isDef(v: any): boolean {
  return v !== undefined && v !== null;
}

// 检查是不是原始类型值
export function isPrimitive(value :any): boolean {
  return typeof value === 'string' || typeof value === 'number';
}

// 判断是不是对象
export function isObject(obj: mixed): boolean {
  // !== null 排除了null 因为typeof null 也是对象
  return obj !== null && typeof obj === 'object';
}

const _toString = Object.prototype.toString;

// 对对象类型检查 只有是纯的javascript对象时候 才返回true
export function isPlainObject(obj: any): boolean {
  return _toString.call(obj) === '[object Object]';
}

// 将val转化成字符串
export function toString(val: any): string {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val);
}

// 将字符串转为数字
export function toNumber(val: string): number | string {
  const n = parseFloat(val);
  // 如果转换失败 就返回原值
  return isNaN(n) ? val : n;
}
  
// 根据str 得到 fn(str)的结果。但是这个结果会给闭包的cache缓存起来 下一次如果是同样的str 不需要fn(str)重新计算 而是直接得到结果
export function cached<F: Function> (fn: F): F {
  const cache = Object.create(null);
  return (function cachedFn(str: string) {
    let hit = cache[str];
    return hit || (cache[str] = fn(str)); 
  });
}

// 连字符转换 a-bb-cc  aBbCc
export const camelize = cached((str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
});

// 首字母大写 Capitalize a string
export const Capitalize = ca

// 把一个对象的属性混合到另一个对象里面 返回被混合的对象
export function extend(to: object, _from: object): object {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to;
}

// 深拷贝函数
export function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  const keys = Object.keys(obj);

  return keys.reduce((ret, cur) => {
    const val = obj[cur];
    if (typeof val === 'object') {
      return {
        ...ret,
        [cur]: deepCopy(val)
      };
    }
    return {
      ...ret,
      [cur]: val
    };
  }, {}); 
}

