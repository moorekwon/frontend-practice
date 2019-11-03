// 함수 표현식으로 생성한 함수
var add1 = (function () {
    var a = 10;
    return function(x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2));

// Function 생성자 함수로 생성한 함수
var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2));


// 즉시실행함수
(function () {} ());
(function () {})();
!function () {}();
+function () {}();

var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res);

res = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res);


// 콜백 함수
function print(f) {
    var string = 'Hello';
    return f(string);
}

var res1 = print(function (str) {
    return str.toUpperCase();
});

var res2 = print(function (str) {
    return str.toLowerCase();
});

console.log(res1);
console.log(res2);


var toUpperCase = function (str) {
    return str.toUpperCase();
};

var res = print(toUpperCase);
console.log(res);


function printToUpperCase() {
    var string = 'Hello';
    return string.toUpperCase();
}

console.log(printToUpperCase());


document.getElementById('myButton').addEventListener('click', function () {
    console.log('button clicked!');
});

setTimeout(function () {
    console.log('1초 경과');
}, 1000);


var res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res);

res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res);

