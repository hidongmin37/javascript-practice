/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division(Arr, divNum) {
  let totalArr = [];
  let returnArr = [];
  let result = Arr.map((v, i, eachArr) => {
    returnArr.push(v);
    if (i !== 0 && i !== 1 && i % divNum == 0) {
      totalArr.push(returnArr);
      returnArr = [];
    }
    return returnArr;
  });
  totalArr.push(returnArr);
  return totalArr;
}

console.log(division([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
