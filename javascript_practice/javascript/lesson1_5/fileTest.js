let file = require('fs');
let user = new Object();

user.name = '한동석';
user.id = 'hds1234';
user.pw = '1234';

let userJSON = JSON.stringify(user);
console.log(userJSON);

// file.writeFile('경로', '내용', '인코딩', '콜백함수(오류났을 경우 실행)');
// file.writeFile('user.json', userJSON, 'utf-8', function (e) {
//   console.log(e ? e : '출력 성공');
// });

// file.readFile('경로', '인코딩', '콜백함수(에러객체,내용)');
file.readFile('user.json', 'utf-8', function (e, content) {
  if (e) {
    console.log(e);
  } else {
    let user = JSON.parse(content);
    console.log(user);
  }
});
