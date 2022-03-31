debugger

// function a(name) {
//     return `hello ${name}`;
// }

// const b = function(name) {
//     return `hello ${name}`;
// }

// const b = (name, name2) => `hello ${name} ${name2}`;

// const b2 = () => 'hello';

// const b3 = _ => 'hello';

// console.log(b('Tom', 'John'));
// console.log(b2());
// console.log(b3());

// window.name = 'John';

// const a = () => console.log(`Bye ${this.name}`);

// const person = {
//   name: 'Tom',
// //   hello: function() {
// //       console.log(`Hello ${this.name}`)
// //   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//     const a = () => console.log(`Bye ${this.name}`);
//     a();
//   }
// }

// // person.hello();

// function b() {
//   const a = () => console.log(`Bye ${this.name}`);
//   a();
// }

// b();

// function fn(a, b) {
//   console.log(a, b);
// }

// const fn = a => a;

// let c = fn(1, undefined);

// console.log(c);

// const a = (i) => console.log(i);

// a.prop = 0;
// a.method = () => console.log('Method');

// a('hello');
// a.method();

// console.log(a.prop);

const hello = (name) => console.log(`hello ${name}`);
const bye = (name) => console.log(`bye ${name}`);

const fn = (cb) => cb('Tom');

fn(hello);
fn(bye);
fn(name => console.log(`hello ${name}`));
