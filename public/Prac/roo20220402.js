// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }

// let a = (1 + 2) * 3;
// console.log(a);

// let a = 0;
// let b = ++a;
// console.log(a, b);

// let a = 0;
// console.log(a);

// let b;
// // a = b = a + 1;
// // a = b = 1;
// console.log(a, b);
// // let b = a++;
// a = (b = a) + 1;

// function fn() {
//   let a = 0;
//   return a++;
// }

// console.log(!(fn() * 5));

// for(let i = 0; i < 5; i++) {
//   const j = i * 2;
//   setTimeout(function() {
//     console.log(j);
//   }, 1000);
// }

// const arry = [1, 2, 3, 4, 5];

// for(let i = 0; i < arry.length; i++) {
//   console.log(arry[i]);
// }

// let i = 0;

// while(i < arry.length) {
//   console.log(arry[i]);
//   i++;
// }

// let v, i = 0;
// while(v = arry[i++]) {
//   console.log(v);
// }

// const s = Symbol();
// const obj = {
//   prop1: 'value1',
//   prop2: 'value2',
//   prop3: 'value3',
//   [s]: 'value4'
// }

// Object.prototype.method = function() {};
// // Object.defineProperty(Object.prototype, 'method', {
// //   enumerable: false
// // });

// // Object.defineProperty(obj, 'prop1', {
// //   enumerable: false
// // });

// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
// console.log(d);

// for(let key in obj) {
//   // if(obj.hasOwnProperty(key)) {
//   //   console.log(key, obj[key]);
//   // }
//   console.log(key, obj[key]);
// }

// const arry = ['a', 'b', 'c'];

// arry[4] = 'e';

// Object.prototype.method = function(){}

// Object.defineProperty(arry, 0, {
//   enumerable: false
// })

// for(let v of arry) {
//   console.log(v);
// }

// const map = new Map();
// const key1 = {};

// map.set(key1, 'value1');

// console.log(map.get(key1));

// const key2 = function() {}
// map.set(key2, 'value2')

// console.log(map.get(key2));

// let key3 = 0;
// map.set(key3, 'value3')

// console.log(map.get(key3));

// map.delete(key3);

// for(const [k, v] of map) {
//   console.log(k, v);
// }

// const s = new Set();

// s.add(key1);
// s.add(key2);
// s.add(key3);

// for(let k of s) {
//   console.log(k);
// }

debugger;
