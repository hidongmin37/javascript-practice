// forEach(callback):  반복문
let datas = [20, 5, 6, 12, 10, 19];
datas.forEach(function (v) {
  console.log(v);
});

datas.forEach(function (v, i, ar) {
  ar[i] = v * v;
});
console.log(datas);

//indexOf(값);: 값을 해당 Array에서 찾은 뒤 인덱스 번호리턴,
// 못찾으면 -1 리턴

// map(callback)
datas
  .map(function (v) {
    return v * 2;
  })
  .forEach(function (v, i, ar) {
    console.log((datas[i] = ar[i]));
  });
console.log(datas);

// filter(callback)
//리턴이 true인 값만 추출
datas = datas.filter(function (v) {
  return v % 10 == 0;
});
console.log(datas);

// length가 자바스크립트에서는 변수로 된다.

var ar = new Array(10).fill(); //fill안쓰고 forEach쓰면 안돌아감
ar.forEach(function (v, i) {
  console.log(i);
});
