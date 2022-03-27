debugger;

// let a = 0;
// var b = 0;
// function c() {};

// console.log(b);

// window.d = 1;
// let d = 2;
// console.log(d);

// function a() {
//   let b = 0;
//   console.log(b);
// }
// a();

// {
//   let c = 1;
//   console.log(c);

//   const d = function() {
//     console.log('d is called');
//   }

//   d();
// }

// d();

// let a = 2;

// function fn1() {
//   let b = 1;
//   function fn2() {
//     let c = 3;
//     console.log(b);
//   }
//   fn2();
// }

// fn1();

// let a = 2;
// window.a = 4;

// function fn1() {
//   // let a = 1;
//   function fn2() {
//     let a = 3;
//     console.log(a);
//   }
//   fn2();
// }

// fn1();

/*
increment();1
increment();2
increment();3
*/

/*
let num = 0;
がどこからでも参照できてしまう
*/

/*
`Factory`
は何かを生成する関数名として使われる
*/

// function incrementFactory() {

//   let num = 0;

//   function increment() {
//     num = num + 1;
//     console.log(num);
//   }

//   return increment;
// }

// const increment = incrementFactory();

// increment();
// increment();
// increment();

// function addNumberFactory(num) {
//   function addNumber(value) {
//     return num + value;
//   }
//   return addNumber;
// }

// const addNumber5 = addNumberFactory(5);
// const addNumber10 = addNumberFactory(10);
// const result = addNumber10(10);
// console.log(result);

function a() {
  console.log('called');
}

a();

(function() {
  console.log('called');
})();

let b = function() {
  console.log('called');
}();

let c = function(d) {
  console.log(`called ${d}`);
}(10);

let e = function() {
  console.log('called');
  return 0;
}();

let f = function() {

  console.log('called');

  let privateValue = 0;
  let publicValue = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log(`publicFn is called ${privateValue++}`);
  }

  return {
    publicValue: publicValue,
    publicFn: publicFn
  };
}();

f.publicFn();
f.publicFn();
f.publicFn();
f.publicFn();

console.log(f.publicValue);
