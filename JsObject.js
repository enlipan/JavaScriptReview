/**
 * Created by paul on 2017/2/14.
 */

function Parent(userName) {
    this.userName = userName;
    this.sayHello = function () {
        console.log('hello' +  this.userName);
    }
}

Parent.prototype.sayMorning = function () {
    console.log('hello'  + this.userName);
}

function Child(userName, passWord) {
    //通过以下3行实现将Parent的属性和方法追加到Child中，从而实现继承
    //第一步：this.method是作为一个临时的属性，并且指向Parent所指向的对象，
    //第二步：执行this.method方法，即执行Parent所指向的对象函数
    //第三步：销毁this.method属性，即此时Child就已经拥有了Parent的所有属性和方法
    this.method = Parent;
    this.method(userName);
    delete this.method;

    this.passWord = passWord;
    this.sayWord = function () {
        console.log('word ' + this.passWord);
    }

}

var parent = new Parent('Big lee');
var child = new Child('little lee','lee');

parent.sayHello();
parent.sayMorning();

child.sayHello();
child.sayWord();


/////////////////////////////////////////////////////////////

function Person() {
}

Person.prototype.hello = 'Person hello';
Person.prototype.word = 'word';

function SubPerson() {

}
//将所有通过prototype追加的属性和方法都追加到Child，从而实现了继承
SubPerson.prototype = new Person();

var subPerson = new SubPerson();
console.error(subPerson.hello)

/////////////////////////////////////////////////////////////

function PersonOne(userName) {
    this.userName = userName;
    this.hello = function () {
        console.info('one ' + this.userName);
    }
}

PersonOne.prototype.sayMorning = function () {
    console.info('info' + this.userName);
}

function ChildOne(userName, passWord) {
    PersonOne.call(this,userName); // this 的绑定机制  - 见 《你所不知道的JavaScript》

    this.passWord = passWord;
    this.word = function () {
        console.info('one' + this.passWord);
    }
}

var personOne = new PersonOne('PersonOne');
var childOne = new ChildOne('ChildOne','passOne');

personOne.hello();

childOne.word();
childOne.hello();



