// // class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(`Hi! My name is ${this.name}`);
//     }
// }

// // prototype
// const Person = (name) => {
//     this.name = name;
// };

// Person.prototype.sayHi = () => {
//     console.log(`Hi! My name is ${this.name}`);
// };


// class 붕어빵틀 {
//     constructor(재료) {
//         this.속 = 재료;
//     }

//     sayHi() {
//         console.log(`안녕! 나는 ${this.속}붕어빵이야.`);
//     }
// }

// const 슈크림붕어빵 = new 붕어빵틀('슈크림');
// 슈크림붕어빵.sayHi();


// 부분적 깊은 복사
const arr1 = [
    { a: 1 },
    { b: 2 }
];

// 깊은 복사
const copy1 = [...arr1]
console.log(arr1 === copy1);

// 얕은 복사
arr1[1].b = 3;
console.log(copy1);


