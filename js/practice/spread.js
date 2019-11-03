console.log(...[1, 2, 3]);
console.log(...'hello');
// console.log(...new Map(['a', '1'], ['b', '2']));
console.log(...new Set([1, 2, 3]));
// console.log(...{ a: 1, b: 2 });

// const list = ...arr;
// console.log(list);

// const arr = [1, 2, 3];
// const maxValue = Math.max([1, 2, 3, 4]);
// console.log(maxValue);

// var arr = [1, 2, 3];
// var maxValue = Math.max(...arr);
// console.log(maxValue);

// function foo(para, ...res) {
//     console.log(para);
//     console.log(res);
// }
// foo(...[1, 2, 3]);

// var arr = [1, 2].concat([3, 4]);
// var arr = [1, 2, ...[3, 4]];
// console.log(arr);

// var arr1 = [1, 2];
// var arr2 = [3, 4];

// Array.prototype.push.apply(arr1, arr2);
// arr1.push(...arr2);
// console.log(arr1);

// const arr1 = [1, 4];
// const arr2 = [2, 3];

// arr1.splice(1, 0, ...arr2);

// Array.prototype.splice.apply(arr1, [1, 0, 2 ,3]);
// console.log(arr1);

// var origin = [1, 2];
// var copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// function sum() {
    // var args = Array.prototype.slice.apply(arguments);
    // console.log(arguments);
//     const args = [...arguments];
//     console.log(args);

//     return args.reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2, 3));

// const merged = Object.assign({ x: 1, y: 2 }, { z: 0 });
// console.log(merged);

// const merged = {...{ x: 1, y: 2 }, z: 0 };
// console.log(merged);

// const n = { x: 1, y: 2, ...[{a: 3}], b: 4};
// console.log(n);

