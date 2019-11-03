// 프로토타입
// const person = {
//     name: 'Kwon',
//     address: 'Seoul'
// };

// console.log(person);


// const circle = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     },
//     getPerimeteR() {
//         return 2 * Math.PI * this.radius;
//     },
//     getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(circle);
// console.log(circle.getDiameter());
// console.log(circle.getPerimeteR());
// console.log(circle.getArea());


// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea());
// console.log(circle2.getArea());


// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea());
// console.log(circle2.getArea());


// const obj = {};
// const parent = {
//     x: 1
// };

// obj.__proto__ = parent;
// console.log(obj.x);


// const person = {
//     name: 'Kwon'
// };

// console.log(person.hasOwnProperty('__proto__'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// console.log({}.__proto__ === Object.prototype);
// console.log({}.__proto__);
// console.log(Object.prototype);


// const parent = {};
// const child = {};

// child.__proto__ = parent;
// parent.__proto__ = child;


// const obj = Object.create(null);
// console.log(obj.__proto__);
// console.log(Object.getPrototypeOf(obj));


// const obj = {};
// const parent = {
//     x: 1
// };

// Object.getPrototypeOf(obj);
// Object.setPrototypeOf(obj, parent);
// console.log(obj.x);


// console.log((function () {}).hasOwnProperty('prototype'));
// console.log({}.hasOwnProperty('property'));


// const Person = name => {
//     this.name = name;
// };

// console.log(Person.prototype);
// console.log(Person.hasOwnProperty('prototype'));

// const obj = {
//     foo() {}
// };

// console.log(obj.foo.prototype);
// console.log(obj.foo.hasOwnProperty('prototype'));

// const obj = {
//     foo: function() {}
// };

// console.log(obj.foo.prototype);
// console.log(obj.foo.hasOwnProperty('prototype'));


// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Kwon');

// console.log(Person.prototype);
// console.log(me.__proto__);
// console.log(Person.prototype === me.__proto__);


// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Kwon');

// console.log(me.constructor === Person);
// console.log(me.constructor);


// const obj = new Object();
// const add = new Function('a', 'b', 'return a + b');
// console.log(obj);
// console.log(add);

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Kwon');


// const obj = {};
// console.log(obj.constructor);
// console.log(Object);
// console.log(obj.constructor === Object);

// const add = function (a, b) { return a + b };
// console.log(add.constructor);
// console.log(Function);
// console.log(add.constructor === Function);

// const arr = [1, 2, 3];
// console.log(arr.constructor);
// console.log(Array);
// console.log(arr.constructor === Array);

// const regexr = /is/ig;


// let obj = new Object();
// console.log(obj);

// obj = Object();
// console.log(obj);

// obj = new Object('123');
// console.log(obj);


// console.log(Person);
// console.log(Person.prototype);

// function Person(name) {
//     this.name = name;
// }


// const obj = {
//     x: 1
// };

// console.log(obj.constructor === Object);
// console.log(obj.__proto__.hasOwnProperty('x'));


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hi! ${this.name}`);
// };

// const me = new Person('Kwon');

// console.log(me.hasOwnProperty('name'));
// console.log(Object.prototype.hasOwnProperty.call(me, 'name'));
// console.log(me.hasOwnProperty('name'));

// me.sayHello();


// const Person = (function () {
//     let _name = '';
//     function Person(name) {
//         _name = name;
//     }

//     Person.prototype.sayHello = function () {
//         console.log(`Hi!88 ${_name}`);
//     };

//     return Person;
// }());

// const me = new Person('Lee');
// console.log(me);

// me._name = 'Kim';
// me.sayHello();


// const Person = (function () {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype.sayHello = function () {
//         console.log(`Hi! ${this.name}`);
//     };

//     return Person;
// }());

// const me = new Person('Kwon');
// console.log(me);
// console.log(me.sayHello() === Person.prototype.sayHello());

// me.sayHello = function () {
//     console.log(`Hey! ${this.name}`);
// };
// console.log(me.sayHello() === Person.prototype.sayHello());

// me.hyojin = function () { return 5};

// console.log(me.hyojin());

// me.sayHello();


// const Person = (function () {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype = {
//         constructor: Person,
//         sayHello() {
//             console.log(`Hi! ${this.name}`);
//         }
//     };

//     return Person;
// }());

// const me = new Person('Kwon');
// console.log(me);

// console.log(me.constructor);
// console.log(me.constructor === Object);
// console.log(me.constructor === Person);
// console.log(Person);


// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Kwon');

// const parent = {
//     constructor: Person,
//     sayHello() {
//         console.log(`Hi! ${this.name}`);
//     }
// };

// console.log(me.constructor);
// Object.setPrototypeOf(me, parent);
// console.log(parent.constructor);
// me.sayHello();


// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Kwon');
// const parent = {};

// Person.prototype = parent;

// Object.setPrototypeOf(me, parent);

// console.log(me instanceof Person);
// console.log(me instanceof Object);


// function isInstanceof(instance, constructor) {
//     const prototype = Object.getPrototypeOf(instance);

//     if (prototype === null) return false;

//     return prototype === constructor.prototype ? true : isInstanceof(prototype, constructor);
// }

// console.log(isInstanceof(me, Person));
// console.log(isInstanceof(me, Object));
// console.log(isInstanceof(me, Array));


// const Person = (function () {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype = {
//         sayHello() {
//             console.log(`Hi! ${this.name}`);
//         }
//     };

//     return Person;
// }());

// const me = new Person('Kwon');

// console.log(me instanceof Person);
// console.log(me instanceof Object);


// let obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj) === null);
// console.log(obj.toString());

// obj = Object.create(Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype);

// obj = Object.create(Object.prototype, { x: { value: 1 } });
// console.log(Object.prototype === Object.getPrototypeOf(obj));

// const myProto = { x: 10 };
// obj = Object.create(myProto);
// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj) === myProto);

// function Person(name) {
//     this.name = name;
// }

// obj = Object.create(Person.prototype);
// obj.name = 'Kwon';
// console.log(obj.name);
// console.log(Object.getPrototypeOf(obj) === Person.prototype);


// const obj = { a: 1 };
// const child = Object.create(obj);

// console.log(obj.hasOwnProperty('a'));
// console.log(obj.isPrototypeOf(child));
// console.log(obj.propertyIsEnumerable('a'));


// const obj = Object.create(null);
// obj.a = 1;
// console.log(Object.getPrototypeOf(obj) === null);
// console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));


// const myProto = { x: 10 };
// const obj = {
//     y: 20,
//     __proto__: myProto
// };

// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj) === myProto);


// 정적 프로퍼티/메소드
// -> 생성자 함수 내에 있는 프로퍼티/메소드
// -> 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출

// 생성자 함수
// function Person(name) {
//     this.name = name;
// }

// 프로토타입 메소드
// Person.prototype.sayHello = function () {
//     console.log(`Hi! ${this.name}`);
// };

// 생성자 함수에 정적 프로퍼티 추가
// Person.staticProp = 'static prop';
// 생성자 함수에 정적 메소드 추가
// Person.staticMethod = function () {
//     console.log('staticMethod');
// };

// const me = new Person('Kwon');

// 생성자 함수로 추가한 메소드 호출
// Person.staticMethod();

// 인스턴스로 추가한 메소드 호출
// -> 인스턴스에 메소드 추가하지 않았음
// me.staticMethod();


// const obj = Object.create({});

// console.log(Object.getPrototypeOf({}) === Object.prototype);
// console.log(obj.hasOwnProperty('name'));


// 생성자 함수
// function Foo() {}

// 프로토타입 메소드 생성
// Foo.prototype.x = function () {
//     console.log('x');
// };

// 프로토타입 메소드를 호출하기 위해 인스턴스 생성
// const foo = new Foo();
// foo.x();

// 정적 메소드 생성
// Foo.x = function () {
//     console.log('x');
// };

// 정적 메소드 호출(인스턴스 생성할 필요 x)
// Foo.x();


// const person = {
//     name: 'Lee',
//     address: 'Seoul'
// };

// console.log('name' in person);
// console.log('address' in person);
// console.log('age' in person);

// console.log('toString' in person);
// console.log(person.name.toString());

// console.log(person.hasOwnProperty('toString'));
// console.log(person.hasOwnProperty('name'));


const person = {
    name: 'Kwon',
    address: 'Seoul',
    __proto__: { age: 25 }
};

// for (const prop in person) {
//     if (!person.hasOwnProperty(prop)) continue;
//     console.log(prop + ': ' + person[prop]);
// }

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// console.log('toString' in person);
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));


// const sym = Symbol();
// const obj = {
//     a: 1,
//     [sym]: 10
// };

// for (const prop in obj) {
//     console.log(prop + ': ' + obj[prop]);
// }

