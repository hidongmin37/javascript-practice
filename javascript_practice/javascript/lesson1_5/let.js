// var는 함수만 영역으로 취급하기 때문에
// for문에서는 선언한 i는 전역변수이다.

//for(var i=0; i<10; i++){}
//console.log(i);

// for (var i = 0; i < 10; i++) {}
// console.log(i);
for (let i = 0; i < 10; i++) {}

// let은 모든 중괄호를 기준으로한다.
console.log(i); //not defined가 나온다.

//let 키워드는 두번이상 선언되는 문법을 허용하지 않는다.

// 전역 변수는 선언의 충돌을 막기 위해 let을 권장하고,
// 함수 영역 안에서는 변수를 선언할 때에는 var를 권장한다.

//제어문에서는 상황에따라 중괄호 기준 let,함수기준은 var
