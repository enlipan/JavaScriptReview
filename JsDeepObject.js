/**
 * Created by paul on 2017/2/16.
 */


var  MyString = function (str) {
    this.content = str;
}

var name = new MyString('lee');
console.log(name.content);

(function () {
    var name = new MyString('paul');
    console.log(name.content);
})();

//实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承
/**
 *
 *
 */
console.log(MyString.prototype === name.__proto__);


var obj = {name:'obj'};
console.dir(obj);
console.log(obj.prototype)
console.log(obj.__proto__)

function Animal(sort, character) {
    this.sort = sort;
    this.character = character;
}

/**
 * 创建dog的对象的过程如下：
 * 首先，new运算符创建一个空对象（{}），
 * 然后以这个空对象为调用对象调用函数Animal，
 * 为这个空对象添加两个属性sort和character，
 * 接着，再将这个空对象的默认constructor属性修改为构造函数的名称（即Animal；空对象创建时默认的constructor属性值是Object），
 * 并且将空对象的__proto__属性设置为指向Animal.prototype——这就是所谓的对象初始化。
 * 最后，返回初始化完毕的对象。这里将返回的新对象赋值给了变量dog。
 * @type {Animal}
 */
var dog = new Animal('mammal','four legs');
console.log(dog.sort,dog.character);

var dog0 = {};
/**
 * 同样的构建，但丢失了原型信息
 *
 * 最关键的是新创建的dog对象失去了通过Animal.prototype属性继承其他对象的能力。
 * 只要与前面采用new运算符调用构造函数创建对象的过程对比一下，
 * 就会发现，new运算符在初始化新对象期间，除了为新对象添加显式声明的属性外，
 * 还会对新对象进行了一番“暗箱操作”——即将新对象的constructor属性重写为Animal，
 * 将新对象的__proto__属性设置为指向Animal.prototype。
 *
 * 虽然手工“初始化对象”也可以将dog.constructor重写为Animal，
 * 但根据ECMA262规范，对象的__proto__属性对开发人员是只读的，
 * 对它的设置只能在通过new运算符创建对象时由JavaScript解释引擎替我们完成。

 JavaScript是基于原型继承的，如果不能正确设置对象的__proto__属性，那么就意味着默认的继承机制会失效：
 *
 */
Animal.call(dog0,'fmammal','five legs');
