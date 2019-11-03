// 문자열 레버 객체
// 유사배열객체면서 이터러블
const strObj = new String('Kwon');
console.log(strObj);
console.log(typeof strObj);

console.log(strObj[1]);
console.log(strObj.charAt(1));


// 이터러블
// for...of로 순회 가능(일반 객체는 못씀), 스프레드 문법의 대상
console.log(typeof strObj[Symbol.iterator]);
console.log(strObj[Symbol.iterator]);

console.log(typeof strObj[Symbol.iterator]());
console.log(strObj[Symbol.iterator]());


// String 메소드 (String.prototype)
// indexOf
console.log(strObj.indexOf('wo'));
console.log(strObj.indexOf(''));
console.log(strObj.indexOf('s'));

// includes
console.log(strObj.includes('wo', 2));
console.log(strObj.includes(''));
console.log(strObj.includes('s'));

// startsWith / endsWith (ES6)
console.log(strObj.startsWith('K'));
console.log(strObj.startsWith('wo'));
console.log(strObj.endsWith('n'));

// 두번째 인수는 index까지가 아니라 digit 수까지
console.log(strObj.endsWith('n', 3));
console.log(strObj.endsWith('n', 4));

// substring vs slice
// slice 더 권장(음수까지 가능)
console.log(strObj.substring(1, 3));
console.log(strObj.slice(-3));

// uoUpperCase / toLowerCase
console.log(strObj.toUpperCase());
console.log(strObj.toLowerCase());

// trim
const str = '     Kwon    ';
console.log(str.trim());

console.log(str.trimStart());
console.log(str.replace(/^\s+/g, ''));

console.log(str.trimEnd());
console.log(str.replace(/\s+$/g, ''));

// repeat
console.log(str.repeat(2));

// replace
console.log(str.replace('wo', '<strong>$&</strong>'));


function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, match => {
        console.log(match);
        return match[1].toUpperCase();
    });
}

const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase));

// split
console.log(str.split(' ', 6));
console.log(str.split('', 6));





