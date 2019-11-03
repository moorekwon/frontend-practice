// 스코프
// function add(x, y) {
//     console.log(x, y);
//     return x + y;
// }

// add(2, 5);

// console.log(x, y);


// var num = 0;

// function increase() {
//     return ++num;
// }

// console.log(increase());
// console.log(increase());


// var var1 = 1;

// if (true) {
//     var var2 = 2;
//     if (true) {
//         var var3 = 3;
//     }
// }

// function foo() {
//     var var4 = 4;
//     function bar() {
//         var var5 = 5;
//         console.log(var5);
//     }
//     bar();
// }
// foo();

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);
// console.log(var5);


// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x);
// }
// foo();

// console.log(x);


// function bar() {
//     let x = 1;
//     let x = 2;
//     console.log(x);
// }
// bar();

// console.log(x);


// function foo() {
//     console.log('global function foo');
// }
// foo();

// function bar() {
//     function foo() {
//         console.log('local function foo');
//     }
//     foo();
// }
// bar();


// var x = 1;

// if (true) {
//     var x = 10;
// }

// console.log(x);


// var i = 10;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);


// var x = 1;

// function foo() {
//     var x = 10;
//     bar();
//     console.log(x);
// }
// foo();

// console.log(x);

// function bar() {
//     console.log(x);
// }
// bar();

// console.log(x);


// function foo() {
//     x = 10;
// }
// foo();

// console.log(x);


// function foo() {
//     i = 0;
// }

// for (var i = 0; i < 5; i++) {
//     foo();
//     console.log(i);
// }


// 전역 변수의 문제점
// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }
// foo();

// console.log(x);


// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }
// foo();

// console.log(x);


// var x = 1;
// var x = 100;

// console.log(x);


// (function () {
//     var foo = 10;
//     console.log(foo);
// }());


// var MYAPP = {};

// MYAPP.name = 'Kwon';

// console.log(MYAPP.name);


// var MYAPP = {};

// MYAPP.person = {
//     name: 'Kwon',
//     address: 'Seoul'
// };

// console.log(MYAPP.person.name);


// var Counter = (function () {
//     var num = 0;
//     return {
//         increase() {
//             return ++num;
//         },
//         decrease() {
//             return --num;
//         }
//     };
// }());

// console.log(Counter.increase());
// console.log(Counter.decrease());


// let, const와 블록 레벨 스코프
// var x = 1;

// if (true) {
//     var x = 10;
// }

// console.log(x);


// console.log(foo);

// foo = 123;

// console.log(foo);

// var foo;


// let foo = 123;

// {
//     let foo = 456;
//     let bar = 456;
// }

// console.log(foo);
// console.log(bar);


// console.log(foo);

// let foo;
// console.log(foo);

// foo = 1;
// console.log(foo);


// let foo = 1;

// {
//     console.log(foo);
//     let foo = 2;
// }


// let z = 3;
// var x = 1;
// y = 2;
// function foo() {}


// console.log(global.z);
// console.log(z);

// console.log(global.x);
// console.log(x);

// console.log(global.y);
// console.log(y);

// console.log(global.foo);
// console.log(foo);

// {
//     const TAX_RATE = 0.1;
//     console.log(TAX_RATE);
// }

// console.log(TAX_RATE);


// let preTaxPrice = 100;
// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

// console.log(afterTaxPrice);


// const TAX_RATE = 0.1;

// let preTaxPrice = 100;

// let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

// console.log(afterTaxPrice);


// const person = {
//     name: 'Lee'
// };

// person.name = 'Kim';

// console.log(person);


// 프로퍼티 정의
// const obj = {};

// obj.prop = 10;

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
// console.log(descriptor);

// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);


// const person = {
//     firstName: 'Hyojin',
//     lastName: 'Kwon',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };
// console.log(person.firstName + ' ' + person.lastName);

// person.fullName = 'Moore Kwon'
// console.log(person);
// console.log(person.fullName);

// let descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);


// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));


// const obj = {
//     prop: 1
// };

// obj.prop2 = 2;

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop2');
// console.log(descriptor);


// const person = {};

// Object.defineProperty(person, 'firstName', {
//     value: 'Hyojin',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(person, 'lastName', {
//     value: 'Kwon',
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log(descriptor);
// console.log(Object.keys(person));

// person.lastName = 'Kim';

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log(descriptor);

// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     },
//     enumerable: true,
//     // configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);

// person.fullName = 'Moore Kwon';
// console.log(person);


const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Hyojin',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Kwon',
        writable: true,
        enumerable: true,
        configurable: true
    },
    fullName: {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Moore Kwon';
console.log(person);




