// const x = 1;

// function outerFunc() {
//     const x = 10;

//     function innerFunc() {
//         console.log(x);
//     }
//     innerFunc();
// }
// outerFunc();


// const x = 1;

// function foo() {
//     const x = 10;
//     bar();
// }

// function bar() {
//     console.log(x);
// }
// foo();
// bar();


// const x = 1;

// function outer() {
//     const x = 10;
//     function inner() {
//         console.log(x);
//         return x;
//     };
//     return inner;
// }
// outer();


// function foo() {
//     const x = 1;
//     const y = 2;

//     function bar() {
//         const z = 3;
//         console.log(z);
//     }
//     return bar;
// }

// const bar = foo();
// bar();


// function foo() {
//     const x = 1;

//     function bar() {
//       console.log(x);
//     }
//     bar();
//   }
//   foo();


// predicate 함수를 인자로 전달받음
// function makeCounter(predicate) {
    // 자유 변수 counter
    // let counter = 0;

    // 함수를 반환하는 클로저
    // 자유 변수 counter를 기억
//     return function () {
//         counter = predicate(counter);
//         return counter;
//     };
// }

// 보조 함수
// function increase(n) {
//     return ++n;
// }

// function decrease(n) {
//     return --n;
// }

// 함수로 함수를 생성
// const increaser = makeCounter(increase);
// console.log(increaser());

// 별개의 독립된 렉시컬 환경을 가짐 (상태 연동 x)
// const decreaser = makeCounter(decrease);
// console.log(decreaser());


// function makeCounter () {
    // 자유 변수
    // let counter = 0;

    // 함수를 반환하는 클로저
    // 자유 변수 counter을 기억
//     return function (predicate) {
//         counter = predicate(counter);
//         return counter;
//     };
// }

// 보조 함수
// function increase(n) {
//     return ++n;
// }

// function decrease(n) {
//     return --n;
// }

// 함수로 함수를 생성
// const counter = makeCounter();

// console.log(counter(increase));
// 자유 변수를 공유
// console.log(counter(decrease));


// var arr = [];

// for (var i = 0; i < 5; i++) {
//     arr[i] = function () {
//         console.log(i);
//         return i;
//     };
// }


// for (var j = 0; j < arr.length; j++) {
//     console.log(arr[j]());
// }


// var arr = [];

// for (var i = 0; i < 5; i++) {
//     arr[i] = (function (id) {
//         return function () {
//             console.log(id);
//             return id;
//         };
//     }(i));
// }

// for (var j = 0; j < arr.length; j++) {
//     console.log(arr[j]());
// }








