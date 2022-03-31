debugger;

/*
 * コンストラクタ関数
 * 新しく`オブジェクトを作成`するための
 * 雛形となる関数
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 18);
// const sun = new Person('Sun', 18);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.hello = function() {
//     console.log(`hello ${this.name}`);
//   }
// }

// Person.prototype.hello = function() {
//   console.log(`hello ${this.name}`);
// }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 18);
// const sun = new Person('Sun', 18);

// bob.hello();
// tom.hello();
// sun.hello();

// function F(a, b) {
//   this.a = a;
//   this.b = b;
//   return {};
// }

// F.prototype.c = function() {};

// function newOpe(c, ...args) {
//   const _this = Object.create(c.prototype);
//   const result = c.apply(_this, args);
//   // console.log(result, _this);
//   if(typeof result === "object" && result !== null) {
//     return result;
//   }

//   return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance);

// function F(a, b) {
//   this.a = a;
//   this.b = b;
//   // const result = new Object();
//   // result.a = 1;
//   // return { a: 1 }
// }

// F.prototype.c = function() {}

// const instance = new F(1, 2);
// console.log(instance instanceof F);
// console.log(instance.__proto__ === F.prototype);

// function fn(arg) {
//   if(arg instanceof Array) {
//     arg.push('value');
//   } else {
//     arg['key'] = 'value';
//   }
//   console.log(arg);
// }

// fn({})

// const fn = new Function('a', 'b', 'return a + b');

// const result = fn(1, 2);
// console.log(result);

// function fn2(a, b) {
//   return a + b;
// }

// console.log(fn2 instanceof Function);
