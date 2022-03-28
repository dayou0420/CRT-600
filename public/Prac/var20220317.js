debugger;

// let a = 0;
// let a = 0;

// var b = 0;
// var b = 1;

// function printTypeAndValue(value) {
//   console.log(typeof value, value);
// }

// let a = 0;

// printTypeAndValue(a);

/*
'1'という文字列に合わせて結合される
+演算子は数値の計算と文字列結合に使われる
*/

// let b = '1' + a;

// let b2 = parseInt('1') + a;

// printTypeAndValue(b);
// printTypeAndValue(b2);

/*
'-'という演算子は数値にしか使われない
*/

// let c = 15 - b;

// printTypeAndValue(c);

// let c2 = 15 + b;
// printTypeAndValue(c2);
// string 1510

// let d = c - null;

// printTypeAndValue(d);

/*
trueが数値である場合1とみなされる
*/

// let e = d - true;

// printTypeAndValue(e);

/*
厳格な等価性は型を含めて評価する
*/

// function printEquality(a, b) {
//   console.log('厳格な等価性');
//   console.log(a === b);
//   console.log('抽象的な等価性');
//   console.log(a == b);
// }

// let a = '1';
// let b = 1;

// let c = true;

// printEquality(b, c);

// let e = "";
// let f = 0;
// let g = "0";

// printEquality(e, f);
// printEquality(f, g);

/*
falsyな値
Booleanで真偽値に変換した場合に
falseになる値
*/

/*
falsy
- false
- null
- 0
- undefined
- 0n
- NaN
- ""
*/

// let a = 0;
// let a2 = "";
// let a3 = 0n;
// let a4 = null;
// let a5 = undefined;
// let a6;
// let a7 = NaN;
// let a8 = parseInt("");

// console.log(Boolean(a));
// console.log(Boolean(a2));
// console.log(Boolean(a3));
// console.log(Boolean(a4));
// console.log(Boolean(a5));
// console.log(Boolean(a6));
// console.log(Boolean(a7));
// console.log(Boolean(a8));

// if(!a) {
//   console.log('Hello');
// } else {
//   console.log('Bye')
// }

/*
&&はfalsyの値を返す
無かったら一番最後の値を返す
*/

/*
||はtruthyの値を返す
無かったら一番最後の値を返す
*/

// const a = 1;
// const b = 2;
// const c = 3;

// console.log('&&');
// console.log(a && b && 3);
// console.log('||');
// console.log(a || b || c);
// console.log((a || b) && c);

// function hello(name = 'Tom') {
//   // if(!name) {
//   //   name = 'Tom';
//   // }
//   /*
//     or条件の場合数字の取り扱いには注意
//   */
//   // name = name || 'Tom'
//   console.log(`Hello ${name}`);
// }

// hello()

// let name = 'Bob';
// name && hello(name);
// // if(name) {
// //   hello(name);
// // }

/*
Primitive type
- 変数には`値`が格納される
- 一度作成するとその値は変更できない
*/

/*
1. 'Hello' // let a = 'Hello';
2. a       // 
3. 'Bye'   // a = 'Bye';
aが持つ参照が切り替わっただけ
*/

/*
Object
- 変数には`参照`が格納される
- 値を変更することができる
* 名前(プロパティー)付きの参照を管理する
*/

/*
1. 'Hello' //
2. {prop}  //
3. {...}   //
4. a       //
*/

/*
let obj = {
  property1: 'Hello';
  property2: function() {
  },
  property3: {
    d: 'Bye'
  }
}
*/

// let a = 'Hello';
// let b = a;
// b = 'Bye';
// console.log(a, b);

// let c = {
//   property: 'Hello'
// }
// let d = c;
// d = {};
// //d.property = 'Bye';
// console.log(c, d);

// const a = 'Hello';
// a = 'Bye';

// const b = {
//   property: 'Hello'
// }
// // b = {};
// b.property = 'Bye';
// console.log(b);

// function fn(a) {}

// let b = 0;

// fn(b);

// let a = 0;

// function fn1(arg1) {
//   arg1 = 1;
//   console.log(a, arg1)
// }

// fn1(a);

// let b = {
//   property: 0
// }

// function fn2(arg2) {
//   arg2.property = 1;
//   console.log(b, arg2);
// }

// fn2(b);

// function fn3(arg3) {
//   arg3 = {};
//   console.log(b, arg3);
// }

// fn3(b);

/*
Here
*/

// const a = {
//   property: 0
// }

// let { property } = a;

// property = 1;

// console.log(a, property);

// function fn({ property }) {
//   property = 1;
//   console.log(a, property);
// }

// fn(a);

// const c = {
//   property1: {
//     property2: 0
//   }
// }

// let { property1 } = c;

// property1.property2 = 1;

// console.log(property1);

/*
Here
*/

// const a = {
//   property: 0
// }

// const b = {
//   property: 0
// }

// console.log(a.property === b.property);
// console.log(a == b);

// const c = a;

// console.log(a === c);

// let a = 0;

// function fn1(arg1) {
//   arg1 = 1;
//   console.log(a, arg1);
// }

// fn1(a);

// let arg1 = a;
// arg1 = 1;
// console.log(a, arg1);

// let b = {
//   property: 0
// }

// function fn2(arg2) {
//   arg2.property = 1;
//   console.log(b, arg2);
// }

// fn2(b);

// function fn3(arg2) {
//   arg2 = {};
//   console.log(b, arg2);
// }

// fn3(b);

/*
分割代入
オブジェクトから特定のプロパティーを
抽出して宣言する
*/

// const a = {
//   property: 'Hello'
// }

// let { property } = a;
// property = 'Bye';

// const a = {
//   property: 0
// }

// // let { property: b } = a;
// let { property } = a;

// property = 1;

// console.log(a, property);

// // function fn(obj) {
// //   let { property } = obj;
// //   property = 1;
// //   console.log(obj, property);
// // }

// function fn({ property }) {
//   property = 1;
//   console.log(a, property);
// }

// fn(a);

// const c = {
//   property1: {
//     property2: 0
//   }
// }

// let { property1 } = c;
// console.log(property1);

// property1.property2 = 1;

// console.log(c, property1);
