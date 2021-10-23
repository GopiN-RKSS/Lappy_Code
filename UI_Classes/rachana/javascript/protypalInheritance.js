var Person = function () {
  this.a = 10;
};
Person.prototype.b = 20;

var Student = function () {
  Person.call(this); // accessing parent class a value
  this.c = 50;
};

Student.prototype = Object.create(Person.prototype); // accessing prototype properties
let student1 = new Student();
console.log(student1.b);
console.log(student1.a);
