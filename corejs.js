/**
 * Created by paul on 2017/1/18.
 */


var base = {
    name : "base",
    getInfo : function () {
        return this.name;
    }
}

var ext1 = {
    id : 0,
    name: "ext1",
    __proto__ :base
}

console.info(ext1.name)
console.info(ext1.getInfo())


// constructor

function Task(id) {
    this.id = id;
}

Task.prototype.status = "STOPPED";
Task.prototype.execute = function (args) {
    return "execute task_" + this.id + "[" + this.status + "]:" + args;
};
var task1 = new Task(1);
console.info(task1.execute("task1"));

