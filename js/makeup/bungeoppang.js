function 붕어빵틀(재료) {
    this.속 = 재료;
    가루 = '밀가루';
    console.log(this);
}

const 슈크림붕어빵 = new 붕어빵틀('슈크림');
const 고구마붕어빵 = new 붕어빵틀('고구마');

console.log(슈크림붕어빵);
console.log(고구마붕어빵);

console.log(붕어빵틀.prototype === 슈크림붕어빵.__proto__);
console.log(붕어빵틀.prototype === 고구마붕어빵.__proto__);

console.log(슈크림붕어빵.__proto__ === 고구마붕어빵.__proto__);
console.log(슈크림붕어빵.__proto__.__proto__ === Object.prototype);

console.log(붕어빵틀.__proto__ === Function.prototype);
console.log(붕어빵틀.__proto__.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

console.log(붕어빵틀.prototype);

붕어빵틀.prototype.가루 = '밀가루';
console.log(붕어빵틀.prototype);
console.log(붕어빵틀.가루);
