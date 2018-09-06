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