/**
 * Created by paul on 2017/1/19.
 */


var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};

console.log(object.getNameFunc()())

var name0 = "The Window";
var object0 = {
    name0 : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name0;
        };
    }
};
console.log(object0.getNameFunc()());


/**
 *  闭包保存了 x变量的值，在java中如果碰到两个请求返回两个结果进而要组合后完成逻辑，
 *  需要先用中间变量保存第一个变量，
 *  然后再组合第二个变量进行函数逻辑运算，而使用了闭包可以直接借助函数的作用域传递参数；
 *  闭包在回调中也非常有用；
 * @param x
 * @returns {Function}
 */
function makeAdder(x) {
    return function (y) {
        return x +  y;
    }
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(10));


/**
 * Module
 */
var Counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
});
var counter = Counter();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());

var counter1 = Counter();// m每个函数执行的上下文环境不同；
console.log(counter1.value());
counter1.increment();
console.log(counter1.value());


/**
 * 循环与闭包
 *
 * 循环中的环境共享问题
 */

function showHelp(helpInfo) {
    console.error(helpInfo)
}

function setUpHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for (var i = 0,size = helpText.length;i< size;i++){
        var item = helpText[i];
        document.getElementById(item.id).onfocus = setUpHelp(item.help);
    }
}
/**
 * 函数执行  onfocus 回调获取到闭包，但由于三个闭包环境 setUpHelp()共有 item环境，
 * 最后一个setUp闭包创建时循环已经执行完毕，
 * 所以setUpHelp()闭包环境只保存了最后一个age变量环境
 */
setUpHelp();


/**
 * 改进上述问题需要构建新的闭包环境分别保存对应的 item.help变量环境
 */
function makHelpCallBack(help) {
    return function () {
        showHelp(help);
    }
}
/**
 * 利用新的闭包环境保存help信息
 */

function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for (var i = 0,size = helpText.length;i< size;i++){
        var item = helpText[i];
        document.getElementById(item.id).onfocus = makHelpCallBack(item.help); //借助makeHelpCallBack闭包保存了Info
    }
}


