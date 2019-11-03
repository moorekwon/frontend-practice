// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// const arr = [];

// console.time('Array Performance Test');

// for (let i = 0; i < 10000000; i++) {
//     arr[i] = i;
// }
// console.timeEnd('Array Performance Test');

// const obj = {};

// console.time('Object Performance Test');

// for (let i = 0; i < 0000000; i++) {
//     obj[i] = i;
// }

// console.timeEnd('Object Performance Test');


// const arr = [1, 2, 3];

// console.log(arr.length);

// arr.length = 6;

// console.log(arr.length);
// console.log(arr);


// const sparse = [, 2, , 4];
// console.log(sparse.length);
// console.log(sparse);
// console.log(Object.getOwnPropertyDescriptors(sparse));


// const arr = [1, 2];
// const newArr = [ ... arr, 3];
// console.log(newArr);

// arr[arr.length] = 5
// let result = arr.push(3, 4);
// console.log(result);
// console.log(arr);


// const arr = [1, 2];
// let result = arr.pop();
// console.log(result);
// console.log(arr);


// const Stack = (function () {
//     function Stack(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array..`);
//         }
//         this.array = array;
//     }

//     Stack.prototype.push = function (value) {
//         return this.array.push(value);
//     };

//     Stack.prototype.pop = function () {
//         return this.array.pop();
//     };

//     return Stack;
// }());

// const stack = new Stack([1, 2]);
// console.log(stack);

// stack.push(3);
// console.log(stack);

// stack.pop();
// console.log(stack);


// console.log(Stack.prototype === Object.getPrototypeOf(stack));
// console.log(Object.getPrototypeOf(stack));


// const arr = [1, 2];
// const newArr = [3, ... arr];
// console.log(newArr);

// let result = arr.unshift(3, 4);
// console.log(result);
// console.log(arr);


// const arr = [1, 2];
// let result = arr.shift();
// console.log(result);
// console.log(arr);


// const Queue = (function () {
//     function Queue(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array..`);
//         }
//         this.array = array;
//     }

//     Queue.prototype.push = function (value) {
//         return this.array.push(value);
//     };

//     Queue.prototype.shift = function () {
//         return this.array.shift();
//     };

//     return Queue;
// }());

// const queue = new Queue([1, 2]);
// console.log(queue);

// queue.push(3);
// console.log(queue);

// queue.shift();
// console.log(queue);


// const arr = [1, 2];
// const newArr = [3, ... arr];
// console.log(newArr);

// let result = arr.unshift(3, 4);
// console.log(result);
// console.log(arr);


// const arr = [1, 2];
// let result = arr.shift();
// console.log(result);
// console.log(arr);


// const arr1 = [1, 2];
// const arr2 = [3, 4];

// let result = arr1.concat(arr2);
// console.log(result);

// result = arr1.concat(3);
// console.log(result);

// result = arr1.concat(arr2, 5);
// console.log(result);

// console.log(arr1);
// console.log(arr2);


// const arr1 = [3, 4];

// arr1.unshift(1, 2);
// console.log(arr1);

// arr1.push(5, 6);
// console.log(arr1);

// const arr2 = [3, 4];
// let result = [1, 2].concat(arr2);
// console.log(result);

// result = result.concat(5, 6);
// console.log(result);


// const arr = [3, 4];
// arr.unshift(1, 2);
// arr.push(5, 6);
// console.log(arr);

// let result = [1, 2].concat(3, 4);
// console.log(result);
// result = [... [1, 2], ... [3, 4]];
// console.log(result);

// result = result.concat(5, 6);
// console.log(result);


// splice - 원본 배열 직접 변경
// const arr = [1, 2, 3, 4];
// const result = arr.splice(1);
// console.log(result);
// console.log(arr);


// slice - 원본 배열 변경하지 않음
// const arr = [1, 2, 3];
// let result = arr.slice(1, 2);
// console.log(result);
// console.log(arr);


// const arr = [1, 2, 3];
// let result = arr.slice(-2)
// const copy = arr.slice();
// console.log(copy);
// console.log(copy === arr);

// const result = arr.slice(1);
// console.log(result);

// const todos = [
//     { id: 1, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 3, content: 'Javascript', completed: false }
// ];

// const copy = todos.slice();
// console.log(copy);
// console.log(copy === todos);
// console.log(copy[2] === todos[2]);


// function sum() {
//     var arr = Array.prototype.slice.call(arguments);
//     console.log(arr);

//     return arr.reduce(function (pre, cur) {
//         return pre + cur;
//     }, 0);
// }

// console.log(sum(1, 2, 3));


// function sum() {
//     const arr = [ ... arguments ];
//     console.log(arr);

//     return arr.reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2, 3));


// const arr = [1, 2, 2, 3];
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(1, 2));


// const foods = ['apple', 'banan', 'orange'];

// if (foods.indexOf('beef') === -1) {
//     foods.push('beef');
// }

// console.log(foods);


// const foods = ['apple', 'banan'];

// if (!foods.includes('oranges')) {
//     foods.push('orange');
// }

// console.log(foods);


// const arr = [1, 2, 3, 4];
// let result = arr.join();
// console.log(typeof result);
// console.log(arr);

// result = arr.join('');
// console.log(result);

// result = arr.join(':');
// console.log(result);

// const arr = [1, 2, 3];
// const result = arr.reverse();

// console.log(arr);
// console.log(result);


// const arr = [1, 2, 3];
// arr.fill(0, 1, 2);
// console.log(arr);


// const arr = new Array(3);
// console.log(arr);

// const result = arr.fill(1)
// console.log(result);
// console.log(arr);


// const arr1 = Array.from('Hello');
// console.log(arr1);

// const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
// console.log(arr2);


// 두번째 인수 콜백 함수
// const arr3 = Array.from({ length: 5}, function (value, index) { return value; });
// console.log(arr3);


// function generateSequences(length = 0) {
//     return Array.from(new Array(length), (value, index) => value);
// }

// console.log(generateSequences(1));


// const arr = [1, 2, 2, 3];
// let result = arr.includes(2);
// console.log(result);
// console.log(arr.indexOf(2));


// result = arr.includes(100);
// console.log(result);

// result = arr.includes(1, 1);
// console.log(result);


// console.log([NaN].indexOf(NaN) === -1);

// const nan = [NaN];
// console.log(nan.indexOf(NaN));
// console.log(nan.includes(NaN));


// 고차 함수
// function makeCounter(predicate) {
//     let num = 0;

//     return function () {
//         num = predicate(num);

//         return num;
//     };
// }

// 보조 함수
// function increase(n) {
//     return ++n;
// }

// 보조 함수
// function decrease(n) {
//     return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());


// 배열 고차 함수 정리 내용

// predicate 함수를 인수로 전달받음
// function makeCounter(predicate) {
    // 자유 변수
    // let num = 0;

    // 클로저를 반환
//     return function () {
//         num = predicate(num);
//         return num;
//     };
// }

// 보조 함수
// function increase(n) {
//     return ++n;
// }

// function decrease(n) {
//     return --n;
// }

// increase 함수를 인수로 전달받고 클로저를 반환
// const increaser = makeCounter(increase);
// console.log(increaser());

// increaser와 별개로 독립된 렉시컬 환경 생성
// const decreaser = makeCounter(decrease);
// console.log(decreaser());


// Array.prototype 메소드 1
// sort
// 원본 배열 변경, 결과 문자열 배열 반환, 오름차순 정렬
// const fruits = ['Banana', 'Orange', 'Apple'];

// fruits.sort();
// console.log(fruits);

// fruits.reverse();
// console.log(fruits);

// const points = [40, 100, 1, 5, 2, 25, 10];
// points.sort(function (a, b) { return a - b; });
// console.log(points);


// const todos = [
//     { id: 4, content: 'JavaScript' },
//     { id: 1, content: 'HTML' },
//     { id: 2, content: 'CSS'}
// ];

// function compare(key) {
//     return function (a, b) {
//         return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
//     };
// }

// todos.sort(compare('id'));
// console.log(todos);


// forEach
// 배열을 순회 -> 배열의 각 요소에 대해 인수로 전달된 콜백 함수를 실행, 요소 값을 참조해 뭔가를 하기 위한 함수
// for 문 대체, 가독성 좋음, 3개 인수 전달(item, index, this), 원본 배열 변경 x, break/continue 사용 x(모두 순회), 두번째 인자로 this 전달
// const numbers = [1, 2, 3];
// let pows = [];

// for (let i = 0; i < numbers.length; i++) {
//     pows.push(numbers[i] ** 2);
// }

// numbers.forEach(item => pows.push(item ** 2));

// console.log(pows);

// const numbers = [1, 2, 3];
// numbers.forEach((item, index, self) => { console.log(`${item}, ${index}, ${self}`); });
// numbers.forEach((item, index, self) => self[index] = Math.pow(item, 2));
// console.log(numbers);

// const numbers = [1, 2, 3];
// const result = numbers.forEach(console.log);
// console.log(result);


// if (!Array.prototype.forEach) {
//     Array.prototype.forEach = function (callback, thisArg) {
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         thisArg = thisArg || window;

//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }


// const arr = [1, , 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(value => console.log(value));


// const Numbers = (function () {
//     function Numbers(){
//         this.numberArray = [];
//     }

//     Numbers.prototype.multiply = function(arr) {
//         arr.forEach(function (item) {
//             return this.numberArray.push(item * item);
//         },this) ;
//     }

//     return Numbers;
// }());

// const numbers = new Numbers();
// numbers.multiply([1, 2, 3]);
// console.log(numbers.numberArray);

const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
  ];

const result = users.find(item => item.id === 2);

console.log(result);
console.log(users);



