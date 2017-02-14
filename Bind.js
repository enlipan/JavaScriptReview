/**
 * Created by paul on 2017/2/15.
 */

// call 绑定 this 将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象

// apply

// bind

var foo = {

    name : 'lee',
    // this 绑定
    sayHello : function () {
        setTimeout(function () {
            console.log('hello' + this.name)
        }.bind(this),1000);
    }
};

foo.sayHello();