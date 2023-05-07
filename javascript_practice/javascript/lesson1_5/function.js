// js에서는 오버로딩을 지원하지 않고, 같은 이름으로 여러개의 함수를 선언하면, 가장 마지막에 선언한 함수로 사용된다.
// function add(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// function add(num1, num2) {
//   return num1 + num2;
// }
// //js에서 함수는 매개변수의 개수보다 적게 전달해도, 많이 전달해도 오류가 나지 않는다.
console.log(add(1, 3));
console.log(add(1, 3, 4));
// 가변인자
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log('이름 :' + name);
    for (var i = 0; i < args.length; i++) {
        console.log('기타정보 : ' + args[i]);
    }
}
