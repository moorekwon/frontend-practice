function foo () {
    return
    {}
}
console.log(foo());

// var bar = function () {}
// (function () {})();

var x = 5, result;

result = x++;
console.log(result, x);

result = ++x;
console.log(result, x);

result = x--;
console.log(result, x);

result = --x;
console.log(result, x);

console.log(+'Hello');
console.log(-'Hello');
console.log(-true);

var str = 'My name is ';
str += 'Hyojin';
console.log(str);

console.log(NaN === NaN);

console.log(-0 === +0);
console.log(Object.is(-0, +0));

// 삼항 연산자는 표현식인 문 => 값처럼 사용할 수 있음
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);

var x = 2, result;
if (x % 2) result = '홀수';
else result = '짝수';
console.log(result);

// if ... else 문은 표현식이 아닌 문 => 값처럼 사용할 수 없음
// var x = 10;
// var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// console.log(result);

// 드 모르간의 법칙
console.log(!(x || y) === (!x && !y));
// console.log(!(x && y) === (!x || !y));

console.log(typeof undeclared);

console.log(Math.pow(5, 2));
console.log(Math.pow(5, 2.5));
console.log(Math.pow(5, 0));
console.log(Math.pow(5, -2));

// console.log(-5 ** 2);
// console.log((-5) ** 2);

var num = 5;
console.log(num **= 2);

console.log(2 * 5 ** 2);












