/**
 * Created by paul on 2017/2/15.
 */

console.log(Object.prototype);

// 用new Object或者{}建的对象是普通对象，它没有prototype属性，只有__proto__属性，它指向Object.prototype
var o = new Object();
console.log(o.prototype);
console.log(o.__proto__);

console.log(Array.prototype);
// 函数对象：其原型-- function 空函数
console.log(Function.prototype);

function hello() {
    console.log('hello');
}
hello.prototype = 'hello word';
console.log(hello.prototype);

//////////////////////////////////////////////////

//原型链搜寻
// 对象字面量
var  o = {
    a : 1,
    b: 3,
};
console.error(o.toString()); // Object 原型上的 toString 函数
console.error(o.prototype); // 普通对象 无 prototype属性



