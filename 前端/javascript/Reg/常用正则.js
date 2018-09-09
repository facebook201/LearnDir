 /**
  * 常用的正则表达式
  * created by syo 2017/08/26
  */


 var reg = {
     saveTwoDecimal: /^((?:0)|(?:[1-9]\d*))(?:\.\d{1,2})?$/, // 保留输入金额 12 0.1 0.12 不超过两位小数

     saveOnePsd: /^(?=.*[A-Za-z])(?=.*[0-9])[a-zA-Z0-9]{8, 16}$/, // 至少有一位数字或者字母的8-16为密码
 };

 // 连字符修改成大写字母 驼峰写

 function normalizeWords(str) {
     return str.replace(/-(\w)/g, (match, p) => {
         return p.toUpperCase();
     })
 }

 // url 参数获取
 // url ?name=zhangsan&age=23

 function getParamsName(name) {
     let match = RegExp(`[?&]${name}=([^&]*)`) //分组运算符是为了把结果存到exec函数返回的结果里
         .exec(window.location.search)
         //["?name=jawil", "jawil", index: 0, input: "?name=jawil&age=23"]
     return match && decodeURIComponent(match[1].replace(/\+/g, ' ')) // url中+号表示空格,要替换掉
 }

getParamsName('age'); // 23


/**
 * 数字格式化 千位逗号隔开 /\B(?=(\d{3)+(?!\d))/g
 * 首先我们要匹配的不是单词开头或结束的位置 跟\b相反 匹配的单词的开始或结束
 * ?= 领宽断言匹配 匹配表达式前面的位置
 * (\d{3})+ 必须是1ge或多个的3个连续数字
 * (?!\d) 第二步中3个数字不允许后面跟着数字
 * (\d{3}+(?!\d)) 匹配的边界后面必须跟着 3*n (n >= 1) 的数字
 */

function normalizeThousandDigits(str) {
    if (!str) {
    	return;
    }
    const reg = /\B(?=(\d{3})+(?!\d))/g;
    return str.replace(reg, ','); 
}

normalizeThousandDigits('123'); // 123,41


/**
 *  
 */

export default class Element {
	/**
	 * @param {String} tag 'div'
	 * @param {Object} props { class: 'item' }
	 * @param {Array} children [Element1, 'text']
	 * @param {String} key option
	 */
	constructor(tag, props, children, key) {
		this.tag = tag;
		this.props = props;
		if (Array.isArray(children)) {
			this.children = children;
		} else if (isString(children)){
			this.key = children;
			this.children = null;
		}
		if (key) this.key = key;
	}

	// 渲染 
	render() {
		let root = this._createElement(
			this.tag,
			this.props,
			this.children,
			this.key
		);
		document.body.appendChild(root);
		return root;
	}

	create() {
		return this._createElement(this.tag, this.props, this.children, this.key); 
	}
}