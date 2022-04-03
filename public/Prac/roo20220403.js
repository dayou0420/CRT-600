// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function genIterator(max) {
//   let i = 0;

//   return {
//     next: function() {
//       if(i >= max) {
//         return {
//           done: true
//         }
//       } else {
//         return {
//           done: false,
//           value: i++
//         }
//       }
//     }
//   }
// }

// function* genIterator(max = 10) {
//   let i = 0;

//   while(i < max) {
//     yield i++
//   }
//   return;

// }

// const it = genIterator(100);

// let a = it.next();
// while(!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

// const obj = {
//   [Symbol.iterator]: genIterator
// }

// for(const i of obj) {
//   console.log(i);
// }

// const items = {
//   prop1: 'value1',
//   prop2: 'value2',
//   prop3: 'value3'
// }

// Object.prototype[Symbol.iterator] = function*() {
//   for(let key in this) {
//     yield [key, this[key]];
//   }
// }

// for(let [k, v] of items) {
//   console.log(k, v);
// }

// const arry1 = [1, 2, 3, 4, 5];
// const arry2 = [0, ...arry1, 7];
// arry2.push(6);
// console.log(arry1);
// console.log(arry2);
// console.log(arry1 === arry2);

// function sum(...args) {
//   let ret = 0;
//   for(let v of args) {
//     ret += v;
//   }
//   return ret;
// }

// const result = sum(1, 2, 3, 4);
// console.log(result);

const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
}

Object.prototype[Symbol.iterator] = function*() {
  for(let key in this) {
    yield [key, this[key]];
  }
}

const arry3 = { ...obj1 };

console.log(arry3);
