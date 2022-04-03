/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

function* genStep({min = 0, max = 20, step = 1} = {}) {
  for(let i = min; i <= max; i += step) {
    yield i;
  }
}

const it = genStep({min: 4, max: 10, step: 2});

for(let value of it) {
  console.log(value);
}

// function genStep(min, max, step) {
//   let i = min - step;

//   return {
//     next: function() {
//       i += step;
//       if(i >= max) {
//         return {
//           done: true
//         }
//       } else {
//         return {
//           done: false,
//           value: i
//           // value: i = i + step
//         }
//       }
//     }
//   }
// }

// const it = genStep(4, 10, 2);

// let a = it.next();

// while(!a.done) {
//   console.log(a.value);
//   a = it.next();
// }