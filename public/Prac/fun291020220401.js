debugger;

/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

// 一般ユーザーがログインした場合 
class User {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  login() {
    // ログイン成功した場合
    console.log(`User: ${this.name}`);
    return this;
  }

  checkRoll() {
    /*
     * もしプロパティrollがnormalの場合
     * `you have normal roll`を出力
     * 
     * もしロパティrollがnormalではない場合
     * `login failed`を出力
     */

    // ログイン成功した場合
    if(this.roll === 'normal') {
      console.log(`you have ${this.roll} roll`);
      return this;
    }
  }

  redirect() {
    // ログイン成功した場合
    console.log('redirect : /');
    return this;
  }
}

class AdminUser extends User {
  constructor(name, roll) {
    super(name, roll);
  }

  checkRoll() {
    if(this.roll === 'admin') {
      console.log(`you have ${this.roll} roll`);
      return this;
    }
  }

  redirect() {
    console.log('redirect : /admin');
    return this;
  }
}

function loginController(user) {
  if(user.login()
    && user.checkRoll()
    && user.redirect()) {
      console.log('login success')
    } else {
      console.log('login failed');
    }
}

const user = new User('Tom', 'normal');
// const user = new AdminUser('Tom', 'admin');

loginController(user);
