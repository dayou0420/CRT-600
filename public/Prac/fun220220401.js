debugger;

// let d = 0;

// function fn() {
//   let d = 1;
//   const fn1 = new Function('a', 'b', 'return a * b * d');
//   return fn1;
// }

// // const fn1 = new Function('a', 'b', 'return a + b * d');

// const f = fn();

// const result = f(1, 2);

// console.log(result);

// function fn2(a, b) {
//   return a + b;
// }

// console.log(fn2 instanceof Function);

// const obj = new function() {
//   this.a = 0;
// }

// const fn3 = new Function('this.a = 0');

// const obj3 = new fn3();

// console.log(obj, fn3);

/*
 * プロトタイプチェーン
 * プロトタイプの`多重形成`を
 * プロトタイプチェーン
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // this.hello = function() {
//   //   console.log(`OwnProperty: hello ${this.name}`);
//   // }
// }

// // Person.prototype.hello = function() {
// //   console.log(`Person: hello ${this.name}`);
// // }

// Object.prototype.hello = function() {
//   console.log(`Object: hello ${this.name}`);
// }

// const bob = new Person('Bob', 18);

// bob.hello();

// const result = bob.hasOwnProperty('name');

// console.log(result);

// // console.log('name' in bob);

// console.log('hello' in bob);

/*
 * プロトタイプ継承`
 * 別のコンストラクター関数の`プロトタイプを受け継い`で、
 * 機能を流用できるようにすること
 * 
 * 継承
 * 別のコンストラクター関数を受け継ぐこと
 * 
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log(`hello ${this.name}`);
// }

// function Japanese(name, age, gender) {
//   Person.call(this, name, age);
//   this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype);

// Japanese.prototype.hello = function() {
//   console.log(`こんにちは ${this.name}`);
// }

// Japanese.prototype.bye = function() {
//   console.log(`さようなら ${this.name}`);
// }

// const taro = new Japanese('太郎', 23, 'Male');

// console.log(taro);

// taro.hello();
// taro.bye();


