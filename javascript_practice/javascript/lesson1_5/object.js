//자바스크립트 객체

// 객체의 고유한 속성을 프로퍼티(property)라고 부르며, 여러 프로퍼티와 값의 쌍으로 표현된다.
// 객체가 호출하는 함수는 메소드라고 부른다.

// var account = { name: '한동석', number: '110-111-11111111', code: '1234' };
// account.프로퍼티명; --> 선언 또는 사용
// account["프로퍼티명"]

var account = {
  owner: '한동석',
  code: '1234',
  balance: 10000,
  deposit: function (money) {
    this.balance += money;
  },
  withdraw: function (money) {
    this.balance -= money;
  }
};

account.number = '110-111-111111'; //선언
account.number = '110-111-123111'; //수정

account.withdraw(3000);

with (console) {
  log(account);
  log(account.owner);
  log(account['balance']);
}
