//프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다. 단, 반드시 대문자로 시작해준다.

function User(id, pw, name, age) {
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age || 1; // default값 설정
  this.intro = function () {
    with (console) {
      log(this.id);
      log(this.pw);
      log(this.name);
      log(this.age);
    }
  };
}

han = new User('hds124', '1233', 'jangdm', 20);
jogn = new User('emde221', '6033', 'eked', 26);

console.log(han);
han.intro();
jogn.intro();

console.log(JSON.stringify(han)); // json형태로 전환
console.log(JSON.parse(`{"id":"hds124","pw":"1233","name":"jangdm","age":20}`)); //json을 객체로 전환
console.log(JSON.parse(`{"id":"hds124","pw":"1233","name":"jangdm","age":20}`).pw); //json을 객체로 전환
