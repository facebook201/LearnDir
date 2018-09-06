/**
 * 策略模式
 * 策略模式是指把一系列算法 将不变的部分和变的分部隔离 
 * 一个策略类 封装了具体的算法 
 * 一个环境类 接受客户的请求 随后委托给某个策略类
 */

/* 一 计算根据职员表现计算奖金
 * 假设分 A B C D E
 * 每个层次分为倍数不一样 
 */

// 实现策略类 具体计算奖金的算法

let strategies = {
    S(salary) {
        return salary * 4;
    },
    B(salary) {
        return salary * 3;
    },
    A(salary) {
        return salary * 2;
    }
};

// 具体的环境类 调用策略类
let calculateBouns = (level, salary) => strategies(level, salary);