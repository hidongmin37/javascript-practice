// var x; //전역변수

// function f() {
//   var y; //지역변수
//   var x = 20; // 지역 변수
//   y = 10; //지역 변수
//   z = 30; //전역변수
// }

// f();

// console.log(x);
// console.log(y);

// 지역변수와 전역변수의 이름이 같은 경우, 지역에서 전역변수에 접근하는 방법은 무엇일까?
// 1. global 객체
// global.x;
// 2. this 객체
this.x;
// 3. globalThis 객체
globalThis.x;
// 4. window 객체
window.x;

var x;
function f() {
  var x;
  x = 10;
  //   window.x;
  this.x;

  // 변수 사용시 가까운 스코프부터 찾는다.
  // 따라서 함수 안에 사용된 x는 지역변수이다.
}

f();
