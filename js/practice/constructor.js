// 생성자 함수에 의한 객체 생성
// const person = new Object();

// person.name = 'Kwon';
// person.sayHello = function() {
//     console.log(`Hi! My name is ${this.name}`);
// };

// console.log(person);
// person.sayHello();


// const strObj = new String('Kwon');
// console.log(typeof strObj);
// console.log(strObj);

// const numObj = new Number(123);
// console.log(typeof numObj);
// console.log(numObj);

// const boolObj = new Boolean(true);
// console.log(typeof boolObj);
// console.log(boolObj);

// const func = new Function('x', 'return x * x');
// console.log(typeof func);
// console.dir(func);

// const arr = new Array(1, 2, 3);
// console.log(typeof arr);
// console.log(arr);

// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp);
// console.log(regExp);

// const date = new Date();
// console.log(typeof date);
// console.log(date);


// const circle1 = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };

// console.log(circle1.getDiameter());

// const circle2 = {
//     radius: 10,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };

// console.log(circle2.getDiameter());


// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2 * this.radius;
//     };
// }

// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());


// function foo() {
//     console.log(this);
// }
// foo();

// const obj = { foo };
// obj.foo();

// const inst = new foo();


// const circle3 = Circle(15);
// console.log(circle3);
// console.log(radius);


// function foo() {}
// foo();

// foo.prop = 10;

// foo.method = function () {
//     console.log(this.prop);
// };
// foo.method();


// function foo() {}
// const bar = function () {};
// const baz = {
//     x: function () {}
// };
// new foo();
// new bar();
// new baz.x();

// const arrow = () => {};
// new arrow();

// const obj = {
//     x() {}
// };
// new obj.x();


// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// const circle1 = new Circle(5);
// console.log(circle1.getDiameter());


// function Circle(radius) {
    // console.log(this);
    // console.log(Object.getPrototypeOf(this) === Circle.prototype);
    // console.log(Object.getPrototypeOf(this));
    // console.log(Circle.prototype);

//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
//     return 100;
// }
// const circle = new Circle(1);
// console.log(circle);
// console.log(circle.getDiameter());


// function add(x, y) {
//     return x + y;
// }

// let inst = new add(2, 3);
// console.log(inst);

// function createUser(name, role) {
//     return {name, role};
// }

// inst = new createUser('Kwon', 'Develop');
// console.log(inst);


// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// const circle = Circle(5);
// console.log(circle);

// console.log(radius);
// console.log(getDiameter());

// circle.getDiameter();


// function Circle(radius) {
//     if (!new.target) {
//         return new Circle(radius);
//     }

//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// const circle = Circle(5);
// circle.getDiameter();
// console.log(circle.getDiameter());


// function Circle(radius) {
//     if (!(this instanceof Circle)) {
//         return new Circle(radius);
//     }

//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this. radius;
//     };
// }

// const circle = Circle(5);
// console.log(circle.getDiameter());


// let obj = new Object();
// console.log(obj);

// obj = Object();
// console.log(obj);

// let f = new Function('x', 'return x ** x');
// console.log(f);

// f = Function('x', 'return x ** x');
// console.log(f);

// let s = new String('abc');
// console.log(s);
// console.log(typeof s);

// s = String('abc');
// console.log(s);
// console.log(typeof s);


// 함수와 일급 객체
// const increase = function (num) {
//     return ++num;
// };

// const decrease = function (num) {
//     return --num;
// };

// const predicates = {
//     increase,
//     decrease
// };

// function makeCounter(predicate) {
//     let num = 0;
//     return function() {
//         num = predicate(num);
//         return num;
//     };
// }

// const increaser = makeCounter(predicates.increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(predicates.decrease);
// console.log(decreaser());
// console.log(decreaser());


// function square(number) {
//     return number * number;
// }
// console.dir(square);
// console.log(square(2));


// function square(number) {
//     return number * number;
// }

// console.log(Object.getOwnPropertyDescriptor(square, 'arguments'));
// console.log(Object.getOwnPropertyDescriptor(square, 'caller'));
// console.log(Object.getOwnPropertyDescriptor(square, 'length'));
// console.log(Object.getOwnPropertyDescriptor(square, 'name'));
// console.log(Object.getOwnPropertyDescriptor(square, 'prototype'));
// console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));


// function multiply(x, y) {
//     console.log(arguments);
//     return x * y;
// }

// console.log(multiply());
// console.log(multiply(1));
// console.log(multiply(1, 2));
// console.log(multiply(1, 2, 3));


// function multiply(x, y) {
//     const iterator = arguments[Symbol.iterator]();

//     console.log(iterator.next());
//     console.log(iterator.next());
//     console.log(iterator.next());
//     console.log(iterator.next());
//     console.log(iterator.next());

//     return x * y;
// }
// multiply(1, 2, 3, 4);


// function sum() {
//     let res = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         res += arguments[i];
//     }
//     return res;
// }
// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));


// function foo() {}
// console.log(foo.length);

// function bar(x) {
//     return x;
// }
// console.log(bar.length);

// function baz(x, y) {
//     return x * y;
// }
// console.log(baz.length);


// var namedFunc = function foo() {};
// console.log(namedFunc.name);

// var anonymousFunc = function() {};
// console.log(anonymousFunc.name);

// function bar() {}
// console.log(bar.name);


// const obj = {
//     a: 1
// };

// console.log(obj.__proto__ === Object.prototype);

// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('__proto__'));


// console.log((function() {}).hasOwnProperty('prototype'));

// const a = { b: 2};
// console.log(a.hasOwnProperty('prototype'));


// 프로토타입
// prop in object
const person = {
    name: 'Kwon',
    address: 'Seoul'
};

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);
