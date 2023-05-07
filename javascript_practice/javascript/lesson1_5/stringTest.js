//1~100까지 Array 객체 담은 후 짝수만 출력
var datas = new Array(100).fill();
datas.forEach((v, i, ar) => {
  ar[i] = i + 1;
});

console.log(datas.filter((v) => v % 2 == 0));

//한글을 숫자로 변경

// 입력 예)일공이사
// 출력 예)1024
let hangle = '공일이삼사오육칠팔구';
let input = '일공이사'.split('');
console.log(input.map((v) => hangle.indexOf(v)).join(''));
//숫자를 한글로 변경

//입력 예) 1024
// 출력 예)일공이사
let number = '0123456789';
let inputN = '1024'.split('');
console.log(inputN.map((v) => hangle.charAt(v)).join(''));

//1~100까지 합 출력
let datafill = new Array(100).fill();
let sumNum = 0;
console.log(datafill.map((v, i, ar) => (ar[i] = i + 1)).forEach((v, i, ar) => (sumNum += ar[i])));
console.log(sumNum);
