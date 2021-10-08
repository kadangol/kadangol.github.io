String.prototype.filter = function(...str) {
    let arr = this.split(' ');
    return arr.filter(x => !str.includes(x)).join(' ');
}

Array.prototype.bubbleSort = function() {
    let arr = this;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}


var Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");


var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return this.name + ' is now teaching ' + subject;
}