console.log(parseInt('01000001', 2));
console.log(String.fromCharCode(parseInt('01000001', 2)));


// 리터럴
// 2진수: 0b, 8진수: 0o, 16진수: 0x

console.log(0b01000001 === 65);
console.log(0b01000001 === 0o101);
console.log(0b01000001 === 0x41);

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

// 리터럴 표현식
10
'Hello'

// (선언 후) 식별자 표현식
const sum = 1 + 2;
console.log(sum);

const person = {
    name: 'hyojin'
};
console.log(person.name);

const arr = [1, 2, 3];
console.log(arr[1]);

// 연산자 표현식
// 10 + 20
// sum = 10
// sum !== 10

// (선언 후) 함수/메소드 호출 표현식
// square()
// person.getName()

var integer = 10;
var double = 10.12;
var negative = -20;

console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'String');

// var template = '<ul class="nav-item">\n';
// template += '\t<li><a href="#home">Home</a></li>\n';
// template += '\t<li><a href="#about">About</a></li>\n';
// template += '</ul>';

// console.log(template);

const template = `
<ul class="nav-items">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
</ul>`;

console.log(template);

var first = 'Hyojin';
var last = 'Kwon';

console.log('My name is ' + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);

var foo;
console.log(foo)

var key = Symbol('key');
console.log(key);
console.log(typeof key);

var obj = {};

obj[key] = 'value';
console.log(obj);
console.log(obj[key]);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);












