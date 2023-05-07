var datas = new Array(100).fill();
//JS 화살표 연산자 사용 시 여러개의 매개변수를 전달했을 경우 반드시 익명함수 소괄호를 작성해야한다.
datas.forEach((v, i, ar) => {
  ar[i] = i + 1;
});

datas.filter((v) => v % 2 == 0);

var hangle = '공일이삼사오육칠팔구';
var input = '일공이사'.split('');
console.log(input.map((v) => hangle.indexOf(v)).join(''));
