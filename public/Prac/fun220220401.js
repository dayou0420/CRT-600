'use strict';

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

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   hello() {
//     console.log(`hello ${this.name}`);
//   }
// }

// const bob = new Person('Bob', 23);

// console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log(`hello ${this.name}`);
// }

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

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   hello() {
//     console.log(`hello ${this.name}`);
//   }
// }

// class Japanese extends Person {
//   constructor(name, age, gender) {
//     super(name, age);
//     this.gender = gender;
//   }

//   hello() {
//     super.hello();
//     console.log(`こんにちは ${this.name}`);
//   }

//   bye() {
//     console.log(`さようなら ${this.name}`);
//   }
// }

// const taro = new Japanese('太郎', 23, 'Male');

// taro.hello();

// taro.bye();

// const american = {
//   name: 'Bob',
//   hello() {
//     console.log(`hello ${this.name}`);
//   }
// }

// const bob = {
//   name: 'Bob',
//   hello() {
//     super.hello();
//   }
//   // hello() {
//   //   console.log(`hello ${this.name}`);
//   // }
// }

// Object.setPrototypeOf(bob, american);

// bob.hello();

// const arry = new Array(1, 2, 3, 4);
// console.log(arry);

// arry[0];
// arry.hasOwnProperty(0);

// const a = new String('hello');
// console.log(a.toUpperCase());

// const a = 'hello'.toUpperCase();
// console.log(a);

// const b = new Number(100);
// console.log(b.toExponential());

/*
 * シンボル
 * プロパティーの重複を避けるために、
 * `必ず一意の値`を返す関数
 */

// const s = Symbol('hello');
// const s2 = Symbol('hello');

// console.log(typeof s);

// const str = new String('Tom');
// console.log(str);

// String.prototype[s] = function() {
//   return `hello ${this}`;
// }

// const tom = 'Tom';
// console.log(tom[s]());

// const obj = { prop: 0 };

// const obj = {};

// Object.defineProperty(obj, 'prop', {
//   configurable: true,
//   value: 0,
//   writable: true
// })

// delete obj.prop;

// // obj.prop = 1;
// console.log(obj.prop);

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

// console.log(descriptor);

function Person1(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
  get: function() {
    console.log('hello');
    return this._name;
  },
  set: function(val) {
    this._name = val;
  }
})

const p1 = new Person1('Bob', 23);

// p1.name = 'Tom';

console.log(p1.name);

class Person2 {

  constructor() {
    this._name = name;
    this._age = age;
  }

  get name() {
    console.log('hello');
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  static hello() {
    console.log('hello');
  }

}

const p2 = new Person2('Bob', 23);

Person2.hello();