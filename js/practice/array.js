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


// Array.prototype 메소드
// 1. sort
// 원본 배열 변경, 결과 문자열 배열 반환, 오름차순 정렬

// 2. forEach
// 배열을 순회 -> 배열의 각 요소에 대해 인수로 전달된 콜백 함수를 실행, 요소 값을 참조해 뭔가를 하기 위한 함수
// for 문 대체, 가독성 좋음, 3개 인수 전달(item, index, this), 원본 배열 변경 x, break/continue 사용 x(모두 순회), 두번째 인자로 this 전달


// function makeCounter(predicate) {
//   let num = 0;
//   return function () {
//     num = predicate(num);
//     return num;
//   };
// }

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());


// const fruits = ['banana', 'orange', 'apple'];
// fruits.sort();
// console.log(fruits);

// fruits.reverse();
// console.log(fruits);


// const points = [40, 100, 1, 5, 2, 25, 10];
// points.sort(function (a, b) { return a - b; });
// console.log(points);
// console.log(points[0]);


// const todos = [
//   { id: 4, content: 'JavaScript' },
//   { id: 1, content: 'HTML' },
//   { id: 2, content: 'CSS' }
// ];

// function compare(key) {
//   return function (a, b) {
//     return a[key] > b[key] ? 1 : (a[key] === b[key] ? 0 : -1);
//   };
// }
// todos.sort(compare('content'));

// console.log(todos);


// const result = [1, 2, 3].forEach(console.log);
// console.log(result);


// const numbers = [1, 2, 3];
// let pows = [];

// numbers.forEach((it, ind, th) => th[ind] = Math.pow(it, 2));
// console.log(numbers);

// numbers.forEach(item => pows.push(item ** 2));
// console.log(pows);


// class Numbers {
//   numberArray = [];

//   multiply(arr) {
//     arr.forEach(item => this.numberArray.push(item * item));
//   }
// }

// const numbers = new Numbers();
// numbers.multiply([1, 2, 3]);
// console.log(numbers.numberArray);


// const numbers = [1, 4, 9];
// const roots = numbers.map(item => Math.sqrt(item));

// console.log(roots);
// console.log(numbers);


class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
    console.log(this);
  }

  prefixArray(arr) {
    return arr.map(function (item) {
      console.log(this);
      return this.prefix + item;
    }, this);
  }
}

const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);

