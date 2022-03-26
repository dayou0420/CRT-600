/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
console.log("0 == false", 0 == false);
console.log("0 === false", 0 === false);
console.log('"false" == false', "false" == false);
console.log('"0" == 0', "0" == 0);
console.log('Boolean("0") === false', Boolean("0") === false);
console.log('Boolean(0) === false', Boolean(0) === false);
console.log('!Boolean(0) === false', !Boolean(0) === false);
console.log('-1 == false', -1 == false);
console.log('!10 === false', !10 === false);


/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
 function a(num) {
   // num = num || 'Nothing';
   if(num === undefined || num === null) {
     num = -1;
   }
   console.log(typeof num, num);
 }
 
 a(-2);

//  let num = 1;
//  if(num >= 0) {
//    a(num);
//  }
 
 
 /**
  * 問題３：
  * 以下のコードを実行した際にコンソールに
  * 期待の出力を行うような関数greetingを
  * 作成してみてください。
  *
  * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
  * greeting("Bob"); -> 出力結果："hello, Bob"
  *
  */

 // 'Bob'と'Hi'が入力される
 // 'Hi, Bob'と出力される
 // もし引数が'Bob'のときは
 // 'Hello, Bob'と出力される

 function greeting(name, saySomethig) {
   saySomethig = saySomethig || 'Hello';
   console.log(`${saySomethig}, ${name}`);
 }

 greeting('Hi', 'Bob');
 greeting('Bob');
