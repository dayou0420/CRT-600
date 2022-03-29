debugger;

/*
同じ関数名だったら
後からのものが実行される
*/

// function fn(...args) {
//   console.log(args);
//   const a = arguments[0];
//   const b = arguments[1];
//   console.log(arguments);
//   console.log(a, b);
//   return a;
// }

// const fn = function(a, b) {
//   console.log(a, b);
// }

// function fn(a) {
//   console.log(2);
// }

// fn(1);

// let c = fn(1, undefined);
// console.log(c);

/*
`関数`は`実行可能`な`オブジェクト`
*/

// function a() {
//   console.log('Hello');
// }

// a.property = 0;
// a.method = function() {
//   console.log('Method');
// }

// a();
// a.method();
// console.log(a.property);

/*
コールバック関数
他の関数に`引数として`
渡される関数
*/

// function hello(name) {
//   console.log(`Hello ${name}`);
// }

// function bye() {
//   console.log('Bye');
// }

// function fn(cb) {
//   cb('Tom');
// }

// fn(hello);
// fn(bye);
// fn(function(name) {
//   console.log(`Hello ${name}`);
// })

// setTimeout(hello, 2000);

/*
`呼び出し元のオブジェクト`への
参照を保持するキーワード
*/

// const person = {
//   name: 'Tom',
//   hello: function() {
//     console.log(`Hello ${this.name}`)
//   }
// }

// person.hello();

// function a() {
//   console.log('Hello');
// }

// a.prop = 0;
// a.method = function() {
//   console.log('Method');
// }

// a();
// a.method();
// console.log(a.prop);

/*
関数は実行可能なオブジェクトである
*/

/*
コールバック関数
他の関数に`引数として`
渡される関数
*/

// function hello(name) {
//   console.log(`Hello ${name}`);
// }

// function bye() {
//   console.log('Bye');
// }

// function fn(cb) {
//   cb('Tim');
// }

// fn(hello);
// fn(bye);
// fn(function(name) {
//   console.log(`Hello ${name}`);
// })

// setTimeout(hello, 2000);

/*
`this`
呼び出し元のオブジェクトへの
参照を保持するキーワード
*/

// const person = {
//   name: 'Tom',
//   hello: function() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// person.hello();

// window.name = 'John';

// const person = {
//   name: 'Tom',
//   hello: function() {
//     console.log(`Hello ${this.name}`);
//     a();
//   }
// }

// const ref = person.hello;
// ref();

// person.hello();

// function a() {
//   console.log(`Hello ${this.name}`);
// }

window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log(`Hello ${this.name}`);
    a();
  }
}