// const circle = {
//     radius: 5,
//     getDiameter() {
//         return 2 * circle.radius;
//     }
// };

// console.log(circle.getDiameter());


// const circle = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };

// console.log(circle.getDiameter());

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//     return 2 * this.radius;
// };

// const circle = new Circle(5)


// 전역 this: global
// console.log(this);


// function square(number) {
// 일반 함수 내부 this: global
//     console.log(this);
//     return number * number;
// }
// square(2);

// const person = {
//     name: 'Hyojin',
//     getName() {
// 메소드 내부 this: person
//         console.log(this);
//         return this.name;
//     }
// };
// console.log(person.getName());

// function Person(name) {
// 생성자 함수 내부 this: me
//     console.log(this);
//     this.name = name;
// }
// const me = new Person('Kwon');


// const foo = function () {
//     console.dir(this);
// };

// 일반 함수 호출
// foo();

// 메소드 호출
// const obj = { foo };
// obj.foo();

// 생성자 함수 호출
// new foo();

// Function.prototype.apply/call/bind 메소드에 의한 간접 호출
// const bar = { name: 'bar' };
// foo.call(bar);
// foo.apply(bar);
// foo.bind(bar)();


// 일반 함수 호출
// function foo() {
//     console.log("foo's this: ", this);
//     function bar() {
//         console.log("bar's this: ", this);
//     }
//     bar();
// }
// foo();


// var 키워드로 변수 선언
// -> 전역 객체의 프로퍼티
// var value = 1;

// const obj = {
//     value: 100,
// 메소드
// foo() {
//     console.log(this);
//     console.log(this.value);

// 메소드 내 중첩 함수
// -> 일반 함수로 호출되면 this: 전역 객체
// function bar() {
//     console.log(this);
//     console.log(this.value);
// }
// 일반 함수로 호출
//         bar();
//     }
// };
// 메소드로 호출
// obj.foo();


// var value = 1;

// const obj = {
//     value: 100,
// 메소드
// foo() {
//     console.log(this);

//     const that = this;
// 콜백 함수를 호출하는 함수
//         setTimeout(function() {
//             console.log(this);
//             console.log(that.value);
//         }, 100);
//     }
// };
// 메소드로 호출
// obj.foo();


// var value = 1;

// const obj = {
//     value: 100,
//     foo() {
//         setTimeout(function () {
//             console.log(this.value);
//         }.bind(this), 100)
//     }
// };
// obj.foo();


// 메소드 호출
// const person = {
//     name: 'Kwon',
//     getName() {
//         return this.name;
//     }
// };

// console.log(person.getName());


// const anotherPerson = {
//     name: 'Lee'
// };

// anotherPerson.getName = person.getName;

// 메소드 호출
// console.log(anotherPerson.getName());

// const getName = person.getName;

// 일반 함수 호출
// console.log(getName());


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     return this.name;
// };

// const me = new Person('Kwon');

// me에 의해 메소드 호출
// console.log(me.getName());

// Person.prototype.name = 'Lee';

// Person.prototype에 의해 메소드 호출
// console.log(Person.prototype.getName());


// 생성자 함수 호출
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());

// const circle3 = Circle(30);

// console.log(circle3);
// console.log(radius);


// 메소드 간접 호출
// function getThisBinding() {
//     return this;
// }

// console.log(getThisBinding.__proto__ === Function.prototype);
// console.log(getThisBinding());

// console.log(getThisBinding.apply(thisArg));
// console.log(getThisBinding.call(thisArg));


// function getThisBinding() {
//     console.log(arguments);
//     return this;
// }

// console.log(getThisBinding.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);

// const thisArg = {
//     a: 1
// };

// console.log(thisArg.__proto__ === Object.prototype);

// console.log(this);
// console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// console.log(getThisBinding.call(thisArg, 1, 2, 3));


// function convertArgsToArray() {
//     console.log(arguments);

//     const arr = Array.prototype.slice.apply(arguments);

//     console.log(arr);

//     return arr;
// }

// convertArgsToArray(1, 2, 3)

// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Array.prototype.__proto__ === Function.prototype.__proto__);


// function getThisBinding() {
//     return this;
// }

// const thisArg = { a: 1 };

// console.log(getThisBinding.bind(thisArg)());


// 생성자 함수
function Person(name) {
    // this: person
    this.name = name;
    console.log(this.name);
}

// 프로토타입 메소드
Person.prototype.doSomething = function (callback) {
    callback.bind(this)();
};

// 일반 함수로 호출된 콜백 함수
function foo() {
    // 위의 this와 일치시킴 (bind(this) 쓰지 않았다면 global)
    console.log(this.name);
}

const person = new Person('Kwon');

// 메소드 호출
person.doSomething(foo);



